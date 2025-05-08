
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Target,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Typewriter animation variants for titles
  const typewriterVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%", 
      transition: { 
        duration: 2, 
        ease: "easeInOut" 
      } 
    }
  };

  // Cursor blink variants
  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
      },
    },
  };

  const socialIcons = [
    {
      name: "Facebook",
      icon: <FacebookIcon size={20} />,
      href: "https://www.facebook.com/sayapatri01",
      target: "blank",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/107067819/admin/dashboard/",
      target: "blank",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-sayapatri-500 to-sayapatri-700 dark:bg-gray-900 dark:bg-none text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative font-bold text-xl mb-4 overflow-hidden">
              <motion.span
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block whitespace-nowrap overflow-hidden"
              >
                Sayapatri
              </motion.span>
              <motion.span
                variants={cursorVariants}
                animate="blinking"
                className="absolute right-[-8px] top-0 text-sayapatri-200"
              >
                |
              </motion.span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Nepal through innovative IT solutions and comprehensive
              training programs.
            </p>
            <div className="flex gap-4 mt-6">
              {socialIcons.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target={social.target}
                  className="text-white hover:text-blue-100 bg-blue-800 p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative font-bold text-xl mb-4 overflow-hidden">
              <motion.span
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block whitespace-nowrap overflow-hidden"
              >
                Quick Links
              </motion.span>
              <motion.span
                variants={cursorVariants}
                animate="blinking"
                className="absolute right-[-8px] top-0 text-sayapatri-200"
              >
                |
              </motion.span>
            </div>
            <ul className="space-y-2">
              {[
                "About",
                "Services",
                "Events",
                "Gallery",
                "Testimonials",
                "Contact",
              ].map(link => (
                <li
                  key={link}
                  className="transition-all duration-300 hover:translate-x-1"
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    <span className="mr-2 text-slate-600">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative font-bold text-xl mb-4 overflow-hidden">
              <motion.span
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block whitespace-nowrap overflow-hidden"
              >
                Services
              </motion.span>
              <motion.span
                variants={cursorVariants}
                animate="blinking"
                className="absolute right-[-8px] top-0 text-sayapatri-200"
              >
                |
              </motion.span>
            </div>
            <ul className="space-y-2">
              {[
                "Web Development",
                "App Development",
                "Graphic Design",
                "UI/UX Design",
                "Video Editing",
                "Workshops and Trainings",
              ].map(service => (
                <li
                  key={service}
                  className="transition-all duration-300 hover:translate-x-1"
                >
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    <span className="mr-2 text-slate-600">›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-sayapatri-700 pt-8 mt-8 text-center text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} Sayapatri. All rights reserved.
          </p>
          <p className="mt-2">
            <a
              // href="#"
              className="hover:text-white transition-colors hover:underline"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              // href="#"
              className="hover:text-white transition-colors hover:underline"
            >
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
