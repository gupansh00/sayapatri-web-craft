
import { Button } from '@/components/ui/button';
import HeroBackgroundSlider from './HeroBackgroundSlider';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden">
      <HeroBackgroundSlider />
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Nepal through Innovative IT Solutions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We provide cutting-edge technologies and training to help businesses thrive in the digital era.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-sayapatri-500 hover:bg-sayapatri-600 text-white transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white hover:bg-white/20 text-white transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
