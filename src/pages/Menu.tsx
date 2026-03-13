import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageGallery from "@/components/ImageGallery";
import { assetPath } from "@/lib/assetPath";

const menuAlmuerzos = Array.from({ length: 19 }, (_, i) => ({
  src: assetPath(`images/menu${String(i + 1).padStart(2, "0")}.webp`),
  alt: `Menú almuerzo ${i + 1}`,
}));

const menuTacc = { src: assetPath("images/menu-tacc.webp"), alt: "Menú Sin TACC" };

const menuMeriendas = Array.from({ length: 4 }, (_, i) => ({
  src: assetPath(`images/merienda${String(i + 1).padStart(2, "0")}.webp`),
  alt: `Menú merienda ${i + 1}`,
}));

const allAlmuerzos = [...menuAlmuerzos, menuTacc];

const MenuPage = () => {
  const { hash } = useLocation();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<{ src: string; alt: string }[]>([]);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  const openGallery = (images: { src: string; alt: string }[], index: number) => {
    setGalleryImages(images);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-[calc(12vh+1rem)] pb-16">
      {/* Almuerzos & Cenas */}
      <h1 className="text-center mb-5 text-2xl md:text-3xl font-display font-bold text-foreground">
        Menú Almuerzos &amp; Cenas
      </h1>
      <div className="flex flex-col gap-6 md:gap-10 items-center mb-16 md:mb-24">
        {allAlmuerzos.map((img, i) => (
          <div key={i} className="w-full max-w-[1000px] text-center">
            <img
              src={img.src}
              alt={img.alt}
              onClick={() => openGallery(allAlmuerzos, i)}
              className="block mx-auto w-auto max-w-full max-h-[calc(100vh-12vh-4rem)] h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {/* Desayunos & Meriendas */}
      <div id="menumerienda" className="scroll-mt-[13vh]">
        <h1 className="text-center mb-5 text-2xl md:text-3xl font-display font-bold text-foreground">
          Menú Desayunos &amp; Meriendas
        </h1>
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          {menuMeriendas.map((img, i) => (
            <div key={i} className="w-full max-w-[1000px] text-center">
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => openGallery(menuMeriendas, i)}
                className="block mx-auto w-auto max-w-full max-h-[calc(100vh-12vh-4rem)] h-auto object-contain rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <ImageGallery
        images={galleryImages}
        initialIndex={galleryIndex}
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
      />
    </div>
  );
};

export default MenuPage;
