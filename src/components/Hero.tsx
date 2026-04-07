import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeroProps {
  lang: "ar" | "en";
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(198,167,94,0.15),transparent_70%)]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-accent font-bold tracking-widest uppercase text-sm border-r-4 border-accent pr-4">
                {lang === "ar" ? "قيادة وطنية ورؤية عالمية" : "National Leadership & Global Vision"}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {lang === "ar" ? (
                  <>
                    م. هاشم <span className="text-accent">بن عوف</span>
                  </>
                ) : (
                  <>
                    Eng. Hashem <span className="text-accent">Bin Auf</span>
                  </>
                )}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
                {lang === "ar"
                  ? "وزير البنية التحتية والنقل السابق في السودان. خبير في السياسات العامة، التخطيط الاستراتيجي، وتطوير البنية التحتية الوطنية."
                  : "Former Minister of Infrastructure & Transport in Sudan. Expert in Public Policy, Strategic Planning, and National Infrastructure Development."}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center gap-2 group">
                {lang === "ar" ? "تعرف على الإنجازات" : "View Achievements"}
                {lang === "ar" ? <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {lang === "ar" ? "السيرة الذاتية" : "Biography"}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-accent text-2xl font-bold">25+</span>
                <span className="text-white/60 text-xs uppercase tracking-wider">{lang === "ar" ? "سنة خبرة" : "Years Experience"}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-accent text-2xl font-bold">100+</span>
                <span className="text-white/60 text-xs uppercase tracking-wider">{lang === "ar" ? "مشروع وطني" : "National Projects"}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-accent text-2xl font-bold">10+</span>
                <span className="text-white/60 text-xs uppercase tracking-wider">{lang === "ar" ? "جوائز تميز" : "Excellence Awards"}</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-accent/20 shadow-2xl">
              <img
                src="https://picsum.photos/seed/hashem/800/1000"
                alt="Eng. Hashem Bin Auf"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 right-8 left-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white text-sm italic font-arabic leading-relaxed">
                  {lang === "ar" 
                    ? "\"البنية التحتية هي العمود الفقري لأي نهضة وطنية حقيقية، والعمل المخلص هو السبيل الوحيد لتحقيقها.\""
                    : "\"Infrastructure is the backbone of any true national renaissance, and sincere work is the only way to achieve it.\""}
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-t-8 border-l-8 border-accent/30 rounded-tl-3xl z-0" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-b-8 border-r-8 border-accent/30 rounded-br-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
