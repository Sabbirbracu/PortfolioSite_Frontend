// src/components/ui/GradientButton.jsx
import { Link } from "react-router-dom";

const GradientButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-5 py-2 rounded-lg text-white font-semibold transition shadow-md bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#10B981]"
    >
      {children}
    </Link>
  );
};

export default GradientButton;
