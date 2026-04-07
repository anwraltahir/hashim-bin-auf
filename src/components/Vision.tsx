import React from "react";
import { motion } from "motion/react";
import { Target, Lightbulb, TrendingUp, ShieldCheck } from "lucide-react";

interface VisionProps {
  lang: "ar" | "en";
}

export default function Vision({ lang }: VisionProps) {
  const visionPoints = [
    {
      icon: <Target size={32} />,
      title: lang === "ar" ? "التحول الرقمي" : "Digital Transformation",
      desc: lang === "ar" ? "دمج التكنولوجيا الحديثة ونظم المعلومات الجغرافية (GIS) في إدارة مشاريع البنية التحتية." : "Integrating modern technology and GIS in infrastructure project management."
    },
    {
      icon: <Lightbulb size={32} />,
      title: lang === "ar" ? "الابتكار المستدام" : "Sustainable Innovation",
      desc: lang === "ar" ? "تبني حلول هندسية صديقة للبيئة ومستدامة تضمن كفاءة الموارد على المدى الطويل." : "Adopting eco-friendly and sustainable engineering solutions that ensure long-term resource efficiency."
    },
    {
      icon: <TrendingUp size={32} />,
      title: lang === "ar" ? "النمو الاقتصادي" : "Economic Growth",
      desc: lang === "ar" ? "ربط السودان إقليمياً عبر شبكات نقل متطورة تفتح آفاقاً جديدة للتجارة والاستثمار." : "Connecting Sudan regionally through advanced transport networks that open new horizons for trade and investment."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: lang === "ar" ? "الحوكمة والشفافية" : "Governance & Transparency",
      desc: lang === "ar" ? "إرساء قواعد مؤسسية متينة تضمن الشفافية في العطاءات وتنفيذ المشاريع الوطنية." : "Establishing solid institutional rules that ensure transparency in bidding and national project execution."
    }
  ];

  return (
    <section id="vision" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-primary h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent"
          >
            <Lightbulb size={40} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary"
          >
            {lang === "ar" ? "رؤية للمستقبل" : "Vision for the Future"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-dark/60 text-lg max-w-2xl leading-relaxed"
          >
            {lang === "ar"
              ? "نؤمن بأن السودان يمتلك كافة المقومات ليصبح مركزاً إقليمياً للنقل والخدمات اللوجستية، من خلال رؤية استراتيجية واضحة وعمل مؤسسي متكامل."
              : "We believe that Sudan has all the potential to become a regional hub for transport and logistics, through a clear strategic vision and integrated institutional work."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/5 flex flex-col gap-6 group"
            >
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {point.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{point.title}</h3>
                <p className="text-sm text-text-dark/60 leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-primary p-12 md:p-20 rounded-[60px] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(198,167,94,0.1),transparent_50%)]" />
          <div className="relative z-10 flex flex-col items-center gap-8">
            <span className="text-accent text-6xl font-serif opacity-50">"</span>
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-4xl">
              {lang === "ar"
                ? "إن بناء الأوطان لا يتم بالتمني، بل بالتخطيط السليم والعمل الدؤوب الذي يرتكز على العلم والخبرة."
                : "Building nations is not done by wishing, but by sound planning and diligent work based on science and experience."}
            </h3>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <p className="text-accent font-bold uppercase tracking-widest text-sm">
                {lang === "ar" ? "هاشم ابن عوف" : "Hashim Ibn Auf"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
