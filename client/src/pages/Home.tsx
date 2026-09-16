import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  Code2,
  Command,
  Cpu,
  Database,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  Play,
  Quote,
  Rocket,
  Sparkles,
  Terminal,
  Timer,
  Users,
  X,
} from "lucide-react";

const courses = [
  {
    level: "01 — التأسيس",
    title: "بوابة الذكاء الاصطناعي",
    description: "افهم كيف يفكر الذكاء الاصطناعي، وابنِ أول نموذج لك من الصفر.",
    duration: "4 أسابيع",
    tags: ["Python", "أساسيات ML"],
    icon: Brain,
    accent: "cyan",
  },
  {
    level: "02 — التطبيق",
    title: "هندسة النماذج التوليدية",
    description: "حوّل الأفكار إلى منتجات حقيقية باستخدام LLMs وواجهات API.",
    duration: "6 أسابيع",
    tags: ["LLMs", "RAG", "APIs"],
    icon: Cpu,
    accent: "violet",
  },
  {
    level: "03 — الاحتراف",
    title: "مختبر الوكلاء الأذكياء",
    description: "صمّم وكلاء مستقلين يتذكرون، يخططون، وينفذون المهام بذكاء.",
    duration: "8 أسابيع",
    tags: ["Agents", "LangGraph"],
    icon: Command,
    accent: "orange",
  },
];

const benefits = [
  {
    icon: Terminal,
    number: "01",
    title: "تعلّم بالممارسة",
    text: "لا محاضرات طويلة. كل مفهوم يتحول فوراً إلى مشروع يعمل أمامك.",
  },
  {
    icon: Users,
    number: "02",
    title: "مجتمع يرفع مستواك",
    text: "تعلّم مع صانعي منتجات من المنطقة، وشارك أفكارك مع شبكة تتوسع يومياً.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "ملف أعمال يفتح الأبواب",
    text: "تخرج وأنت تحمل مشاريع حقيقية قابلة للعرض، لا مجرد شهادة على الحائط.",
  },
];

