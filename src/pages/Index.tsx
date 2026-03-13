import HeroSlider from "@/components/HeroSlider";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import ActionButton from "@/components/ActionButton";
import AliadosCarousel from "@/components/AliadosCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import { assetPath } from "@/lib/assetPath";

const bannerImages = [
  assetPath("images/slide1.webp"),
  assetPath("images/slide2.webp"),
  assetPath("images/slide3.webp"),
];

const carouselImages = [
  assetPath("images/plato1.webp"),
  assetPath("images/plato2.webp"),
  assetPath("images/plato3.webp"),
  assetPath("images/plato4.webp"),
];

const aliadosLogos = [
  assetPath("images/aliados/cocacola.jpg"),
  assetPath("images/aliados/escorihuelagascon.png"),
  assetPath("images/aliados/heineken.png"),
  assetPath("images/aliados/losprados.jpg"),
  assetPath("images/aliados/segafredo.png"),
];

const Index = () => {
  return (
    <>
      {/* Hero Banner */}
      <HeroSlider images={bannerImages} />

      {/* Carousel de platos */}
      <AnimatedSection>
        <section className="w-full px-8 py-16 text-center">
          <h2 className="text-4xl font-display font-bold mb-8 text-foreground">
            Nuestros Platos
          </h2>
          <InfiniteCarousel images={carouselImages} />
        </section>
      </AnimatedSection>

      {/* Menu Cards */}
      <AnimatedSection>
        <section className="flex justify-center gap-8 flex-wrap px-8 pb-16">
          <div className="bg-muted rounded-xl p-8 max-w-[380px] flex-1 shadow-md flex flex-col items-center text-center">
            <h3 className="text-3xl font-display font-bold mb-4 text-foreground min-h-[4.5rem] flex items-center justify-center">
              Almuerzos<br />&amp; Cenas
            </h3>
            <p className="text-lg mb-6 text-muted-foreground flex-1">
              Platos caseros, abundantes y con sabor único para todos los días.
            </p>
            <ActionButton to="/menu">Ver Menú</ActionButton>
          </div>

          <div className="bg-muted rounded-xl p-8 max-w-[380px] flex-1 shadow-md flex flex-col items-center text-center">
            <h3 className="text-3xl font-display font-bold mb-4 text-foreground min-h-[4.5rem] flex items-center justify-center">
              Desayunos<br />&amp; Meriendas
            </h3>
            <p className="text-lg mb-6 text-muted-foreground flex-1">
              Café, dulces y opciones para compartir momentos especiales.
            </p>
            <ActionButton to="/menu#menumerienda">Ver Menú</ActionButton>
          </div>
        </section>
      </AnimatedSection>

      {/* Playroom Preview */}
      <AnimatedSection>
        <section className="w-full px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-stretch gap-6 bg-muted rounded-xl p-6 shadow-md">
            <div className="grid grid-cols-2 gap-6">
              <img
                src={assetPath("images/play1.webp")}
                alt="Playroom - Juegos"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
              <img
                src={assetPath("images/play2.webp")}
                alt="Playroom - Juguetes"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center text-center p-4">
              <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
                Playroom Infantil
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Un espacio seguro y divertido para los más chicos. Juegos, colores
                y actividades pensadas para que disfruten mientras vos te relajás.
              </p>
              <ActionButton to="/playroom">Consultar</ActionButton>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Aliados */}
      <AnimatedSection>
        <div id="aliados">
          <AliadosCarousel logos={aliadosLogos} />
        </div>
      </AnimatedSection>
    </>
  );
};

export default Index;
