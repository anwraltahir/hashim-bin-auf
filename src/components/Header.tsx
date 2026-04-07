import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", ar: "الرئيسية", en: "Home" },
    { id: "about", ar: "عن الوزير", en: "About" },
    { id: "achievements", ar: "الإنجازات", en: "Achievements" },
    { id: "news", ar: "الأخبار", en: "News" },
    { id: "vision", ar: "الرؤية", en: "Vision" },
    { id: "contact", ar: "اتصل بنا", en: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl">
            H
          </div>
          <div className="text-white">
            <h1 className="text-lg md:text-xl leading-tight">
              {lang === "ar" ? "هاشم ابن عوف" : "Hashim Ibn Auf"}
            </h1>
            <p className="text-[10px] md:text-xs opacity-80 uppercase tracking-wider">
              {lang === "ar" ? "وزير البنية التحتية والنقل السابق" : "Former Minister of Infrastructure & Transport"}
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-accent transition-colors text-sm font-medium"
            >
              {lang === "ar" ? link.ar : link.en}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-2 text-white border border-white/20 px-3 py-1 rounded-full hover:bg-white/10 transition-all text-xs"
          >
            <Globe size={14} />
            {lang === "ar" ? "English" : "العربية"}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="text-white p-2"
          >
            <Globe size={20} />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white text-right py-2 border-b border-white/5 hover:text-accent transition-colors"
                >
                  {lang === "ar" ? link.ar : link.en}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
