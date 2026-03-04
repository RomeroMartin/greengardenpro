interface AliadosCarouselProps {
  logos: string[];
}

const AliadosCarousel = ({ logos }: AliadosCarouselProps) => {
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-card overflow-hidden">
      <div className="w-full overflow-hidden relative">
        <div className="flex items-center gap-16 max-md:gap-8 animate-scroll-aliados">
          {allLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Aliado ${(i % logos.length) + 1}`}
              className="h-[100px] max-md:h-[50px] w-auto grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AliadosCarousel;
