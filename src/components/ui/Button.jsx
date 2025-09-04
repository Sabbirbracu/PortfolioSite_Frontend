import { Link } from "react-router-dom";

const Button = ({ label, link = "#", ctaType = "primary" }) => {
  const baseClasses =
    "px-6 py-3 font-medium rounded-lg transition inline-block text-center";

  const styleClasses =
    ctaType === "primary"
      ? "shadow-lg text-white bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#10B981] hover:opacity-90"
      : "border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white";

  return (
    <Link to={link} className={`${baseClasses} ${styleClasses}`}>
      {label}
    </Link>
  );
};

export default Button;
