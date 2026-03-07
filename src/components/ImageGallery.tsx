import { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageGallery = ({ images, initialIndex = 0, open, onOpenChange }: ImageGalleryProps) => {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    if (open) setCurrent(initialIndex);
  }, [open, initialIndex]);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next, onOpenChange]);

  if (!images.length) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 bg-black/95 border-none flex items-center justify-center gap-0 [&>button]:hidden">
        {/* Close */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 z-10 text-white/70 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X size={28} />
        </button>

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 z-10 text-white/70 hover:text-white transition-colors p-2"
          aria-label="Anterior"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Image */}
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-[90vw] max-h-[85vh] object-contain select-none"
          draggable={false}
        />

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-2 md:right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
          aria-label="Siguiente"
        >
          <ChevronRight size={36} />
        </button>

        {/* Counter */}
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          {current + 1} / {images.length}
        </span>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
