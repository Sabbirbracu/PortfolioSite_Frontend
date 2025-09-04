// src/layout/Layout.jsx
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
