import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shiva Adhikari",
      position: "Principal, Namuna Vidya Mandir",
      location: "Biratnagar, Nepal",
      content:
        "Sayapatri excels in training for Cyber Security, Ethical Hacking, Web Development, and Graphics Designing, while also crafting stunning websites and graphics for us. Their hands-on, expert-led approach ensures students master complex skills for real-world success. With customized courses, dedicated trainers, and exceptional design services, Sayapatri delivers the best experience, driving innovation in tech and design. Trust Sayapatri for comprehensive, future-ready solutions.",
      // rating: 5,
      image:
        "https://res.cloudinary.com/dkr7x5034/image/upload/v1746016760/WhatsApp_Image_2025-04-30_at_6.17.49_PM_jug5bh.jpg",
      link: "https://www.facebook.com/hamroschoolnvm",
    },
    {
      name: "Arjun Srestha",
      position: "Principal, Purbanchal Vidhya Sadan B. School",
      location: "Biratnagar, Nepal",
      content:
        "I am truly impressed by the quality of training offered by Sayapatri in the field of Cyber Security and Ethical Hacking. Their approach is both practical and forward-thinking, perfectly aligning with the demands of today’s digital world. Our students have greatly benefited from their engaging sessions, acquiring valuable skills that will support their academic and professional growth. I highly recommend Sayapatri to any institution looking to empower their learners with future-ready tech education.",
      // rating: 5,
      image:
        "https://res.cloudinary.com/dfgbiud18/image/upload/v1746192842/WhatsApp_Image_2025-05-01_at_12.24.45_b3f7326c_vlev9z.jpg",
      link: "https://www.facebook.com/purwanchalvidya.sadan",
    },
    {
      name: "Prem Suwal",
      position: "Principal, Graded English Medium Secondary School.",
      location: "Biratnagar, Nepal",
      content:
        "Sayapatri offers exceptional Cyber Security and Ethical Hacking training, empowering our students with practical skills and expert knowledge. Their innovative, hands-on approach ensures a deep understanding of complex concepts, preparing learners for real-world challenges. With tailored courses and passionate instructors, Sayapatri delivers the best learning experience, fostering growth and excellence in the tech field. Trust Sayapatri to shape the future of tech education.",
      // rating: 4,
      image: "/placeholder.svg",
      // link: "https://www.facebook.com/hamroschoolnvm",
    },
    {
      name: "Sunil Poudel",
      position: "Principal, Bhanu Memorial Academy Rangeli",
      location: "Rangeli, Nepal",
      content:
        "Sayapatri provided outstanding Cyber Security and Ethical Hacking training, equipping our students with essential skills and expert insights. Their practical, engaging methods make complex topics accessible, ensuring readiness for real-world scenarios. Through customized courses and dedicated trainers, Sayapatri offers the best learning journey, driving success and innovation in tech education. Choose Sayapatri to lead the way in future-ready tech training.",
      // rating: 5,
      image: "/placeholder.svg",
      // link: "https://www.facebook.com/hamroschoolnvm",
    },
    {
      name: "Pradip Baral",
      position: "Vice-Principal, Bhanu Memorial Academy Rangeli",
      location: "Budhiganga Gaupalika, Nepal",
      content:
        "Sayapatri delivered exceptional Cyber Security and Ethical Hacking training that empowered our students with critical skills and professional knowledge. Their hands-on, interactive approach simplifies complex concepts and prepares learners for real-world challenges. With tailored courses and committed instructors, Sayapatri ensures a top-tier educational experience that fosters innovation and success in the tech field. Choose Sayapatri for cutting-edge, future-focused tech training.",
      // rating: 5,
      image: "/placeholder.svg",
      // link: "https://www.facebook.com/hamroschoolnvm",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            Client Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Don't just take our word for it - see what our clients have to say
            about working with Sayapatri.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 p-4">
                  <Card className="h-full border-0 shadow-lg dark:bg-gray-700">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <a href={testimonial.link} target="_blank">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </a>
                        </div>
                        <div>
                          <a
                            href={testimonial.link}
                            target="_blank"
                            className="font-bold dark:text-white"
                          >
                            {testimonial.name}
                          </a>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {testimonial.position}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {testimonial.content}
                      </p>

                      {/* <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300 dark:text-gray-500"
                            }`}
                          />
                        ))}
                      </div> */}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static translate-y-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" />
              <CarouselNext className="relative static translate-y-0 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
