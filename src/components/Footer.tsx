
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    
    // Simulating subscription
    toast({
      title: "Subscribed!",
      description: `${email} has been added to our newsletter.`,
    });
    
    form.reset();
  };
  
  return (
    <footer className="bg-sayapatri-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4">Sayapatri</h3>
            <p className="text-gray-300 mb-4">
              Empowering Nepal through innovative IT solutions and comprehensive training programs.
            </p>
            <div className="flex gap-4 mt-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="text-white hover:text-sayapatri-300 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {/* This is a placeholder for social icons */}
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Projects', 'Events', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'App Development', 'Graphic Design', 'UI/UX Design', 'Video Editing', 'Training Programs'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-sayapatri-700 border-sayapatri-600 text-white placeholder:text-gray-400"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-sayapatri-700 pt-8 mt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Sayapatri. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
