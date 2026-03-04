const paragraphs = [
  "Bienvenidos a Green Garden desde nuestra apertura en el año 2016 nos dedicamos a brindar una experiencia gastronómica única en nuestra ciudad. Pensamos en cada detalle, en cada receta y en cada sistema de cocción. Para ello, en nuestras instalaciones de Diag 74 y 49 y 50, contamos con un primer piso de producción equipado con cámaras de frío positivo y negativo, un sector de envasado al vacío, sectores de guardado, sectores de producción específica y próximamente panadería artesanal.",
  "Diseñamos una experiencia gastronómica basada en brindar lo mejor y atender cada necesidad de nuestros comensales.",
  "En nuestro amplio menú, que abarca todos los horarios del día, podrás desayunar, almorzar, merendar y cenar, siempre con la mejor materia prima del mercado. Trabajamos con primeras marcas y proveedores de excelencia, que ayudan a nuestro equipo de profesionales gastronómicos a crear y mantener vivas las recetas de nuestra casa, llevándolas a un nivel de excelencia total.",
  "Para ello también contamos con maquinaria gastronómica de vanguardia industrial: hornos, parrillas y sistemas de cocción de primer nivel nos garantizan estándares de seguridad y eficacia, que buscamos a la hora de llevar un plato a la mesa.",
  "En Green Garden nuestros clientes son familia y el más familiar hacemos mucho hincapié. Por eso diseñamos un espacio completamente para niños, que cuenta con una amplia variedad de juegos, para todas las edades al cuidado de nuestras profes y vigilado por cámaras de seguridad, que los adultos puedan verlo desde la comodidad de la mesa o a través de nuestro teléfono o desde sus celulares.",
  "Este sistema garantiza una experiencia culinaria inolvidable.",
];

const NosotrosPage = () => {
  return (
    <div className="pt-[120px] pb-20 px-5 max-w-[1000px] mx-auto max-md:px-4 max-md:pt-[120px]">
      <div className="bg-card p-12 max-md:p-8 rounded-2xl shadow-lg">
        <h1 className="font-display text-[32px] max-md:text-[26px] text-center mb-9 text-foreground tracking-wider">
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
    </div>
  );
};

export default NosotrosPage;
