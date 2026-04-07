import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowRight, ArrowLeft, Play, Image as ImageIcon } from "lucide-react";

interface NewsMediaProps {
  lang: "ar" | "en";
}

export default function NewsMedia({ lang }: NewsMediaProps) {
  const [news, setNews] = useState<any[]>([]);
  const [media, setMedia] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
    fetch("/api/media")
      .then((res) => res.json())
      .then((data) => setMedia(data));
  }, []);

  return (
    <section id="news" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* News Section */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary border-r-8 border-accent pr-6">
                {lang === "ar" ? "الأخبار والمركز الإعلامي" : "News & Media Center"}
              </h2>
              <p className="text-text-dark/60 text-lg max-w-xl leading-relaxed">
                {lang === "ar"
                  ? "تابع آخر المستجدات، التصريحات الصحفية، واللقاءات الإعلامية المتعلقة بالبنية التحتية والنقل."
                  : "Follow the latest updates, press releases, and media interviews related to infrastructure and transport."}
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              {news.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex flex-col md:flex-row gap-8 p-6 rounded-3xl hover:bg-background transition-all duration-500 border border-transparent hover:border-primary/5"
                >
                  <div className="md:w-1/3 aspect-video rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={`https://picsum.photos/seed/news${item.id}/600/400`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-xs font-bold text-accent uppercase tracking-widest">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-dark/60 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                    <button className="flex items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-colors mt-auto">
                      {lang === "ar" ? "اقرأ المزيد" : "Read More"}
                      {lang === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media Gallery Section */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <ImageIcon className="text-accent" />
                {lang === "ar" ? "معرض الصور والفيديو" : "Photo & Video Gallery"}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {media.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer ${
                      idx === 0 ? "col-span-2 aspect-video" : "aspect-square"
                    }`}
                  >
                    <img
                      src={item.type === "image" ? item.url : `https://picsum.photos/seed/thumb${item.id}/800/600`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                      {item.type === "video" ? (
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shadow-2xl">
                          <Play size={24} className="ml-1" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl">
                          <ImageIcon size={24} />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all">
                      <p className="text-white text-xs font-bold leading-tight">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-2">
                {lang === "ar" ? "عرض المعرض الكامل" : "View Full Gallery"}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
