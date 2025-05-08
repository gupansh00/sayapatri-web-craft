
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import useTypewriterEffect from "@/hooks/useTypewriterEffect";

const ProjectsSection = () => {
  const titleRef = useTypewriterEffect();
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully featured online marketplace for local artisans to sell their products nationwide.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      link: "#"
    },
    {
      title: "School Management System",
      description: "Comprehensive system for managing student records, attendance, and academic performance.",
      image: "/placeholder.svg",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      link: "#"
    },
    {
      title: "Tourism Mobile App",
      description: "Interactive app showcasing Nepal's tourist destinations with booking functionality.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Google Maps API"],
      link: "#"
    },
    {
      title: "Banking Portal",
      description: "Secure online banking platform with transaction management and reporting features.",
      image: "/placeholder.svg",
      tags: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="section-title before-typewriter mx-auto after:left-1/2 after:-translate-x-1/2">Our Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore our portfolio of successful projects that demonstrate our technical expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg dark:bg-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="dark:bg-gray-700 dark:text-white">{tag}</Badge>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-sayapatri-600 dark:text-sayapatri-400 hover:text-sayapatri-700 dark:hover:text-sayapatri-300">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="btn-primary inline-block">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