const tracks = [
  { name: "Product Builder", arabic: "صانع المنتجات", icon: Layers3, color: "cyan" },
  { name: "AI Engineer", arabic: "مهندس الذكاء", icon: Code2, color: "violet" },
  { name: "AI Leader", arabic: "قائد التحول", icon: BriefcaseBusiness, color: "orange" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentCourse = useMemo(() => courses[activeCourse], [activeCourse]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    window.setTimeout(() => setSubmitted(false), 4200);
  };

  return (
    <main dir="rtl" className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="top-ticker"><span className="live-dot" /> التسجيل مفتوح الآن — الدفعة الصيفية تبدأ في 12 أكتوبر <ArrowLeft size={14} /></div>

      <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={() => scrollTo("top")} aria-label="NEXORA AI Academy">
            <span className="brand-mark"><Sparkles size={17} strokeWidth={2.4} /></span>
            <span><b>NEXORA</b><small>AI ACADEMY</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "menu-open" : ""}`}>
            <button onClick={() => scrollTo("programs")}>البرامج</button>
            <button onClick={() => scrollTo("method")}>منهجنا</button>
            <button onClick={() => scrollTo("tracks")}>المسارات</button>
            <button onClick={() => scrollTo("stories")}>قصص الخريجين</button>
            <button className="mobile-close" onClick={() => setMenuOpen(false)}><X size={20} /></button>
          </nav>
          <div className="nav-actions">
            <button className="login-link" onClick={() => scrollTo("join")}>دخول</button>
            <button className="nav-cta" onClick={() => scrollTo("join")}>ابدأ رحلتك <ArrowUpLeft size={16} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="فتح القائمة">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
      </header>

      <section id="top" className="hero-section section-wrap">
        <div className="hero-copy reveal reveal-right">
          <div className="eyebrow"><span className="eyebrow-line" /> أكاديمية الذكاء الاصطناعي العربية <span className="eyebrow-count">/ 2026</span></div>
          <h1>لا تكتفِ<br /><em>بمراقبة</em> المستقبل.<span className="headline-dot">.</span></h1>
          <p className="hero-subtitle">تعلّم كيف تبنيه.</p>
          <p className="hero-body">مسارات عملية مكثفة لصناعة منتجات الذكاء الاصطناعي — من أول سطر كود إلى أول عميل.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollTo("join")}>اكتشف المسارات <ArrowUpLeft size={18} /></button>
            <button className="play-link" onClick={() => scrollTo("method")}><span className="play-button"><Play size={13} fill="currentColor" /></span> شاهد كيف نتعلم</button>
          </div>
          <div className="hero-trust"><div className="avatar-stack"><span>م</span><span>س</span><span>ر</span><span>+</span></div><div><b>+2,400</b><small>صانعاً بدأوا من هنا</small></div></div>
        </div>

        <div className="hero-visual reveal reveal-left">
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
          <div className="visual-card">
            <div className="visual-topline"><span><i /> النظام متصل</span><span>LAB / 01</span></div>
            <img src="/nexora-orbit.png" alt="كرة عصبية مضيئة تمثل الذكاء الاصطناعي" />
            <div className="visual-caption"><span>NEURAL<br />INTELLIGENCE</span><span className="caption-code">NXR<br />.AI_01</span></div>
          </div>
          <div className="floating-chip chip-top"><span className="chip-icon"><Database size={15} /></span><div><b>تطبيقات حقيقية</b><small>لا نظرية فقط</small></div></div>
          <div className="floating-chip chip-bottom"><span className="chip-icon violet-chip"><Timer size={15} /></span><div><b>+120 ساعة</b><small>تعلم عميق ومركز</small></div></div>
          <div className="hero-coordinate">34°31'15" N<br /><span>AI / CULTURE / FUTURE</span></div>
        </div>
      </section>

      <section className="marquee-band" aria-label="تخصصات الأكاديمية"><div className="marquee-track"><span>GENERATIVE AI</span><i /> <span>PRODUCT THINKING</span><i /> <span>AGENTIC SYSTEMS</span><i /> <span>AI FOR BUSINESS</span><i /> <span>GENERATIVE AI</span><i /> <span>PRODUCT THINKING</span><i /> <span>AGENTIC SYSTEMS</span><i /></div></section>

      <section id="method" className="method-section section-wrap">
        <div className="section-heading reveal"><div className="section-kicker">لماذا NEXORA؟ <span>/ 03 مبادئ</span></div><h2>نحن لا نعلّمك<br /><span>أداة.</span> نغيّر طريقة تفكيرك.</h2><p>الذكاء الاصطناعي ليس مجرد تقنية جديدة. إنه طريقة جديدة لرؤية الفرص، وبناء الحلول، وترك أثر لا يُنسى.</p></div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => { const Icon = benefit.icon; return <article className="benefit-card reveal" style={{ animationDelay: `${index * 90}ms` }} key={benefit.number}><div className="benefit-top"><span className="benefit-number">{benefit.number}</span><Icon size={23} strokeWidth={1.5} /></div><h3>{benefit.title}</h3><p>{benefit.text}</p><ArrowUpLeft className="benefit-arrow" size={20} /></article>; })}
        </div>
      </section>

      <section id="programs" className="programs-section section-wrap">
        <div className="program-header reveal"><div><div className="section-kicker">المنهج <span>/ 03 مراحل</span></div><h2>مستقبلك لا ينتظر.<br /><span>ابدأ الآن.</span></h2></div><p>منهج صُمّم للعالم العربي، ويُبنى على احتياجات العالم القادم.</p></div>
        <div className="program-layout reveal">
          <div className="course-list">{courses.map((course, index) => { const Icon = course.icon; return <button className={`course-item ${activeCourse === index ? "active" : ""}`} onClick={() => setActiveCourse(index)} key={course.level}><span className={`course-icon ${course.accent}`}><Icon size={19} /></span><span className="course-item-copy"><small>{course.level}</small><b>{course.title}</b></span><ChevronLeft className="course-chevron" size={19} /></button>; })}</div>
          <div className={`course-detail ${currentCourse.accent}`}><div className="detail-index">0{activeCourse + 1}<span>/03</span></div><div className="detail-icon"><currentCourse.icon size={34} /></div><div className="detail-copy"><div className="section-kicker">مسار مُختار <span>/ للمبتدئين والمتقدمين</span></div><h3>{currentCourse.title}</h3><p>{currentCourse.description}</p><div className="tag-row">{currentCourse.tags.map((tag) => <span key={tag}>{tag}</span>)}<span><Timer size={13} /> {currentCourse.duration}</span></div><button className="text-button" onClick={() => scrollTo("join")}>استكشف تفاصيل المسار <ArrowUpLeft size={17} /></button></div><div className="detail-grid-lines" /></div>
        </div>
      </section>

      <section id="tracks" className="tracks-section section-wrap">
        <div className="track-intro reveal"><div className="section-kicker">اختر موقعك <span>/ أين ترى نفسك؟</span></div><h2>كل طريق يبدأ<br /><span>بخطوة</span> واحدة.</h2></div>
        <div className="tracks-list">{tracks.map((track, index) => { const Icon = track.icon; return <button className={`track-row reveal ${track.color}`} key={track.name} style={{ animationDelay: `${index * 90}ms` }} onClick={() => scrollTo("join")}><span className="track-no">0{index + 1}</span><Icon size={25} strokeWidth={1.35} /><span className="track-name"><b>{track.arabic}</b><small>{track.name}</small></span><ArrowUpLeft className="track-arrow" size={23} /></button>; })}</div>
      </section>

      <section id="stories" className="story-section section-wrap">
        <div className="story-card reveal"><div className="quote-mark"><Quote size={45} /></div><p>كنت أعتقد أن الذكاء الاصطناعي للخبراء فقط. بعد 8 أسابيع في NEXORA، أطلقت أول أداة SaaS لي وبدأت أستقبل عملاء من خارج المنطقة.</p><div className="story-person"><span className="person-avatar">ن</span><span><b>نورا العتيبي</b><small>خريجة دفعة 2025 · Product Builder</small></span></div><div className="story-pagination"><span className="active" /><span /><span /><span /></div></div>
        <div className="story-side reveal reveal-left"><div className="section-kicker">أصوات من المستقبل <span>/ 02</span></div><h2>النتيجة<br /><span>تتحدث.</span></h2><p>أكثر من 92% من خريجينا يطبقون ما تعلموه خلال أول 30 يوماً.</p><button className="text-button" onClick={() => scrollTo("join")}>شاهد كل القصص <ArrowUpLeft size={17} /></button></div>
      </section>

      <section id="join" className="join-section section-wrap reveal"><div className="join-grid"><div><div className="section-kicker">خطوتك التالية <span>/ 01</span></div><h2>أنت أقرب<br />مما <span>تتخيل.</span></h2><p>اترك بريدك، وسنرسل لك دليل البداية المجاني وتفاصيل الدفعة القادمة.</p></div><form className="join-form" onSubmit={submitEmail}><label htmlFor="email">البريد الإلكتروني</label><div className="input-wrap"><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /><button type="submit" aria-label="إرسال البريد"><ArrowUpLeft size={21} /></button></div><small><Check size={14} /> لا رسائل مزعجة. وعد.</small>{submitted && <div className="success-message"><Sparkles size={16} /> تم تسجيلك — تحقق من بريدك قريباً.</div>}</form></div><div className="join-bottom"><span>NXR / 2026</span><span>بُني بشغف في المنطقة العربية</span><span>01 — 04</span></div></section>

      <footer className="footer section-wrap"><div className="footer-brand"><a className="brand" href="#top" onClick={() => scrollTo("top")}><span className="brand-mark"><Sparkles size={17} /></span><span><b>NEXORA</b><small>AI ACADEMY</small></span></a><p>نصنع العقول التي ستصنع الغد.</p></div><div className="footer-links"><div><b>استكشف</b><button onClick={() => scrollTo("programs")}>البرامج</button><button onClick={() => scrollTo("tracks")}>المسارات</button></div><div><b>تواصل</b><a href="mailto:hello@nexora.ai">hello@nexora.ai</a><a href="#join" onClick={() => scrollTo("join")}>انضم للقائمة</a></div></div><div className="social-links"><a href="#top" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="#top" aria-label="Instagram"><Instagram size={17} /></a><a href="mailto:hello@nexora.ai" aria-label="Email"><Globe2 size={17} /></a></div><div className="footer-end"><span>© 2026 NEXORA AI Academy</span><span>صُمم للمستقبل، بالعربية.</span></div></footer>
    </main>
  );
}
