
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-sayapatri-500" />,
      title: "Customer-Centric",
      description: "We prioritize our clients' needs and goals above all else, ensuring personalized solutions and support."
    },
    {
      icon: <Award className="h-8 w-8 text-sayapatri-500" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, continuously improving our skills and services."
    },
    {
      icon: <Target className="h-8 w-8 text-sayapatri-500" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex problems."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About Sayapatri</h2>
            <p className="mb-4 text-gray-600">
              Founded in 2018, Sayapatri is a premier IT company based in Nepal, dedicated to delivering exceptional technology solutions and education. With a team of skilled professionals, we combine technical expertise with creative thinking to help businesses grow in the digital landscape.
            </p>
            <p className="mb-6 text-gray-600">
              Our mission is to empower Nepalese businesses and individuals with the knowledge and tools they need to thrive in a globally competitive market. We are committed to contributing to Nepal's technological advancement through innovative solutions and comprehensive training programs.
            </p>
            
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-4xl font-bold text-sayapatri-600">100+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-sayapatri-600">50+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-sayapatri-600">500+</p>
                <p className="text-sm text-gray-500">Students Trained</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-sayapatri-700 mb-4">Our Core Values</h3>
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-sayapatri-500">
                <CardContent className="p-6 flex gap-4">
                  {value.icon}
                  <div>
                    <h4 className="font-bold text-lg">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
