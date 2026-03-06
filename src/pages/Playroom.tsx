import ActionButton from "@/components/ActionButton";

const playroomRules = [
  "Los niños ingresan solo acompañados por un adulto responsable que debe estar ocupando una mesa del restaurante.",
  "Pueden ingresar chicos desde los 3 años de edad hasta los 10 años.",
  "Los niños serán ingresados y retirados por el adulto con identificación (pulsera), sin excepción.",
  "No se permite ingresar juguetes, comida, bebida o cualquier otro elemento ajeno a la sala.",
  "No podrán retirar a un niño sin su pulsera ni elementos de la mesa.",
  "Los niños que deseen ir al baño deben estar acompañados por sus padres.",
  "Dentro de la sala las actividades son reguladas para garantizar la seguridad de todos.",
  "Los responsables serán llamados a retirar a los niños si estos no respetan las normas o comportamientos adecuados.",
  "La capacidad máxima es de 30 niños. Si se supera, deberán esperar su turno.",
  "El costo por hora es de $2500 e incluye el servicio de playroom.",
];

const cameraSteps = [
  'Conectate al wifi "Green garden".',
  "Presioná el botón que se encuentra más abajo.",
  <>
    Ingresá los siguientes datos:
    <br />
    <strong>Usuario:</strong> camaras
    <br />
    <strong>Contraseña:</strong> green
  </>,
  "Una vez dentro, tocá el ícono cuadrado arriba a la izquierda para comenzar a ver las cámaras.",
];

const PlayroomPage = () => {
  return (
    <div className="pt-[120px] pb-20 px-5 max-w-[1100px] mx-auto text-center max-md:px-4 max-md:pt-[120px]">
      <h1 className="font-display text-[32px] max-md:text-[26px] mb-8 text-foreground">
        Bienvenidos a nuestro Playroom
      </h1>

      {/* Gallery button */}
      <div className="flex justify-center mb-10">
        <ActionButton to="#" className="min-w-[220px]">
          Ver galería
        </ActionButton>
      </div>

      {/* Gallery placeholder */}
      <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4 mb-12">
        {[
          { src: "/images/play1.webp", alt: "Playroom - Juegos" },
          { src: "/images/play2.webp", alt: "Playroom - Juguetes" },
          { src: "/images/play3.webp", alt: "Playroom - Casita" },
        ].map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full h-auto rounded-xl object-cover"
          />
        ))}
      </div>

      {/* Reglamento */}
      <div className="bg-card p-9 max-md:p-6 rounded-2xl shadow-lg mb-12 text-center">
        <h2 className="font-display text-2xl mb-5 text-foreground">
          Reglamento
        </h2>
        <p className="font-display text-base leading-relaxed text-muted-foreground mb-5">
          Nuestro espacio de juegos dedicado exclusivamente a nuestros
          comensales más chicos. Para garantizar su felicidad, la seguridad es
          muy importante, por ello les pedimos que conozcan nuestras normativas
          antes de entrar:
        </p>
        <ol className="list-decimal pl-5 mb-5 text-left max-w-2xl mx-auto">
          {playroomRules.map((rule, i) => (
            <li
              key={i}
              className="font-display text-base leading-relaxed text-muted-foreground mb-3"
            >
              {rule}
            </li>
          ))}
        </ol>
        <p className="font-display text-base text-muted-foreground italic">
          Este espacio fue creado exclusivamente para el entretenimiento de los
          niños mientras disfrutan de una salida en familia. Agradecemos su
          comprensión y colaboración.
        </p>
      </div>

      {/* Instructivo cámaras */}
      <div className="bg-card p-9 max-md:p-6 rounded-2xl shadow-lg text-center">
        <h2 className="font-display text-2xl mb-5 text-foreground">
          Instructivo para conectarse a las cámaras
        </h2>
        <ol className="list-decimal pl-5 mb-6 text-left max-w-2xl mx-auto">
          {cameraSteps.map((step, i) => (
            <li
              key={i}
              className="font-display text-base leading-relaxed text-muted-foreground mb-3"
            >
              {step}
            </li>
          ))}
        </ol>
        <div className="flex justify-center">
          <ActionButton
            href="http://192.168.1.108"
            target="_blank"
            className="min-w-[240px]"
          >
            Conectarse a Cámaras
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default PlayroomPage;
