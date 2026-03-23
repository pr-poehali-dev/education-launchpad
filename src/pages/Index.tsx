import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: "calendar",
    icon: "Calendar",
    emoji: "📅",
    title: "Олимп-Календарь",
    subtitle: "Умный планировщик",
    desc: "Персональный график всех перечневых олимпиад. Не пропусти ни одной регистрации — система предупредит заранее.",
    color: "#00c8f8",
    badge: "🔔 Push",
    link: "#calendar",
    tag: "500+ олимпиад",
  },
  {
    id: "lawyer",
    icon: "Shield",
    emoji: "⚖️",
    title: "Олимп-Адвокат",
    subtitle: "Юридический щит",
    desc: "Первый в России конструктор защиты прав абитуриента. Жалоба по законам РФ за 2 минуты.",
    color: "#ff7a20",
    badge: "⚡ Новинка",
    link: "#lawyer",
    tag: "Юристы ВШП",
  },
  {
    id: "benefits",
    icon: "Trophy",
    emoji: "🎓",
    title: "Навигатор льгот",
    subtitle: "БВИ и 100 баллов",
    desc: "Введи дипломы и баллы ЕГЭ — система покажет, где ты проходишь без вступительных.",
    color: "#39e88e",
    badge: "🎯 БВИ",
    link: "#benefits",
    tag: "МГУ, ВШЭ, РЭУ…",
  },
  {
    id: "prep",
    icon: "BookOpen",
    emoji: "🚀",
    title: "Подготовка",
    subtitle: "Агрегатор ресурсов",
    desc: "Лучшие бесплатные курсы и фонды. Подготовка уровня МГУ доступна каждому из любого города.",
    color: "#a855f7",
    badge: "📚 Бесплатно",
    link: "#prep",
    tag: "Умскул и др.",
  },
  {
    id: "mentors",
    icon: "Users",
    emoji: "🤝",
    title: "Наставничество",
    subtitle: "Добро.рф",
    desc: "Консультации от студентов-олимпиадников топовых вузов. Призёры прошлых лет помогут пройти путь.",
    color: "#f59e0b",
    badge: "🌟 Волонтёры",
    link: "#mentors",
    tag: "Добро.рф",
  },
  {
    id: "profile",
    icon: "User",
    emoji: "👤",
    title: "Профиль",
    subtitle: "Личный кабинет",
    desc: "Все твои олимпиады, документы и достижения в одном месте. Следи за прогрессом к поступлению.",
    color: "#06b6d4",
    badge: "📊 Статистика",
    link: "#profile",
    tag: "Мой прогресс",
  },
  {
    id: "rating",
    icon: "Star",
    emoji: "🏆",
    title: "Рейтинг",
    subtitle: "Плюшки за активность",
    desc: "Зарабатывай баллы «Взлёта» за активность. Топ-10 получают мерч, консультации юристов и скидки.",
    color: "#ec4899",
    badge: "🎁 Призы",
    link: "#rating",
    tag: "Призы каждый месяц",
  },
  {
    id: "community",
    icon: "MessageCircle",
    emoji: "💬",
    title: "Сообщество",
    subtitle: "Форум олимпиадников",
    desc: "Закрытый клуб для общения. Обменивайся опытом с такими же — не надо быть одному в этом пути.",
    color: "#14b8a6",
    badge: "🔥 Живое",
    link: "#community",
    tag: "Закрытый клуб",
  },
];

const stats = [
  { value: "500+", label: "Олимпиад в базе" },
  { value: "12к+", label: "Абитуриентов" },
  { value: "87%", label: "Поступили на бюджет" },
  { value: "2 мин", label: "Жалоба в вуз" },
];

const partners = ["Госдума", "Росмолодёжь", "«Я в деле»", "ВШП", "Совет ректоров", "Добро.рф"];

