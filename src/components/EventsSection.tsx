
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const events = [
    {
      title: "Web Development Workshop",
      date: "June 15, 2025",
      location: "Kathmandu Innovation Hub",
      description: "Learn the fundamentals of modern web development with HTML, CSS, and JavaScript.",
      registration: "Open"
    },
    {
      title: "UI/UX Design Masterclass",
      date: "July 2, 2025",
      location: "Online (Zoom)",
      description: "Master the principles of user interface and experience design with industry experts.",
      registration: "Open"
    },
    {
      title: "Mobile App Development Bootcamp",
      date: "July 20-25, 2025",
      location: "Pokhara Tech Center",
      description: "Intensive 6-day bootcamp covering mobile app development for Android and iOS platforms.",
      registration: "Coming Soon"
    },
    {
      title: "Digital Marketing Summit",
      date: "August 10, 2025",
      location: "Hotel Annapurna, Kathmandu",
      description: "Explore the latest trends and strategies in digital marketing with industry leaders.",
      registration: "Open"
    }
  ];

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Upcoming Events</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Join us for workshops, training sessions, and tech meetups to enhance your skills and connect with industry professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-sayapatri-100 text-sayapatri-600">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <span className={`text-sm px-2 py-1 rounded ${event.registration === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {event.registration}
                      </span>
                    </div>
                    <div className="mb-2">
                      <p className="text-sayapatri-600 font-medium">{event.date}</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Button 
                      className="bg-sayapatri-600 hover:bg-sayapatri-700"
                      disabled={event.registration !== 'Open'}
                    >
                      {event.registration === 'Open' ? 'Register Now' : 'Coming Soon'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="btn-primary inline-block">View All Events</a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
