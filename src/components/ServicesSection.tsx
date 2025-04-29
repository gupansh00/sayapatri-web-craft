
import { Code, Smartphone, Pencil, Video, Palette, Book } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-sayapatri-500 mb-4" />,
      title: "Web Development",
      description: "Custom websites, web applications, and e-commerce solutions tailored to your business needs."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-sayapatri-500 mb-4" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with intuitive user interfaces."
    },
    {
      icon: <Pencil className="h-12 w-12 text-sayapatri-500 mb-4" />,
      title: "Graphic Design",
      description: "Eye-catching visual content creation including logos, branding materials, and marketing collateral."
    },
    {
      icon: <Video className="h-12 w-12 text-sayapatri-500 mb-4" />,
      title: "Video Editing",
      description: "Professional video production and editing services for promotional content and social media."
    },
    {
      icon: <Palette className="h-12 w-12 text-sayapatri-500 mb-4" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive engagement."
    },
    {
      icon: <Book className="h-12 w-12 text-sayapatri-500 mb-4" />,
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
    <section id="services" className="section-padding bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
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
              className="service-card bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 shadow-sm"
              variants={itemVariants}
            >
              <div className="mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
