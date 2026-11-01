import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection as lenisGo } from "../lib/scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", isSpecial: true },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "company-work", label: "Work", rightSide: true },
    { id: "experience", label: "Experience", rightSide: true },
    { id: "projects", label: "Projects", rightSide: true },
    { id: "contact", label: "Contact", rightSide: true },
  ];

  const scrollToSection = (sectionId) => {
    lenisGo(sectionId);
  };

  const getButtonClass = (isSpecial) => {
    const baseClass =
      "text-white text-sm font-medium transition-colors duration-200 hover:text-orange-400";
    if (!isSpecial) return baseClass;
    return `${baseClass} bg-orange-500 px-4 py-1.5 rounded-full ${
      isScrolled ? (isHovered ? "opacity-100" : "opacity-0") : "opacity-100"
    } transition-opacity duration-300 hover:bg-orange-600`;
  };

  return (
    <div>
      {isVisible && (
        <nav
          className={`nav fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out
            ${isScrolled ? "-translate-y-full top-3 hover:translate-y-0" : ""}`}
          style={{ marginTop: isScrolled ? "3px" : "30px" }}
        >
          <div
            className="absolute w-full h-[130px] -top-[30px]"
            onMouseEnter={() => setIsHovered(true)}
          />

          <div className="nav_bg mx-auto max-w-6xl backdrop-blur-0">
            <div className="nav_container bg-gray-900/90 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between relative">
              {/* Left Navigation Items */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-10">
                {navItems
                  .filter((item) => !item.rightSide)
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={getButtonClass(item.isSpecial)}
                    >
                      {item.label}
                    </button>
                  ))}
              </div>

              {/* Logo */}
              <div className="nav_js flex items-center space-x-1 text-white group">
                <span className="text-orange-500 text-xl animate-bounce transition-transform duration-200 group-hover:scale-150">
                  ●
                </span>
                <span
                  className="nav_js font-bold text-xl text-white cursor-pointer"
                  onClick={() => scrollToSection("home")}
                >
                  JS
                </span>
              </div>

              {/* Right Navigation Items */}
              <div
                className={`hidden lg:flex items-center space-x-4 xl:space-x-10 transition-all duration-300
                  ${
                    isScrolled
                      ? isHovered
                        ? "opacity-100"
                        : "opacity-0"
                      : "opacity-100"
                  }`}
              >
                {navItems
                  .filter((item) => item.rightSide)
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={getButtonClass(item.isSpecial)}
                    >
                      {item.label}
                    </button>
                  ))}
              </div>

              {/* Mobile / tablet actions */}
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full bg-orange-500 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Let&apos;s talk
                </button>
                <button
                  className="hand_burger flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Mobile and Tablet Menu */}
            <div
              className={`lg:hidden bg-gray-900/90 mt-2 rounded-xl flex flex-col items-center space-y-3 py-3 transition-all duration-500 ease-in-out transform ${
                isMenuOpen
                  ? "max-h-[500px] opacity-100 scale-y-100"
                  : "max-h-0 opacity-0 scale-y-95 pointer-events-none"
              } origin-top`}
              style={{ overflow: "hidden" }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={getButtonClass(item.isSpecial)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
