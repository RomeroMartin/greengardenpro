import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const paragraphs = [
  "Bienvenidos a Green Garden desde nuestra apertura en el año 2016 nos dedicamos a brindar una experiencia gastronómica única en nuestra ciudad. Pensamos en cada detalle, en cada receta y en cada sistema de cocción. Para ello, en nuestras instalaciones de Diag 74 y 49 y 50, contamos con un primer piso de producción equipado con cámaras de frío positivo y negativo, un sector de envasado al vacío, sectores de guardado, sectores de producción específica y próximamente panadería artesanal.",
  "Diseñamos una experiencia gastronómica basada en brindar lo mejor y atender cada necesidad de nuestros comensales.",
  "En nuestro amplio menú, que abarca todos los horarios del día, podrás desayunar, almorzar, merendar y cenar, siempre con la mejor materia prima del mercado. Trabajamos con primeras marcas y proveedores de excelencia, que ayudan a nuestro equipo de profesionales gastronómicos a crear y mantener vivas las recetas de nuestra casa, llevándolas a un nivel de excelencia total.",
  "Para ello también contamos con maquinaria gastronómica de vanguardia industrial: hornos, parrillas y sistemas de cocción de primer nivel nos garantizan estándares de seguridad y eficacia, que buscamos a la hora de llevar un plato a la mesa.",
  "En Green Garden nuestros clientes son familia y el más familiar hacemos mucho hincapié. Por eso diseñamos un espacio completamente para niños, que cuenta con una amplia variedad de juegos, para todas las edades al cuidado de nuestras profes y vigilado por cámaras de seguridad, que los adultos puedan verlo desde la comodidad de la mesa o a través de nuestro teléfono o desde sus celulares.",
  "Este sistema garantiza una experiencia culinaria inolvidable.",
];

const infoItems = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Diag. 74 1618, B1900BZV La Plata, Provincia de Buenos Aires",
    action: "scroll-map",
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Lunes a Domingo: 08:00 - 00:00",
  },
  {
    icon: Phone,
    title: "Reservas",
    content: "0221-489-5239",
    href: "tel:02214895239",
  },
  {
    icon: Mail,
    title: "Email",
    content: "greengardenlaplata@gmail.com",
    href: "mailto:greengardenlaplata@gmail.com",
  },
];

const NosotrosPage = () => {
  return (
    <div className="pt-[120px] pb-20 px-4 md:px-5 max-w-[1100px] mx-auto">
      {/* Historia */}
      <AnimatedSection>
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg mb-10">
          <h1 className="font-display text-[26px] md:text-[32px] text-center mb-9 text-foreground tracking-wider">
            Un poco de nosotros
          </h1>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="font-display text-base max-md:text-[15px] leading-relaxed text-muted-foreground mb-6 text-justify"
            >
              {text}
            </p>
          ))}
        </div>
      </AnimatedSection>

      {/* Info cards */}
      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {infoItems.map((item, i) => {
            const Icon = item.icon;
            const Inner = (
              <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.content}</p>
              </div>
            );
            return item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="no-underline">
                {Inner}
              </a>
            ) : (
              <div key={i}>{Inner}</div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Mapa interactivo */}
      <AnimatedSection delay={0.2}>
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <h2 className="font-display text-2xl text-center py-6 text-foreground">
            ¿Cómo llegar?
          </h2>
          <iframe
            title="Ubicación de Green Garden La Plata"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8!2d-57.955!3d-34.921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62f6b7c3d0d%3A0x0!2sDiagonal+74+%26+49%2C+La+Plata!5e0!3m2!1ses!2sar!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default NosotrosPage;
