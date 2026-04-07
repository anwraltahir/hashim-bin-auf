import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  lang: "ar" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Identity */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-2xl">
                H
              </div>
              <div>
                <h2 className="text-xl font-bold leading-tight">
                  {lang === "ar" ? "م. هاشم بن عوف" : "Eng. Hashem Bin Auf"}
                </h2>
                <p className="text-xs opacity-60 uppercase tracking-wider">
                  {lang === "ar" ? "وزير البنية التحتية والنقل السابق" : "Former Minister of Infrastructure & Transport"}
                </p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              {lang === "ar"
                ? "رؤية وطنية شاملة لتطوير البنية التحتية والنقل في السودان، مبنية على الخبرة العالمية والالتزام الوطني."
                : "A comprehensive national vision for infrastructure and transport development in Sudan, built on global expertise and national commitment."}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold border-r-4 border-accent pr-4">
              {lang === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="flex flex-col gap-3 text-sm opacity-70">
              <li><a href="#home" className="hover:text-accent transition-colors">{lang === "ar" ? "الرئيسية" : "Home"}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{lang === "ar" ? "عن الوزير" : "About"}</a></li>
              <li><a href="#achievements" className="hover:text-accent transition-colors">{lang === "ar" ? "الإنجازات" : "Achievements"}</a></li>
              <li><a href="#news" className="hover:text-accent transition-colors">{lang === "ar" ? "الأخبار" : "News"}</a></li>
              <li><a href="#vision" className="hover:text-accent transition-colors">{lang === "ar" ? "الرؤية" : "Vision"}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold border-r-4 border-accent pr-4">
              {lang === "ar" ? "معلومات الاتصال" : "Contact Information"}
            </h3>
            <ul className="flex flex-col gap-4 text-sm opacity-70">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>Hashim.Sulieman@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span dir="ltr">+974 6660 4883</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>{lang === "ar" ? "الخرطوم، السودان" : "Khartoum, Sudan"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <p>© {currentYear} {lang === "ar" ? "م. هاشم بن عوف. جميع الحقوق محفوظة." : "Eng. Hashem Bin Auf. All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === "ar" ? "شروط الاستخدام" : "Terms of Use"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
