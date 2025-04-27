
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  
  const images = {
    office: [
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    events: [
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg"
    ],
    team: [
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg", 
      "/placeholder.svg"
    ]
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Gallery</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Take a visual journey through our office, events, and team activities.
          </p>
        </div>
        
        <Tabs defaultValue="office" className="mx-auto max-w-4xl">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="office">Our Office</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
          </TabsList>
          
          {Object.entries(images).map(([category, imgs]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imgs.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery image ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-0">
          <img 
            src={selectedImage} 
            alt="Gallery preview" 
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
