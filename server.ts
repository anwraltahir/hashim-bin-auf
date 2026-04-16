import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(bodyParser.json());

  // Mock Data
  const biography = {
    name: "Hashim Ibn Auf",
    title: "Infrastructure and Transport Consultant",
    fullBioAr: `هاشم ابن عوف هو قائد متميز وخبير محترف في مجال البنية التحتية والنقل. مع أكثر من 25 عاماً من الخبرة في الولايات المتحدة، غرب آسيا، وشمال أفريقيا، عمل كمستشار تنفيذي متخصص في وضع السياسات العامة، التطوير الاستراتيجي، التخطيط الحضري، والنقل.

بصفته وزير البنية التحتية والنقل السابق في السودان (2020-2021)، قاد إصلاحات وطنية حاسمة، شملت التغييرات الهيكلية المؤسسية، التعديلات التشريعية، واستعادة الأصول الوطنية الرئيسية. تعتمد فلسفته القيادية على التنمية المستدامة، الشراكات الاستراتيجية، وتحديث البنية التحتية لدفع عجلة النمو الوطني.`,
    fullBioEn: `Hashim Ibn Auf is a distinguished leader and professional in the field of infrastructure and transport. With over 25 years of experience across the USA, West Asia, and North Africa, he has served as an Executive Advisor specialized in Public Policy making, Strategic Development, Urban Planning, and Transport.

As the former Minister of Infrastructure and Transport in Sudan (2020-2021), he led critical national reforms, including institutional structural changes, legislative amendments, and the revival of key national assets. His leadership philosophy centers on sustainable development, strategic partnerships, and modernization of infrastructure to drive national growth.`,
    education: [
      {
        degreeAr: "ماجستير الهندسة في هندسة عمارة المنتجات",
        degreeEn: "Master of Engineering in Product Architecture Engineering",
        institutionAr: "معهد ستيفنز للتكنولوجيا",
        institutionEn: "Stevens Institute of Technology",
        period: "2006-2009"
      },
      {
        degreeAr: "بكالوريوس العلوم في الهندسة المعمارية (مع مرتبة الشرف)",
        degreeEn: "Bachelor of Science in Architecture Engineering (with Honor)",
        institutionAr: "جامعة الخرطوم",
        institutionEn: "University of Khartoum",
        period: "1998"
      }
    ],
    timeline: [
      { 
        period: "Jan 2020 – Jan 2021", 
        roleAr: "وزير البنية التحتية والنقل", 
        roleEn: "Minister of Infrastructure & Transport", 
        orgAr: "حكومة السودان", 
        orgEn: "Government of Sudan" 
      },
      { 
        period: "Aug 2017 – Present", 
        roleAr: "مستشار نقل", 
        roleEn: "Transport Consultant", 
        orgAr: "شركة سكك حديد قطر", 
        orgEn: "Qatar Rail Company" 
      },
      { 
        period: "Feb 2016 – July 2017", 
        roleAr: "مدير مشروع BIM", 
        roleEn: "BIM Project Manager", 
        orgAr: "هوشتيف فيكون، قطر", 
        orgEn: "Hochtief ViCon, Qatar" 
      },
      { 
        period: "May 2012 – Feb 2016", 
        roleAr: "مدير إنشاءات", 
        roleEn: "Construction Manager", 
        orgAr: "مستشفى الملك فيصل التخصصي، السعودية", 
        orgEn: "KFSHRC, KSA" 
      }
    ]
  };

  const achievements = [
    {
      id: 1,
      title: "Institutional Structural Reform",
      description: "Stating out the vision, plans & detailed emergency projects, approving them from the Council of Ministers & publishing them.",
      category: "Reform"
    },
    {
      id: 2,
      title: "Amendment of Sudan Transportation Acts",
      description: "Respecting transportation & to make related & consequential amendments to other Acts including Land Transport, Aviation, River Transport, and Maritime Authority Law.",
      category: "Legislation"
    },
    {
      id: 3,
      title: "Strategic Finance Partnership",
      description: "Improved Transport sector grant proposals & increased chances of receiving funds from international agencies like EXIM Bank, AfDB, UNDP, and Saudi Investment Fund.",
      category: "Finance"
    },
    {
      id: 4,
      title: "Asset Revival & National Transport Institute Recovery",
      description: "Recovering national river navigation company assets and restoring National Shipping Line Company and National Highway & bridge company.",
      category: "Infrastructure"
    }
  ];

  const news = [
    {
      id: 1,
      title: "Inauguration of the Kosti Free Zone",
      date: "2020-11-15",
      summary: "هاشم ابن عوف يفتتح منطقة كوستي الحرة وميناءها مع دولة جنوب السودان.",
      content: "Full article content here..."
    },
    {
      id: 2,
      title: "Agreement on Rail Link with Egypt",
      date: "2020-10-05",
      summary: "Sudan and Egypt reach an agreement on the rail link route to enhance cross-border transport.",
      content: "Full article content here..."
    }
  ];

  const media = [
    { id: 1, type: "image", url: "https://picsum.photos/seed/sudan1/800/600", title: "Infrastructure Project Site Visit" },
    { id: 2, type: "image", url: "https://picsum.photos/seed/sudan2/800/600", title: "Ministerial Meeting" },
    { id: 3, type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Interview on National TV" }
  ];

  const contactSubmissions: any[] = [];

  // API Routes
  app.get("/api/biography", (req, res) => res.json(biography));
  app.get("/api/achievements", (req, res) => res.json(achievements));
  app.get("/api/news", (req, res) => res.json(news));
  app.get("/api/media", (req, res) => res.json(media));
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    contactSubmissions.push({ name, email, message, date: new Date() });
    res.status(201).json({ status: "success", message: "Message received" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
