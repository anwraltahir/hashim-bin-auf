import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle, ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";

interface AchievementsProps {
  lang: "ar" | "en";
}

export default function Achievements({ lang }: AchievementsProps) {
  const [achievements, setAchievements] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/achievements")
      .then((res) => res.json())
      .then((data) => setAchievements(data));
  }, []);

  return (
    <section id="achievements" className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold border-r-8 border-accent pr-6">
              {lang === "ar" ? "الإنجازات والمشاريع الوطنية" : "National Achievements & Projects"}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              {lang === "ar"
                ? "خلال فترة تولي الوزارة، تم تنفيذ سلسلة من الإصلاحات الهيكلية والمشاريع الاستراتيجية التي تهدف إلى تحديث قطاع النقل والبنية التحتية في السودان."
                : "During the ministerial term, a series of structural reforms and strategic projects were implemented aimed at modernizing the transport and infrastructure sector in Sudan."}
            </p>
          </motion.div>
          <button className="text-accent font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
            {lang === "ar" ? "عرض كافة المشاريع" : "View All Projects"}
            {lang === "ar" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 flex flex-col gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full group-hover:bg-accent/10 transition-all" />
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                <CheckCircle size={28} />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.category}</span>
                <h3 className="text-xl font-bold leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
              <button className="mt-auto flex items-center gap-2 text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-all">
                {lang === "ar" ? "تفاصيل المشروع" : "Project Details"}
                <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-primary p-12 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(198,167,94,0.1),transparent_50%)]" />
          <div className="flex flex-col gap-8 relative z-10">
            <h3 className="text-3xl font-bold text-white">
              {lang === "ar" ? "الأثر الوطني والتحول المؤسسي" : "National Impact & Institutional Transformation"}
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  {lang === "ar"
                    ? "تأمين منح بقيمة 900,000 يورو للتحول المؤسسي وبناء قدرات كوادر الوزارة."
                    : "Securing grants worth €900,000 for institutional transformation and capacity building of ministry cadres."}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  {lang === "ar"
                    ? "استعادة الأصول الوطنية المخصخصة وتفعيل دور الوزارة الاتحادية في الإشراف على وزارات الولايات."
                    : "Recovering privatized national assets and activating the role of the Federal Ministry in supervising state ministries."}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  {lang === "ar"
                    ? "تطوير صناعة النقل عبر الحدود وتوقيع اتفاقيات ثنائية مع دول الجوار (مصر، إثيوبيا، تشاد، جنوب السودان)."
                    : "Developing the cross-border transport industry and signing bilateral agreements with neighboring countries (Egypt, Ethiopia, Chad, South Sudan)."}
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <img
              src="https://picsum.photos/seed/impact/800/450"
              alt="National Impact"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[18px] border-r-primary ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
