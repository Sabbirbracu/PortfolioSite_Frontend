// src/components/ui/MobileMenu.jsx
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[var(--color-secondary)] px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-[var(--color-text-primary)] hover:text-[var(--color-blue)]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
