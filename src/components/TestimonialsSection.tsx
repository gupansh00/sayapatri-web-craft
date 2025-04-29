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
      name: "Aarav Sharma",
      position: "CEO, TechNep",
      content:
        "Sayapatri delivered an outstanding e-commerce platform for our business. Their team was professional, responsive, and delivered the project on time and within budget. We've seen a significant increase in our online sales since launching the website.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Priya Thapa",
      position: "Principal, Everest Academy",
      content:
        "The school management system developed by Sayapatri has completely transformed how we handle student records and communicate with parents. The training provided to our staff was thorough and ensured a smooth transition to the new system.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Rajesh Magar",
      position: "Director, Nepal Tourism Board",
      content:
        "Working with Sayapatri on our tourism mobile app was a pleasure. Their team took the time to understand our unique requirements and delivered a user-friendly application that showcases Nepal's beauty to travelers worldwide.",
      rating: 4,
      image: "/placeholder.svg",
    },
    {
      name: "Sita Gurung",
      position: "Marketing Manager, Himalayan Bank",
      content:
        "Sayapatri's training program for our staff was comprehensive and practical. The instructors were knowledgeable and provided real-world examples that helped our team understand complex concepts. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            Client Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
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
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 flex-grow">
                        {testimonial.content}
                      </p>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
