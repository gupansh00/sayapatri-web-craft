
import { Code, Smartphone, Pencil, Video, Palette, Book } from "lucide-react";

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

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a comprehensive range of IT services designed to meet your business needs and help you stay ahead in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white text-center"
            >
              <div className="mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
