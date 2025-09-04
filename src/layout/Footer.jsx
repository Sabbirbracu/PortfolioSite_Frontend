// src/layout/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary)] text-center py-6 mt-12">
      <p className="text-[var(--color-text-secondary)] text-sm">
        © {new Date().getFullYear()} Sabbir Ahmad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
