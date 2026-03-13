import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { assetPath } from "@/lib/assetPath";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Menú", path: "/menu" },
  { label: "Playroom", path: "/playroom" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Aliados", path: "/#aliados" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path === "/#aliados") {
      if (location.pathname === "/") {
        document.getElementById("aliados")?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById("aliados")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  const isActive = (path: string) => {
    if (path === "/#aliados") return false;
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex items-center px-6 py-3 h-[12vh] bg-card/25 backdrop-blur-md">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/">
            <img
              src={assetPath("images/logo.png")}
              alt="Green Garden"
              className="h-[70px] md:h-[90px] max-h-[100px]"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-2 list-none gap-8 justify-center">
          {navItems.map((item) => (
            <li key={item.path}>
              {item.path === "/#aliados" ? (
                <button
                  onClick={() => handleNavClick(item.path)}
                  className="font-medium transition-all duration-200 hover:text-primary hover:scale-110 inline-block text-foreground bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`font-medium transition-all duration-200 hover:text-primary hover:scale-110 inline-block ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex flex-1 justify-end gap-4">
          <a
            href="https://wa.me/542214895239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Phone size={22} />
          </a>
          <a
            href="https://instagram.com/greengardenlaplata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[2000] bg-card flex flex-col items-center pt-8 transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="text-3xl font-bold mb-4 bg-transparent border-none cursor-pointer hover:scale-110 transition-transform"
          aria-label="Cerrar menú"
        >
          <X size={32} />
        </button>

        <ul className="list-none text-center mt-8 space-y-6">
          {navItems.map((item) => (
            <li key={item.path}>
              {item.path === "/#aliados" ? (
                <button
                  onClick={() => handleNavClick(item.path)}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-6 mt-8">
          <a
            href="https://wa.me/542214895239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Phone size={26} />
          </a>
          <a
            href="https://instagram.com/greengardenlaplata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Instagram size={26} />
          </a>
        </div>

        <div className="mt-auto pb-8">
          <img src="/images/logo.png" alt="Green Garden" className="h-[70px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
