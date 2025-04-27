
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="hero-bg min-h-[100vh] flex items-center justify-center text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
            Empowering Nepal through Innovative IT Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We provide cutting-edge technologies and training to help businesses thrive in the digital era.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sayapatri-500 hover:bg-sayapatri-600 text-white"
              asChild
            >
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white hover:bg-white/10 text-white"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
