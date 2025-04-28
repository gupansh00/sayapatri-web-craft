
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// Use Unsplash images that will be replaced later
const images = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80", 
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80",
];

const HeroBackgroundSlider = () => {
  const [api, setApi] = React.useState<any>();

  // Auto-advance with 5 second interval
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (api) {
      // Make sure the carousel is properly initialized
      api.scrollTo(0);
      api.reInit();
    }
  }, [api]);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[autoplayPlugin.current]}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${image})`,
                  width: "100%",
                  height: "100vh",
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <CarouselPrevious className="absolute -left-12 bg-white/30 hover:bg-white/50 text-white border-none" />
          <CarouselNext className="absolute -right-12 bg-white/30 hover:bg-white/50 text-white border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBackgroundSlider;
