import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-sayapatri-600 mx-auto" />,
      title: "Phone",
      details: [
        <a
          href="tel:+9779816751098"
          className="text-sayapatri-600 hover:underline"
        >
          +977 9816751098
        </a>,
        <a
          href="tel:+9779840985166"
          className="text-sayapatri-600 hover:underline"
        >
          +977 9840985166
        </a>,
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-sayapatri-600 mx-auto" />,
      title: "Email",
      details: [
        <a
          href="mailto:sayapatri01@gmail.com"
          className="text-sayapatri-600 hover:underline"
        >
          sayapatri01@gmail.com
        </a>,
      ],
    },
    {
      icon: <MapPin className="h-6 w-6 text-sayapatri-600 mx-auto" />,
      title: "Address",
      details: [
        <span className="text-sayapatri-600 hover:underline">
          Tinpaini, Biratnagar
        </span>,
        <span className="text-sayapatri-600 hover:underline">Nepal</span>,
      ],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or want to discuss a project? Get in touch with our
            team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-sayapatri-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {/* <div className="pt-4">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  social => (
                    <a
                      key={social}
                      href="#"
                      // className="w-10 h-10 rounded-full bg-sayapatri-100 flex items-center justify-center hover:bg-sayapatri-200 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {/* This is a placeholder for social icons */}
            {/* <rect x="2" y="2" width="20" height="20" rx="5" />
                      </svg>
                    </a>
                  )
                )}
              </div> */}
            {/* </div> */}
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="bg-sayapatri-600 hover:bg-sayapatri-700 w-full md:w-auto px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
