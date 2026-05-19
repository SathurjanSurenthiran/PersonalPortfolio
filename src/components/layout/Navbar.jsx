import React, { useState, useEffect } from "react";
import { Code, Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";
import arrow from '../../assets/arrow.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );


  const navLinks = [
    { id: "home", label: "Home" },
    ...NAV_LINKS,
  ];

  const activeSection = useScrollSpy(
    navLinks.map((link) => link.id)
  );

  /* Theme apply */
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");

    root.classList.add(theme);
    body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleNavClick = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      scrollToSection(sectionId);
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-black/40 backdrop-blur-lg"
            : "bg-white/70 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={arrow}
              alt="Logo"
              className="w-6 h-6 object-contain"
            />

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            >
              Sathuz
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-base font-medium transition-all duration-300 group ${
                    isActive
                      ? theme === "dark"
                        ? "text-white"
                        : "text-gray-900"
                      : theme === "dark"
                      ? "text-white/60 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    } ${
                      theme === "dark"
                        ? "bg-purple-400 group-hover:bg-purple-400"
                        : "bg-purple-600 group-hover:bg-purple-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full border transition-all duration-300 hover:scale-110 ${
                theme === "dark"
                  ? "border-white/10 bg-white/5"
                  : "border-purple-200 bg-white shadow-md"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-white/70" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-5 py-6 space-y-3 border-t ${
            theme === "dark"
              ? "bg-black/95 border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? theme === "dark"
                      ? "text-white bg-white/10"
                      : "text-gray-900 bg-purple-50"
                    : theme === "dark"
                    ? "text-white/70 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
