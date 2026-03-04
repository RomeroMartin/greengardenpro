import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground py-5 mt-auto shadow-[0_-2px_6px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1100px] mx-auto px-5 flex justify-between items-center flex-wrap gap-5 max-md:flex-col max-md:text-center">
        {/* Left */}
        <div className="flex flex-col items-start gap-2.5 max-md:items-center max-md:w-full">
          <a
            href="tel:02214895239"
            className="flex items-center gap-2 text-primary-foreground no-underline text-sm hover:opacity-80 transition-opacity"
          >
            <Phone size={18} />
            Reservas al: 0221-4895239
          </a>
          <a
            href="mailto:greengardenlaplata@gmail.com"
            className="flex items-center gap-2 text-primary-foreground no-underline text-sm hover:opacity-80 transition-opacity"
          >
            <Mail size={18} />
            greengardenlaplata@gmail.com
          </a>
          <a
            href="https://instagram.com/greengardenlaplata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground no-underline text-sm hover:opacity-80 transition-opacity"
          >
            <Instagram size={18} />
            @greengardenlaplata
          </a>
        </div>

        {/* Right */}
        <div className="text-right text-sm max-md:text-center max-md:mt-4 max-md:w-full">
          <p>© 2026 Green Garden.</p>
          <p className="mt-1">Desarrollado por Romero Martin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
