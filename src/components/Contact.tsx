import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

interface ContactProps {
  lang: "ar" | "en";
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary border-r-8 border-accent pr-6">
                {lang === "ar" ? "تواصل معنا" : "Contact Us"}
              </h2>
              <p className="text-text-dark/60 text-lg max-w-xl leading-relaxed">
                {lang === "ar"
                  ? "يسعدنا استقبال استفساراتكم، مقترحاتكم، وتواصلكم المهني. نحن هنا للاستماع والمشاركة في بناء الرؤية الوطنية."
                  : "We are pleased to receive your inquiries, suggestions, and professional communication. We are here to listen and participate in building the national vision."}
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              <div className="flex gap-6 items-center p-6 bg-background rounded-3xl border border-primary/5 hover:border-accent/20 transition-all group">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{lang === "ar" ? "البريد الإلكتروني" : "Email"}</span>
                  <p className="text-lg font-bold text-primary">Hashim.Sulieman@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-center p-6 bg-background rounded-3xl border border-primary/5 hover:border-accent/20 transition-all group">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{lang === "ar" ? "الهاتف" : "Phone"}</span>
                  <p className="text-lg font-bold text-primary" dir="ltr">+974 6660 4883</p>
                </div>
              </div>

              <div className="flex gap-6 items-center p-6 bg-background rounded-3xl border border-primary/5 hover:border-accent/20 transition-all group">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{lang === "ar" ? "الموقع" : "Location"}</span>
                  <p className="text-lg font-bold text-primary">{lang === "ar" ? "الخرطوم، السودان" : "Khartoum, Sudan"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(198,167,94,0.05),transparent_50%)]" />
              <div className="relative z-10 flex flex-col gap-8">
                <h3 className="text-2xl font-bold text-white">
                  {lang === "ar" ? "أرسل رسالة مباشرة" : "Send a Direct Message"}
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/60 uppercase tracking-widest">{lang === "ar" ? "الاسم الكامل" : "Full Name"}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-accent focus:outline-none transition-all"
                        placeholder={lang === "ar" ? "أدخل اسمك هنا" : "Enter your name here"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-white/60 uppercase tracking-widest">{lang === "ar" ? "البريد الإلكتروني" : "Email Address"}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-accent focus:outline-none transition-all"
                        placeholder={lang === "ar" ? "example@email.com" : "example@email.com"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest">{lang === "ar" ? "الرسالة" : "Message"}</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-accent focus:outline-none transition-all resize-none"
                      placeholder={lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`bg-accent text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-3 group ${
                      status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {status === "loading" ? (
                      <span className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 size={24} />
                        {lang === "ar" ? "تم الإرسال بنجاح" : "Sent Successfully"}
                      </>
                    ) : (
                      <>
                        <Send size={24} className="group-hover:translate-x-[-4px] transition-transform" />
                        {lang === "ar" ? "إرسال الرسالة" : "Send Message"}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