const topUsers = [
  { rank: 1, name: "Александра К.", score: 2840, prize: "Мерч + консультация", avatar: "А" },
  { rank: 2, name: "Михаил Р.", score: 2610, prize: "Курс Умскул", avatar: "М" },
  { rank: 3, name: "Дарья С.", score: 2390, prize: "Мерч Взлёт.рф", avatar: "Д" },
  { rank: 4, name: "Иван П.", score: 1950, prize: "Скидка 30%", avatar: "И" },
  { rank: 5, name: "Полина В.", score: 1720, prize: "Скидка 20%", avatar: "П" },
];

const olympiads = [
  { name: "Ломоносов", subject: "Математика", date: "15 апр", days: 23, color: "#00c8f8" },
  { name: "Высшая проба", subject: "Физика", date: "22 апр", days: 30, color: "#39e88e" },
  { name: "ПВГ", subject: "История", date: "5 мая", days: 43, color: "#ff7a20" },
  { name: "Олимп НИУ ВШЭ", subject: "Экономика", date: "12 мая", days: 50, color: "#a855f7" },
];

export default function Index() {
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".observe-me").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--deep-bg)", color: "#e8f0fe" }}>
      {/* NAVIGATION */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(8,13,20,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,200,248,0.1)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-oswald font-bold text-sm animate-glow"
            style={{ background: "linear-gradient(135deg, var(--neon-blue), var(--neon-orange))", color: "#000" }}
          >
            ВЗ
          </div>
          <span className="font-oswald font-bold text-lg tracking-wide neon-text-blue">ВЗЛЁТ.РФ</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {[["Календарь", "#calendar"], ["Адвокат", "#lawyer"], ["Льготы", "#benefits"], ["Рейтинг", "#rating"]].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/5"
              style={{ color: "rgba(232,240,254,0.65)", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, var(--neon-blue), #0090c8)", color: "#000", fontFamily: "'Golos Text', sans-serif" }}
            onClick={() => setNotifEnabled(!notifEnabled)}
          >
            <Icon name="Bell" size={14} />
            {notifEnabled ? "✓ Подключено" : "Уведомления"}
          </button>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-xl md:hidden"
            style={{ border: "1px solid var(--card-border)", color: "rgba(232,240,254,0.7)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={18} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6 gap-3"
          style={{ background: "rgba(8,13,20,0.98)", backdropFilter: "blur(20px)" }}>
          {[["📅 Календарь", "#calendar"], ["⚖️ Адвокат", "#lawyer"], ["🎓 Льготы", "#benefits"],
            ["🚀 Подготовка", "#prep"], ["🤝 Наставники", "#mentors"], ["🏆 Рейтинг", "#rating"], ["💬 Сообщество", "#community"]
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-xl font-oswald py-3 border-b"
              style={{ borderColor: "var(--card-border)", color: "rgba(232,240,254,0.8)", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,200,248,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,32,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />

        {/* Orbiting emojis */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none hidden lg:block">
          <div className="orbit-1 absolute">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{ background: "rgba(0,200,248,0.15)", border: "1px solid rgba(0,200,248,0.4)", marginLeft: "-20px", marginTop: "-20px" }}>📅</div>
          </div>
          <div className="orbit-2 absolute" style={{ animationDelay: "-3s" }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
              style={{ background: "rgba(255,122,32,0.15)", border: "1px solid rgba(255,122,32,0.4)", marginLeft: "-16px", marginTop: "-16px" }}>⚖️</div>
          </div>
          <div className="orbit-3 absolute" style={{ animationDelay: "-6s" }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(57,232,142,0.15)", border: "1px solid rgba(57,232,142,0.4)", marginLeft: "-18px", marginTop: "-18px" }}>🎓</div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(0,200,248,0.1)", border: "1px solid rgba(0,200,248,0.3)", color: "var(--neon-blue)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: "var(--neon-blue)" }} />
            <span className="text-sm font-medium">При поддержке Госдумы и Росмолодёжи</span>
          </div>

          <h1 className="stagger-2 font-oswald font-bold leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "-0.02em" }}>
            <span style={{ color: "#e8f0fe" }}>ТВО</span><span className="neon-text-blue">Й</span><br />
            <span className="neon-text-orange">ВЗЛЁТ</span><br />
            <span style={{ color: "#e8f0fe", fontSize: "0.55em", fontWeight: 400 }}>В МИР ОЛИМПИАД</span>
          </h1>

          <p className="stagger-3 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(232,240,254,0.65)", fontFamily: "'Golos Text', sans-serif" }}>
            Единая экосистема от выбора олимпиады до приказа о зачислении на бюджет.
            Юридическая защита, навигатор льгот и наставники-призёры.
          </p>

          <div className="stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-2xl font-oswald font-semibold text-lg tracking-wide transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, var(--neon-blue), #0090c8)", color: "#000", boxShadow: "0 0 30px rgba(0,200,248,0.4)" }}
              onClick={() => setNotifEnabled(true)}>
              🚀 Начать бесплатно
            </button>
            <a href="#calendar"
              className="px-8 py-4 rounded-2xl font-oswald font-semibold text-lg tracking-wide transition-all hover:scale-105 flex items-center justify-center"
              style={{ border: "1px solid rgba(0,200,248,0.4)", color: "var(--neon-blue)", background: "rgba(0,200,248,0.05)", textDecoration: "none" }}>
              📅 Посмотреть олимпиады
            </a>
          </div>

          {notifEnabled && (
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl animate-slide-up"
              style={{ background: "rgba(57,232,142,0.1)", border: "1px solid rgba(57,232,142,0.3)", color: "#39e88e" }}>
              <Icon name="CheckCircle" size={18} />
              <span className="text-sm font-medium">Уведомления подключены! Больше не пропустишь регистрацию.</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs" style={{ color: "rgba(232,240,254,0.3)" }}>скролл</span>
          <Icon name="ChevronDown" size={20} style={{ color: "rgba(0,200,248,0.5)" }} />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl card-glass">
              <div className="font-oswald font-bold text-4xl mb-1"
                style={{ color: i % 2 === 0 ? "var(--neon-blue)" : "var(--neon-orange)" }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "rgba(232,240,254,0.55)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4 uppercase"
              style={{ background: "rgba(168,85,247,0.15)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.3)" }}>
              Экосистема
            </div>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-4" style={{ color: "#e8f0fe" }}>
              8 СЕРВИСОВ — ОДНА ПЛАТФОРМА
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(232,240,254,0.55)" }}>
              Всё что нужно абитуриенту-олимпиаднику собрано в едином пространстве
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <a key={s.id} href={s.link}
                className={`block p-5 rounded-2xl card-glass border hover-card-lift stagger-${Math.min(i + 1, 8)} group`}
                style={{ borderColor: `${s.color}30`, textDecoration: "none" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}35` }}>
                    {s.emoji}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}30` }}>
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-oswald font-bold text-lg mb-1 transition-colors" style={{ color: "#e8f0fe" }}>
                  {s.title}
                </h3>
                <p className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: s.color }}>
                  {s.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(232,240,254,0.55)" }}>
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(232,240,254,0.4)" }}>
                    {s.tag}
                  </span>
                  <Icon name="ArrowRight" size={16} style={{ color: s.color }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR SECTION */}
      <section className="py-16 px-6" id="calendar">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4 uppercase"
                style={{ background: "rgba(0,200,248,0.15)", color: "var(--neon-blue)", border: "1px solid rgba(0,200,248,0.3)" }}>
                📅 Олимп-Календарь
              </div>
              <h2 className="font-oswald font-bold text-4xl mb-4" style={{ color: "#e8f0fe" }}>
                НЕ ПРОЗЕВАЙ<br /><span className="neon-text-blue">РЕГИСТРАЦИЮ</span>
              </h2>
              <p className="text-base mb-6" style={{ color: "rgba(232,240,254,0.6)" }}>
                Все перечневые олимпиады в одном месте. Ломоносов, Высшая проба, ПВГ и сотни других — с автоматическими push-уведомлениями о каждом этапе.
              </p>
              <ul className="space-y-3 mb-8">
                {["Уведомление за 7 дней до регистрации", "Напоминание о загрузке работ", "Дедлайн подачи документов", "Результаты и апелляция"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(232,240,254,0.75)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,200,248,0.2)" }}>
                      <Icon name="Check" size={12} style={{ color: "var(--neon-blue)" }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "rgba(0,200,248,0.1)", border: "1px solid rgba(0,200,248,0.4)", color: "var(--neon-blue)" }}
                onClick={() => setNotifEnabled(true)}>
                <Icon name="Bell" size={16} />
                Подключить уведомления
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-5 rounded-2xl card-glass mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
                  style={{ color: "rgba(232,240,254,0.4)" }}>
                  <Icon name="Clock" size={12} />
                  Ближайшие дедлайны
                </div>
                {olympiads.map((ol, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b last:border-0"
                    style={{ borderColor: "var(--card-border)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: ol.color }} />
                      <div>
                        <div className="font-semibold text-sm" style={{ color: "#e8f0fe" }}>{ol.name}</div>
                        <div className="text-xs" style={{ color: "rgba(232,240,254,0.4)" }}>{ol.subject}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-oswald font-bold" style={{ color: ol.color }}>{ol.date}</div>
                      <div className="text-xs" style={{ color: "rgba(232,240,254,0.35)" }}>через {ol.days} дн.</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl flex items-center gap-3"
                style={{ background: "rgba(0,200,248,0.08)", border: "1px solid rgba(0,200,248,0.25)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,200,248,0.15)" }}>
                  <Icon name="Bell" size={18} style={{ color: "var(--neon-blue)" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#e8f0fe" }}>Push-уведомления</div>
                  <div className="text-xs" style={{ color: "rgba(232,240,254,0.45)" }}>
                    Получишь напоминание за 7 дней и в день дедлайна
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAWYER SECTION */}
      <section className="py-16 px-6" id="lawyer">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(255,122,32,0.08) 0%, rgba(14,21,32,1) 60%)", border: "1px solid rgba(255,122,32,0.25)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,122,32,0.12) 0%, transparent 70%)", filter: "blur(30px)" }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4 uppercase"
                  style={{ background: "rgba(255,122,32,0.15)", color: "var(--neon-orange)", border: "1px solid rgba(255,122,32,0.3)" }}>
                  ⚖️ Новинка в России
                </div>
                <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-4" style={{ color: "#e8f0fe" }}>
                  ОЛИМП-<br /><span className="neon-text-orange">АДВОКАТ</span>
                </h2>
                <p className="text-base mb-6" style={{ color: "rgba(232,240,254,0.65)" }}>
                  Вуз нарушает правила? Завалили на апелляции? Конструктор сформирует готовую жалобу по законам РФ за 2 минуты.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[{ val: "2 мин", label: "Жалоба готова" }, { val: "100%", label: "Законно" }, { val: "ВШП", label: "Юристы" }].map((item) => (
                    <div key={item.val} className="text-center p-3 rounded-xl"
                      style={{ background: "rgba(255,122,32,0.08)", border: "1px solid rgba(255,122,32,0.2)" }}>
                      <div className="font-oswald font-bold text-xl" style={{ color: "var(--neon-orange)" }}>{item.val}</div>
                      <div className="text-xs" style={{ color: "rgba(232,240,254,0.5)" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, var(--neon-orange), #cc5500)", color: "#fff" }}>
                  <Icon name="FileText" size={16} />
                  Составить жалобу
                </button>
              </div>
              <div className="space-y-3">
                {["Нарушение сроков публикации результатов", "Неправомерный отказ в апелляции", "Дискриминация при зачислении", "Нарушение правил приёма"].map((issue) => (
                  <div key={issue} className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.02]"
                    style={{ background: "rgba(255,122,32,0.06)", border: "1px solid rgba(255,122,32,0.2)" }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,122,32,0.15)" }}>
                      <Icon name="AlertTriangle" size={14} style={{ color: "var(--neon-orange)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(232,240,254,0.8)" }}>{issue}</span>
                    <Icon name="ChevronRight" size={14} style={{ color: "rgba(255,122,32,0.5)", marginLeft: "auto" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS NAVIGATOR */}
      <section className="py-16 px-6" id="benefits">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4 uppercase"
              style={{ background: "rgba(57,232,142,0.15)", color: "#39e88e", border: "1px solid rgba(57,232,142,0.3)" }}>
              🎓 Навигатор льгот
            </div>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-4" style={{ color: "#e8f0fe" }}>
              УЗНАЙ ГДЕ ТВОЙ <span style={{ color: "#39e88e" }}>БВИ</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(232,240,254,0.55)" }}>
              Введи дипломы и баллы ЕГЭ — система мгновенно покажет вузы, где ты проходишь без вступительных испытаний
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-3xl card-glass mb-6" style={{ border: "1px solid rgba(57,232,142,0.2)" }}>
              <div className="text-sm font-semibold mb-4" style={{ color: "rgba(232,240,254,0.6)" }}>Твои данные:</div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: "rgba(57,232,142,0.8)" }}>
                    Дипломы олимпиад
                  </label>
                  <input type="text" placeholder="Например: Ломоносов (призёр), Высшая проба (победитель)"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(57,232,142,0.25)", color: "#e8f0fe", fontFamily: "'Golos Text', sans-serif" }} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: "rgba(232,240,254,0.5)" }}>
                      Баллы ЕГЭ
                    </label>
                    <input type="number" placeholder="85" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#e8f0fe", fontFamily: "'Golos Text', sans-serif" }} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: "rgba(232,240,254,0.5)" }}>
                      Направление
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "#0e1520", border: "1px solid rgba(255,255,255,0.1)", color: "#e8f0fe", fontFamily: "'Golos Text', sans-serif" }}>
                      <option>Математика</option>
                      <option>Физика</option>
                      <option>История</option>
                      <option>Экономика</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                className="w-full mt-5 py-3 rounded-xl font-oswald font-semibold tracking-wide text-sm transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #39e88e, #16a34a)", color: "#000" }}>
                🎯 Рассчитать мои шансы на БВИ
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["МГУ", "ВШЭ", "РЭУ", "РУДН", "СПбГУ", "МФТИ"].map((uni) => (
                <div key={uni} className="p-3 rounded-xl text-center text-sm font-semibold card-glass transition-all hover:scale-105 cursor-pointer"
                  style={{ color: "#e8f0fe", border: "1px solid rgba(57,232,142,0.2)" }}>
                  {uni}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RATING */}
      <section className="py-16 px-6" id="rating">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4 uppercase"
                style={{ background: "rgba(236,72,153,0.15)", color: "#ec4899", border: "1px solid rgba(236,72,153,0.3)" }}>
                🏆 Рейтинг Взлёта
              </div>
              <h2 className="font-oswald font-bold text-4xl mb-4" style={{ color: "#e8f0fe" }}>
                ЗАРАБАТЫВАЙ<br /><span style={{ color: "#ec4899" }}>ПЛЮШКИ</span>
              </h2>
              <p className="text-base mb-6" style={{ color: "rgba(232,240,254,0.6)" }}>
                Решай тесты, помогай другим, проходи олимпиады — зарабатывай баллы «Взлёта» и получай реальные призы.
              </p>
              <div className="space-y-3">
                {[
                  { prize: "🥇 1–3 место", reward: "Мерч + консультация юриста", color: "#ffd700" },
                  { prize: "🥈 4–6 место", reward: "Бесплатный курс Умскул", color: "#c0c0c0" },
                  { prize: "🥉 7–10 место", reward: "Скидка 30% в онлайн-школах", color: "#cd7f32" },
                  { prize: "⭐ Карьера", reward: "В кадровый резерв Молодёжной палаты", color: "#a855f7" },
                ].map((p) => (
                  <div key={p.prize} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <span className="font-semibold text-sm w-28 flex-shrink-0" style={{ color: p.color }}>{p.prize}</span>
                    <span className="text-sm" style={{ color: "rgba(232,240,254,0.65)" }}>{p.reward}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl card-glass" style={{ border: "1px solid rgba(236,72,153,0.2)" }}>
              <div className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: "rgba(232,240,254,0.4)" }}>
                Топ участников этого месяца
              </div>
              <div className="space-y-3">
                {topUsers.map((user) => (
                  <div key={user.rank} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center font-oswald font-bold text-sm flex-shrink-0"
                      style={{
                        background: user.rank <= 3 ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.06)",
                        color: user.rank === 1 ? "#ffd700" : user.rank === 2 ? "#c0c0c0" : user.rank === 3 ? "#cd7f32" : "rgba(232,240,254,0.5)",
                        border: user.rank <= 3 ? "1px solid rgba(255,215,0,0.3)" : "1px solid rgba(255,255,255,0.1)",
                      }}>
                      {user.rank}
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-oswald font-bold"
                      style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)", color: "#fff", fontSize: "14px" }}>
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate" style={{ color: "#e8f0fe" }}>{user.name}</div>
                      <div className="text-xs truncate" style={{ color: "rgba(232,240,254,0.4)" }}>{user.prize}</div>
                    </div>
                    <div className="font-oswald font-bold text-sm flex-shrink-0" style={{ color: "#ec4899" }}>
                      {user.score.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl text-center"
                style={{ background: "rgba(236,72,153,0.07)", border: "1px solid rgba(236,72,153,0.2)" }}>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(236,72,153,0.7)" }}>Твоё место</div>
                <div className="font-oswald font-bold text-2xl" style={{ color: "#ec4899" }}>127</div>
                <div className="text-xs mt-1" style={{ color: "rgba(232,240,254,0.4)" }}>Войди и начни зарабатывать баллы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: "rgba(232,240,254,0.3)" }}>
              При поддержке и партнёрстве
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div key={p} className="px-6 py-3 rounded-xl font-semibold text-sm card-glass transition-all hover:scale-105 cursor-pointer"
                style={{ color: "rgba(232,240,254,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {p}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xs" style={{ color: "rgba(232,240,254,0.3)" }}>
              Рекомендован к интеграции в нацпроект «Молодёжь и дети»
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 md:p-16 rounded-3xl relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(0,200,248,0.08) 0%, rgba(14,21,32,0.9) 40%, rgba(255,122,32,0.08) 100%)", border: "1px solid rgba(0,200,248,0.2)" }}>
            <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-oswald font-bold text-4xl md:text-6xl mb-4" style={{ color: "#e8f0fe" }}>
                ВРЕМЯ <span className="neon-text-blue">ВЗЛЕТАТЬ</span>
              </h2>
              <p className="text-lg mb-10" style={{ color: "rgba(232,240,254,0.6)" }}>
                Зарегистрируйся и получи персональный план подготовки к олимпиадам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-10 py-4 rounded-2xl font-oswald font-bold text-xl tracking-wide transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, var(--neon-blue), #0090c8)", color: "#000", boxShadow: "0 0 40px rgba(0,200,248,0.5)" }}>
                  🚀 Начать бесплатно
                </button>
                <button
                  className="px-10 py-4 rounded-2xl font-oswald font-bold text-xl tracking-wide transition-all hover:scale-105"
                  style={{ border: "1px solid rgba(255,122,32,0.5)", color: "var(--neon-orange)", background: "rgba(255,122,32,0.05)" }}>
                  ⚖️ Нужна защита прав?
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t" style={{ borderColor: "var(--card-border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-oswald font-bold text-xs"
              style={{ background: "linear-gradient(135deg, var(--neon-blue), var(--neon-orange))", color: "#000" }}>
              ВЗ
            </div>
            <span className="font-oswald font-bold neon-text-blue">ВЗЛЁТ.РФ</span>
          </div>
          <div className="flex gap-6 text-sm text-center" style={{ color: "rgba(232,240,254,0.35)" }}>
            <span>© 2026 Взлёт.рф</span>
            <span>При поддержке К. А. Горячевой</span>
            <span>Программа «Я в деле»</span>
          </div>
          <div className="flex items-center gap-3">
            {["🛡️ Безопасность", "📜 Политика"].map((item) => (
              <span key={item} className="text-xs px-3 py-1.5 rounded-full cursor-pointer hover:opacity-70 transition-opacity"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(232,240,254,0.4)", border: "1px solid rgba(255,255,255,0.07)" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
