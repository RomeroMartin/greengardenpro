import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSliderProps {
  images: string[];
  interval?: number;
}

const HeroSlider = ({ images, interval = 5000 }: HeroSliderProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <section className="relative w-full h-[97vh] overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        >
          <img
            src={src}
            alt={`Banner ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-[3] text-card text-3xl cursor-pointer hover:text-primary hover:scale-110 transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-[3] text-card text-3xl cursor-pointer hover:text-primary hover:scale-110 transition-all"
        aria-label="Siguiente"
      >
        <ChevronRight size={40} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-[2]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${
              i === current ? "bg-card" : "bg-card/60"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
