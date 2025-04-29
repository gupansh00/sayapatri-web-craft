
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

// Service-related images that better represent the company offerings
const images = [
  "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1920&q=80", // Web Development - modern laptop with code
  "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1920&q=80", // App Development - mobile app interface
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1920&q=80", // Graphic Design - creative workspace
  "https://images.unsplash.com/photo-1574717024534-e7863f242c48?auto=format&fit=crop&w=1920&q=80", // Video Editing - video production setup
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1920&q=80", // UI/UX Design - wireframes and design elements
];

// Caption text for each slide
const captions = [
  "Web Development",
  "Mobile App Development",
  "Graphic Design",
  "Video Production",
  "UI/UX Design"
];

const HeroBackgroundSlider = () => {
  const [api, setApi] = React.useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance with 5 second interval - faster autoplay for smoother experience
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    // Update currentIndex when slide changes
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    // Initialize
    onSelect();

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const handleIndicatorClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
        plugins={[autoplayPlugin.current]}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex === index ? `active-${index}` : `inactive-${index}`}
                  initial={{ opacity: 0, scale: currentIndex === index ? 1.05 : 1 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    scale: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${image})`,
                    width: "100%",
                    height: "100vh",
                  }}
                >
                  {currentIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="absolute bottom-32 left-12 text-white z-10"
                    >
                      <h3 className="text-xl md:text-2xl font-bold bg-black/40 px-4 py-2 rounded-md inline-block">
                        {captions[index]}
                      </h3>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Improved navigation controls with better styling */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-4 z-20">
          {/* Slide indicators */}
          <div className="flex space-x-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleIndicatorClick(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-500 
                  ${currentIndex === idx 
                    ? "bg-white w-6 scale-110" 
                    : "bg-white/40 hover:bg-white/70"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <CarouselPrevious 
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none z-20 transition-transform duration-300 hover:scale-110" 
          aria-label="Previous slide"
        />
        
        <CarouselNext 
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none z-20 transition-transform duration-300 hover:scale-110" 
          aria-label="Next slide"
        />
      </Carousel>
    </div>
  );
};

export default HeroBackgroundSlider;
