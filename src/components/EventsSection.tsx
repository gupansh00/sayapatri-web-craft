import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useTypewriterEffect from "@/hooks/useTypewriterEffect";

const EventsSection = () => {
  const titleRef = useTypewriterEffect();
  const handleRegisterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScuIVr7I0TcwjVqoPv2FU7WN-zE4wqwABIIEGm5sn1ruxGz9Q/viewform?usp=header",
      "_blank"
    );
  };

  const events = [
    {
      title: "Fundamentals of HTML and CSS",
      date: "10th Jesth, 2082",
      location: "Online (Google Meet)",
      description:
        "Learn the fundamentals of modern web development with HTML,and CSS and be capable of creating beautiful and responsive websites.",
      registration: "Open",
    },
    {
      title: "Cyber Security and Ethical Hacking Bootcamp",
      // date: "Coming Soon...",
      // location: "Online (Zoom)",
      description:
        "Boost your tech skills with cybersecurity training.Fast, expert-led, and student-focused.",
      registration: "Coming Soon",
    },
    // {
    //   title: "Mobile App Development Bootcamp",
    //   date: "July 20-25, 2025",
    //   location: "Pokhara Tech Center",
    //   description: "Intensive 6-day bootcamp covering mobile app development for Android and iOS platforms.",
    //   registration: "Coming Soon"
    // },
    // {
    //   title: "Digital Marketing Summit",
    //   date: "August 10, 2025",
    //   location: "Hotel Annapurna, Kathmandu",
    //   description: "Explore the latest trends and strategies in digital marketing with industry leaders.",
    //   registration: "Open"
    // }
  ];

  return (
    <section
      id="events"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="section-title before-typewriter mx-auto after:left-1/2 after:-translate-x-1/2"
          >
            Upcoming Events
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Join us for workshops, training sessions, and tech meetups to
            enhance your skills and connect with industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="border-0 shadow-lg dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-sayapatri-100 dark:bg-gray-700 text-sayapatri-600 dark:text-sayapatri-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-sayapatri-200 dark:hover:bg-gray-600">
                    <Calendar className="h-8 w-8 transition-transform duration-300 hover:scale-110" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold dark:text-white">
                        {event.title}
                      </h3>
                      <span
                        className={`text-sm px-2 py-1 rounded ${
                          event.registration === "Open"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {event.registration}
                      </span>
                    </div>
                    <div className="mb-2">
                      <p className="text-sayapatri-600 dark:text-sayapatri-400 font-medium">
                        {event.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.location}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>

                    <Button
                      onClick={handleRegisterClick}
                      className="bg-sayapatri-600 hover:bg-sayapatri-700 dark:bg-sayapatri-500 dark:hover:bg-sayapatri-600"
                      disabled={event.registration !== "Open"}
                    >
                      {event.registration === "Open"
                        ? "Register Now"
                        : "Coming Soon"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
