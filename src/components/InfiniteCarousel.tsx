interface InfiniteCarouselProps {
  images: string[];
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: "30s",
  normal: "20s",
  fast: "12s",
};

const InfiniteCarousel = ({ images, speed = "normal" }: InfiniteCarouselProps) => {
  // Duplicate for seamless loop
  const allImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        className="flex gap-6 animate-scroll-carousel"
        style={{ animationDuration: speedMap[speed] }}
      >
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Plato ${(i % images.length) + 1}`}
            className="w-[250px] h-[250px] max-md:w-[180px] max-md:h-[180px] rounded-lg object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
