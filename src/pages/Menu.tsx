import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Placeholder menu images — reemplazar con las reales
const menuAlmuerzos = [
  { src: "/images/menu01.webp", alt: "Menú almuerzo 1" },
  ...Array.from({ length: 18 }, (_, i) => ({
    src: "/placeholder.svg",
    alt: `Menú almuerzo ${i + 2}`,
  })),
];

const menuMeriendas = Array.from({ length: 4 }, (_, i) => ({
  src: "/placeholder.svg",
  alt: `Menú merienda ${i + 1}`,
}));

const MenuPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="max-w-[1200px] mx-auto px-8 max-md:px-4 pt-[calc(12vh+1rem)] pb-16">
      {/* Almuerzos & Cenas */}
      <h1 className="text-center mb-5 text-3xl font-display font-bold text-foreground">
        Menú Almuerzos & Cenas
      </h1>
      <div className="flex flex-col gap-10 items-center mb-24">
        {menuAlmuerzos.map((img, i) => (
          <div key={i} className="w-full max-w-[1000px] text-center">
            <img
              src={img.src}
              alt={img.alt}
              className="block mx-auto w-auto max-w-full max-h-[calc(100vh-12vh-4rem)] h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Desayunos & Meriendas */}
      <div id="menumerienda" className="scroll-mt-[13vh]">
        <h1 className="text-center mb-5 text-3xl font-display font-bold text-foreground">
          Menú Desayunos & Meriendas
        </h1>
        <div className="flex flex-col gap-10 items-center">
          {menuMeriendas.map((img, i) => (
            <div key={i} className="w-full max-w-[1000px] text-center">
              <img
                src={img.src}
                alt={img.alt}
                className="block mx-auto w-auto max-w-full max-h-[calc(100vh-12vh-4rem)] h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
