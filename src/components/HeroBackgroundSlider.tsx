import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { EmblaCarouselType } from "embla-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Service-related images
const images = [
  "https://res.cloudinary.com/dfgbiud18/image/upload/v1745944167/1745934693254_copy_rqbcie.jpg",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1920&q=80",
];

const HeroBackgroundSlider = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Create the autoplay plugin instance with proper configuration
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  // Toggle pause/play on hover
  const handleMouseEnter = React.useCallback(() => {
    setIsPaused(true);
    if (autoplayPlugin.current && autoplayPlugin.current.stop) {
      autoplayPlugin.current.stop();
    }
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsPaused(false);
    if (autoplayPlugin.current && autoplayPlugin.current.play) {
      autoplayPlugin.current.play();
    }
  }, []);

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

  useEffect(() => {
    console.log("Carousel API initialized:", api);
  }, [api]);

  const handlePrevious = React.useCallback(() => {
    console.log("Previous button clicked");
    if (api) {
      api.scrollPrev();
    } else {
      console.error("Carousel API is not initialized");
    }
  }, [api]);

  const handleNext = React.useCallback(() => {
    console.log("Next button clicked");
    if (api) {
      api.scrollNext();
    } else {
      console.error("Carousel API is not initialized");
    }
  }, [api]);

  // Handle indicator dots click
  const handleIndicatorClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      // Reset autoplay timer after manual navigation
      if (autoplayPlugin.current && autoplayPlugin.current.reset) {
        autoplayPlugin.current.reset();
      }
    }
  };

  // Log the state of the carousel for debugging
  useEffect(() => {
    console.log("Current index:", currentIndex);
    console.log("Is paused:", isPaused);
  }, [currentIndex, isPaused]);

  return (
    <div
      className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
                  key={
                    currentIndex === index
                      ? `active-${index}`
                      : `inactive-${index}`
                  }
                  initial={{
                    opacity: 0,
                    scale: currentIndex === index ? 1.05 : 1,
                  }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    scale: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
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
                      {/* Caption can be added here if needed */}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Buttons - Ensure these are properly visible and clickable */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={handlePrevious}
            className="bg-black/30 hover:bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={handleNext}
            className="bg-black/30 hover:bg-black/50 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-4 z-20 cursor-pointer">
          <div className="flex space-x-3">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={e => {
                  e.stopPropagation();
                  handleIndicatorClick(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer
                  ${
                    currentIndex === idx
                      ? "bg-white w-6 scale-110"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleIndicatorClick(idx);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBackgroundSlider;
