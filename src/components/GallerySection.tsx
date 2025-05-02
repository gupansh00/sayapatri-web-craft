import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = {
    events: [
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745944166/1745934693271_xanbhb.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745948475/1745944087498_qjkdau.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745948478/1745944087556_elhwaw.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745948484/1745944087570_ir4a2u.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745944165/1745934693218_aqymur.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745948476/1745944087585_iyoyqm.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745948477/1745944087522_m1oz98.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745949488/487098759_1151661726971406_5286530456418803876_n_jtbzya.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745949487/487442715_1151659400304972_2649421218059992094_n_vgta6k.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745949487/487312882_1151659356971643_8069178518043272483_n_ywgx8j.jpg",
      "https://res.cloudinary.com/dfgbiud18/image/upload/v1745949487/486961802_1151659396971639_6782054894004284888_n_mjilox.jpg",
    ],
  };

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            Our Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Take a visual journey through our events.
          </p>
        </div>

        <Tabs defaultValue="events" className="mx-auto max-w-4xl">
          {/* TabsList would go here if needed */}

          {Object.entries(images).map(([category, imgs]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imgs.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity dark:bg-gray-800"
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
