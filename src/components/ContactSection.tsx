
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import useTypewriterEffect from "@/hooks/useTypewriterEffect";

const ContactSection = () => {
  const titleRef = useTypewriterEffect();

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-[rgb(23,30,47)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="section-title before-typewriter mx-auto after:left-1/2 after:-translate-x-1/2">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-white">
            Have questions or want to discuss a project? Get in touch with our
            team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
