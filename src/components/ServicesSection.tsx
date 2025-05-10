
import { Code, Smartphone, Pencil, Video, Palette, Book } from "lucide-react";
import { motion } from "framer-motion";
import useTypewriterEffect from "@/hooks/useTypewriterEffect";

const ServicesSection = () => {
  const titleRef = useTypewriterEffect();
  
  const services = [
    {
      icon: <Code className="h-12 w-12 text-sayapatri-500 mb-4 transition-all duration-300 hover:scale-125 hover:text-sayapatri-600" />,
      title: "Web Development",
      description: "Custom websites, web applications, and e-commerce solutions tailored to your business needs."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-sayapatri-500 mb-4 transition-all duration-300 hover:scale-125 hover:text-sayapatri-600" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces."
    },
    {
      icon: <Pencil className="h-12 w-12 text-sayapatri-500 mb-4 transition-all duration-300 hover:scale-125 hover:text-sayapatri-600" />,
      title: "Graphic Design",
      description: "Eye-catching visual content creation including logos, branding materials, and marketing collateral."
    },
    {
      icon: <Video className="h-12 w-12 text-sayapatri-500 mb-4 transition-all duration-300 hover:scale-125 hover:text-sayapatri-600" />,
      title: "Video Editing",
      description: "Professional video production and editing services for promotional content and social media."
    },
    {
      icon: <Palette className="h-12 w-12 text-sayapatri-500 mb-4 transition-all duration-300 hover:scale-125 hover:text-sayapatri-600" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive engagement."
    },
    {
      icon: <Book className="h-12 w-12 text-sayapatri-500 mb-4 transition-all duration-300 hover:scale-125 hover:text-sayapatri-600" />,
      title: "Training Programs",
      description: "Comprehensive IT training for schools, colleges, and professionals to build technical skills."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="section-title before-typewriter mx-auto after:left-1/2 after:-translate-x-1/2 text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            We offer a comprehensive range of IT services designed to meet your business needs and help you stay ahead in the digital landscape.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card bg-white dark:bg-gray-700 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="mx-auto flex justify-center">
                <div className="p-4 rounded-full bg-sayapatri-50 dark:bg-gray-600 shadow-inner mb-2 transition-transform duration-300 hover:rotate-12">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
