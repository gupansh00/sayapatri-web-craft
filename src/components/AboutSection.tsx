
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";
import useTypewriterEffect from "@/hooks/useTypewriterEffect";

const AboutSection = () => {
  const titleRef = useTypewriterEffect();
  
  const values = [
    {
      icon: <Users className="h-8 w-8 text-sayapatri-500" />,
      title: "Customer-Centric",
      description:
        "We prioritize our clients' needs and goals above all else, ensuring personalized solutions and support.",
    },
    {
      icon: <Award className="h-8 w-8 text-sayapatri-500" />,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, continuously improving our skills and services.",
    },
    {
      icon: <Target className="h-8 w-8 text-sayapatri-500" />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative approaches to solve complex problems.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={titleRef} className="section-title before-typewriter">About Sayapatri</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Founded in 2024, Sayapatri is a premier IT company based in Nepal,
              dedicated to delivering exceptional technology solutions and
              education. With a team of skilled professionals, we combine
              technical expertise with creative thinking to help businesses grow
              in the digital landscape.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Our mission is to empower Nepalese businesses and individuals with
              the knowledge and tools they need to thrive in a globally
              competitive market. We are committed to contributing to Nepal's
              technological advancement through innovative solutions and
              comprehensive training programs.
            </p>

            <div className="flex items-center space-x-6">
              <div>
                <p className="text-4xl font-bold text-sayapatri-600 dark:text-sayapatri-400">10+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-sayapatri-600 dark:text-sayapatri-400">500+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Students Trained</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-sayapatri-700 dark:text-sayapatri-400 mb-4">
              Our Core Values
            </h3>
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-sayapatri-500 dark:bg-gray-800 dark:border-sayapatri-400">
                <CardContent className="p-6 flex gap-4">
                  {value.icon}
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
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
