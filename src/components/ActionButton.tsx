import { Link } from "react-router-dom";

interface ActionButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const ActionButton = ({ to, href, children, className = "", target }: ActionButtonProps) => {
  const baseClasses =
    "inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-dark hover:scale-105 text-center";

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
