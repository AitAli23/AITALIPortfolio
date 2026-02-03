"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Eviter l'erreur d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Détection du scroll pour l'effet de morphing
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg py-2"
        : "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gradient">Marouane</span>
          <span className="text-zinc-600 dark:text-zinc-400"> AIT ALI</span>
        </motion.button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1" onMouseLeave={() => setHoveredTab(null)}>
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={() => setHoveredTab(link.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${hoveredTab === link.id ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300"}
              `}
            >
              {hoveredTab === link.id && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
              {link.name}
            </button>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          )}

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Hire me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          )}

          <motion.button
            className="p-2 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                className="block h-0.5 bg-zinc-800 dark:bg-white rounded-full"
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 8 : 0
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 bg-zinc-800 dark:bg-white rounded-full"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 bg-zinc-800 dark:bg-white rounded-full"
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -8 : 0
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-lg font-medium py-3 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors dark:text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                Hire me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}