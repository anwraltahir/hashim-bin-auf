import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

interface AboutProps {
  lang: "ar" | "en";
}

export default function About({ lang }: AboutProps) {
  const [bioData, setBioData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/biography")
      .then((res) => res.json())
      .then((data) => setBioData(data));
  }, []);

  if (!bioData) return null;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary border-r-8 border-accent pr-6">
                {lang === "ar" ? "عن م. هاشم بن عوف" : "About Eng. Hashem Bin Auf"}
              </h2>
              <p className="text-lg text-text-dark/80 leading-relaxed whitespace-pre-line">
                {lang === "ar" ? bioData.fullBioAr : bioData.fullBioEn}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-8 rounded-3xl border border-primary/5 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Award className="text-accent" />
                {lang === "ar" ? "فلسفة القيادة" : "Leadership Philosophy"}
              </h3>
              <p className="text-text-dark/70 italic leading-relaxed">
                {lang === "ar"
                  ? "تعتمد فلسفتي القيادية على الشفافية، الابتكار، والعمل الجماعي. أؤمن بأن التحديات الوطنية تتطلب حلولاً غير تقليدية، وأن الاستثمار في الكوادر البشرية هو الضمان الحقيقي لاستدامة المشاريع الكبرى."
                  : "My leadership philosophy is based on transparency, innovation, and teamwork. I believe that national challenges require unconventional solutions, and that investing in human capital is the true guarantee for the sustainability of major projects."}
              </p>
            </motion.div>
          </div>

          {/* Right: Education & Timeline */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <GraduationCap className="text-accent" />
                {lang === "ar" ? "التعليم الأكاديمي" : "Academic Education"}
              </h3>
              <div className="flex flex-col gap-6">
                {bioData.education.map((edu: any, idx: number) => (
                  <div key={idx} className="relative pr-8 border-r-2 border-accent/20 pb-4">
                    <div className="absolute top-0 right-[-6px] w-3 h-3 bg-accent rounded-full" />
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{edu.period}</span>
                    <h4 className="text-lg font-bold text-primary mt-1">{lang === "ar" ? edu.degreeAr : edu.degreeEn}</h4>
                    <p className="text-sm text-text-dark/60">{lang === "ar" ? edu.institutionAr : edu.institutionEn}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <Briefcase className="text-accent" />
                {lang === "ar" ? "المسيرة المهنية" : "Career Timeline"}
              </h3>
              <div className="flex flex-col gap-6">
                {bioData.timeline.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="min-w-[100px] text-xs font-bold text-accent pt-1">{item.period}</div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-base font-bold text-primary leading-tight">{lang === "ar" ? item.roleAr : item.roleEn}</h4>
                      <p className="text-xs text-text-dark/60">{lang === "ar" ? item.orgAr : item.orgEn}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-accent font-bold text-sm flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <BookOpen size={18} />
                {lang === "ar" ? "تحميل السيرة الذاتية الكاملة (PDF)" : "Download Full Resume (PDF)"}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
