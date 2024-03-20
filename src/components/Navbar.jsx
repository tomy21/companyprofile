import AOS from "aos";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("id");
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  };
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

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.offsetTop > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [locations.pathname]);

  return (
    <nav
      ref={scrollRef}
      className={`rounded-md z-10 w-full${
        isScrolled
          ? "scrolled fixed top-0 w-[93%] right-3 left-3 sm:top-0 sm:w-[98%] sm:right-3 sm:left-3 backdrop-filter backdrop-blur-lg bg-black text-white bg-opacity-70 mt-3"
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
            <div className="flex space-x-10">
              <div className="flex flex-row space-x-4">
                <Link
                  to="/product"
                  className={`p-2 hover:text-yellow-400 ${
                    locations.pathname === "/product"
                      ? "text-yellow-400 border-yellow-400 border-b"
                      : ""
                  }`}
                >
                  {t("navbar.1")}
                </Link>

                <Link
                  to="/about"
                  className={`p-2 hover:text-yellow-400 ${
                    locations.pathname === "/about"
                      ? "text-yellow-400 border-yellow-400 border-b"
                      : ""
                  }`}
                >
                  {t("navbar.2")}
                </Link>
              </div>

              <div className="flex items-center rounded-md bg-yellow-400 text-black">
                <button
                  className={`p-2 hover:bg-gray-300 hover:rounded-s-md hover:h-full ${
                    currentLanguage === "en"
                      ? "text-black rounded-s-md bg-stone-400 h-full"
                      : ""
                  }`}
                  onClick={() => handleLanguageChange("en")}
                >
                  EN
                </button>
                <button
                  className={`p-2 hover:bg-gray-300 hover:rounded-e-md hover:h-full ${
                    currentLanguage === "id"
                      ? "text-black rounded-e-md bg-stone-400 h-full"
                      : ""
                  }`}
                  onClick={() => handleLanguageChange("id")}
                >
                  ID
                </button>
              </div>
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
            <div className="flex items-center rounded-md bg-yellow-400 text-black w-20">
              <button
                className={`p-2 w-full hover:bg-gray-300 hover:rounded-s-md hover:h-full ${
                  currentLanguage === "en"
                    ? "text-black rounded-s-md bg-stone-400 h-full"
                    : ""
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
              <button
                className={`p-2 w-full hover:bg-gray-300 hover:rounded-e-md hover:h-full ${
                  currentLanguage === "id"
                    ? "text-black rounded-e-md bg-stone-400 h-full"
                    : ""
                }`}
                onClick={() => handleLanguageChange("id")}
              >
                ID
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
