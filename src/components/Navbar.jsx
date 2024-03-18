import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locations = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`rounded-md z-10 w-full${
        isScrolled
          ? "scrolled fixed top-0 w-[98%] right-3 left-3 sm:top-0 sm:w-[98%] sm:right-3 sm:left-3 backdrop-filter backdrop-blur-lg bg-black text-white bg-opacity-70 mt-3"
          : "text-white bg-white bg-opacity-20 "
      }`}
    >
      <div className="max-w-full mx-auto px-8 sm:px-5 lg:px-7 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12" src="/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link
                to="/product"
                className={`p-2 hover:text-yellow-400 ${
                  locations.pathname === "/product"
                    ? "text-yellow-400 border-yellow-400 border-b"
                    : ""
                }`}
              >
                Produk
              </Link>

              <Link
                to="/about"
                className={`p-2 hover:text-yellow-400 ${
                  locations.pathname === "/about"
                    ? "text-yellow-400 border-yellow-400 border-b"
                    : ""
                }`}
              >
                Tentang kami
              </Link>
            </div>
          </div>
          <div className="flex sm:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <RiMenu3Line size={30} color="white" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 top-0 right-3 left-3 bg-black text-white w-full rounded-b-md">
            <Link
              to="/product"
              className="block hover:bg-gray-700 hover:text-yellow-400"
            >
              Produk
            </Link>

            <Link
              to="/about"
              className="block hover:bg-gray-700 hover:text-yellow-400"
            >
              Tentang kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
