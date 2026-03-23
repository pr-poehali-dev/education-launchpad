import { useState } from "react";
import Icon from "@/components/ui/icon";

const V = "#5b4fff";
const O = "#ff6b2b";

const services = [
  { id: "calendar", emoji: "📅", title: "Олимп-Календарь", subtitle: "Умный планировщик",
    desc: "Персональный график всех перечневых олимпиад. Не пропусти регистрацию — система предупредит.", color: V, bg: "#f0eeff", badge: "🔔 Push", tag: "500+ олимпиад", link: "#calendar" },
  { id: "lawyer", emoji: "⚖️", title: "Олимп-Адвокат", subtitle: "Юридический щит",
    desc: "Первый в России конструктор защиты прав абитуриента. Жалоба по законам РФ за 2 минуты.", color: O, bg: "#fff2ec", badge: "⚡ Новинка", tag: "Юристы ВШП", link: "#lawyer" },
  { id: "benefits", emoji: "🎓", title: "Навигатор льгот", subtitle: "БВИ и 100 баллов",
    desc: "Введи дипломы и баллы ЕГЭ — система покажет, где ты проходишь без вступительных.", color: "#00c97d", bg: "#edfff6", badge: "🎯 БВИ", tag: "МГУ, ВШЭ, РЭУ…", link: "#benefits" },
  { id: "prep", emoji: "🚀", title: "Подготовка", subtitle: "Агрегатор ресурсов",
    desc: "Лучшие бесплатные курсы и фонды. Подготовка уровня МГУ из любого города.", color: "#8b5cf6", bg: "#f5f0ff", badge: "📚 Бесплатно", tag: "Умскул и др.", link: "#prep" },
  { id: "mentors", emoji: "🤝", title: "Наставничество", subtitle: "Добро.рф",
    desc: "Консультации от студентов-олимпиадников топовых вузов. Призёры прошлых лет помогут.", color: "#f59e0b", bg: "#fffbeb", badge: "🌟 Волонтёры", tag: "Добро.рф", link: "#mentors" },
  { id: "profile", emoji: "👤", title: "Профиль", subtitle: "Личный кабинет",
    desc: "Все твои олимпиады, документы и достижения. Следи за прогрессом к поступлению.", color: "#3b82f6", bg: "#eff6ff", badge: "📊 Статистика", tag: "Мой прогресс", link: "#profile" },
  { id: "rating", emoji: "🏆", title: "Рейтинг", subtitle: "Плюшки за активность",
    desc: "Зарабатывай баллы «Взлёта» за активность. Топ-10 — мерч, консультации и скидки.", color: "#ec4899", bg: "#fdf2f8", badge: "🎁 Призы", tag: "Призы каждый месяц", link: "#rating" },
  { id: "community", emoji: "💬", title: "Сообщество", subtitle: "Форум олимпиадников",
    desc: "Закрытый клуб для общения. Обменивайся опытом — не надо быть одному в этом пути.", color: "#14b8a6", bg: "#f0fdf9", badge: "🔥 Живое", tag: "Закрытый клуб", link: "#community" },
];

const stats = [
  { value: "500+", label: "Олимпиад в базе", color: V },
  { value: "12к+", label: "Абитуриентов", color: O },
  { value: "87%", label: "Поступили на бюджет", color: "#00c97d" },
  { value: "2 мин", label: "Жалоба в вуз", color: "#8b5cf6" },
];

const olympiads = [
  { name: "Ломоносов", subject: "Математика", date: "15 апр", days: 23, color: V },
  { name: "Высшая проба", subject: "Физика", date: "22 апр", days: 30, color: "#00c97d" },
  { name: "ПВГ", subject: "История", date: "5 мая", days: 43, color: O },
  { name: "Олимп НИУ ВШЭ", subject: "Экономика", date: "12 мая", days: 50, color: "#8b5cf6" },
];

const topUsers = [
  { rank: 1, name: "Александра К.", score: 2840, prize: "Мерч + консультация", avatar: "А" },
  { rank: 2, name: "Михаил Р.", score: 2610, prize: "Курс Умскул", avatar: "М" },
  { rank: 3, name: "Дарья С.", score: 2390, prize: "Мерч Взлёт.рф", avatar: "Д" },
  { rank: 4, name: "Иван П.", score: 1950, prize: "Скидка 30%", avatar: "И" },
  { rank: 5, name: "Полина В.", score: 1720, prize: "Скидка 20%", avatar: "П" },
];

const partners = ["Госдума", "Росмолодёжь", "«Я в деле»", "ВШП", "Совет ректоров", "Добро.рф"];

export default function Index() {
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "var(--bg-main)", color: "var(--text-main)", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(18px)", borderBottom: "1.5px solid #e8e5ff", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
        className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-oswald font-bold text-sm text-white animate-glow"
            style={{ background: `linear-gradient(135deg, ${V}, ${O})` }}>ВЗ</div>
          <span className="font-oswald font-bold text-lg tracking-wide" style={{ color: V }}>ВЗЛЁТ.РФ</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {[["Календарь","#calendar"],["Адвокат","#lawyer"],["Льготы","#benefits"],["Рейтинг","#rating"]].map(([l,h])=>(
            <a key={h} href={h} style={{ color: "var(--text-muted)", textDecoration:"none" }}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-purple-50"
              onMouseEnter={e=>(e.currentTarget.style.color=V)} onMouseLeave={e=>(e.currentTarget.style.color="var(--text-muted)")}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={()=>setNotifEnabled(!notifEnabled)}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${V}, #8b5cf6)` }}>
            <Icon name="Bell" size={14}/>{notifEnabled?"✓ Подключено":"Уведомления"}
          </button>
          <button className="flex md:hidden items-center justify-center w-9 h-9 rounded-xl"
            style={{ border:"1.5px solid #e8e5ff", color:"var(--text-muted)" }} onClick={()=>setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen?"X":"Menu"} size={18}/>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6 gap-2"
          style={{ background:"rgba(245,244,255,0.98)", backdropFilter:"blur(20px)" }}>
          {[["📅 Календарь","#calendar"],["⚖️ Адвокат","#lawyer"],["🎓 Льготы","#benefits"],
            ["🚀 Подготовка","#prep"],["🤝 Наставники","#mentors"],["🏆 Рейтинг","#rating"],["💬 Сообщество","#community"]
          ].map(([l,h])=>(
            <a key={h} href={h} className="text-xl font-oswald py-3 border-b"
              style={{ borderColor:"#e8e5ff", color:"var(--text-main)", textDecoration:"none" }}
              onClick={()=>setMenuOpen(false)}>{l}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-light pointer-events-none"/>
        {/* soft blobs */}
        <div className="absolute top-20 left-0 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle, rgba(91,79,255,0.10) 0%, transparent 70%)", filter:"blur(60px)" }}/>
        <div className="absolute bottom-10 right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle, rgba(255,107,43,0.10) 0%, transparent 70%)", filter:"blur(60px)" }}/>

        {/* orbits */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none hidden lg:block">
          <div className="orbit-1 absolute">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-lg"
              style={{ background:"#f0eeff", border:`1.5px solid #c4bcff`, marginLeft:"-22px", marginTop:"-22px" }}>📅</div>
          </div>
          <div className="orbit-2 absolute" style={{ animationDelay:"-3s" }}>
            <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-lg shadow-lg"
              style={{ background:"#fff2ec", border:`1.5px solid #ffd0b8`, marginLeft:"-18px", marginTop:"-18px" }}>⚖️</div>
          </div>
          <div className="orbit-3 absolute" style={{ animationDelay:"-8s" }}>
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-lg"
              style={{ background:"#edfff6", border:`1.5px solid #86efca`, marginLeft:"-20px", marginTop:"-20px" }}>🎓</div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background:"rgba(91,79,255,0.08)", border:`1.5px solid rgba(91,79,255,0.2)`, color:V }}>
            <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background:V }}/>
            <span className="text-sm font-semibold">При поддержке Госдумы и Росмолодёжи</span>
          </div>

          <h1 className="stagger-2 font-oswald font-bold leading-none mb-6"
            style={{ fontSize:"clamp(3rem,10vw,7rem)", letterSpacing:"-0.02em", color:"var(--text-main)" }}>
            ТВО<span style={{ color:V }}>Й</span><br/>
            <span style={{ color:O }}>ВЗЛЁТ</span><br/>
            <span style={{ fontSize:"0.52em", fontWeight:400, color:"var(--text-muted)" }}>В МИР ОЛИМПИАД</span>
          </h1>

          <p className="stagger-3 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color:"var(--text-muted)", fontFamily:"'Golos Text',sans-serif" }}>
            Единая экосистема от выбора олимпиады до приказа о зачислении на бюджет.
            Юридическая защита, навигатор льгот и наставники-призёры.
          </p>

          <div className="stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>setNotifEnabled(true)}
              className="px-8 py-4 rounded-2xl font-oswald font-semibold text-lg tracking-wide text-white transition-all hover:scale-105"
              style={{ background:`linear-gradient(135deg, ${V}, #8b5cf6)`, boxShadow:"0 8px 32px rgba(91,79,255,0.35)" }}>
              🚀 Начать бесплатно
            </button>
            <a href="#calendar"
              className="px-8 py-4 rounded-2xl font-oswald font-semibold text-lg tracking-wide transition-all hover:scale-105 flex items-center justify-center"
              style={{ border:`1.5px solid rgba(91,79,255,0.3)`, color:V, background:"rgba(91,79,255,0.06)", textDecoration:"none" }}>
              📅 Посмотреть олимпиады
            </a>
          </div>

          {notifEnabled && (
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl animate-slide-up"
              style={{ background:"rgba(0,201,125,0.1)", border:"1.5px solid rgba(0,201,125,0.3)", color:"#00a864" }}>
              <Icon name="CheckCircle" size={18}/>
              <span className="text-sm font-semibold">Уведомления подключены! Больше не пропустишь регистрацию.</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
          <span className="text-xs" style={{ color:"rgba(107,107,138,0.5)" }}>скролл</span>
          <Icon name="ChevronDown" size={20} style={{ color:"rgba(91,79,255,0.4)" }}/>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s,i)=>(
            <div key={i} className="card-white text-center p-6">
              <div className="font-oswald font-bold text-4xl mb-1" style={{ color:s.color }}>{s.value}</div>
              <div className="text-sm" style={{ color:"var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-14 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 uppercase"
              style={{ background:"rgba(139,92,246,0.1)", color:"#8b5cf6", border:"1.5px solid rgba(139,92,246,0.2)" }}>
              Экосистема
            </div>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-4" style={{ color:"var(--text-main)" }}>
              8 СЕРВИСОВ — ОДНА ПЛАТФОРМА
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color:"var(--text-muted)" }}>
              Всё что нужно абитуриенту-олимпиаднику собрано в едином пространстве
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s,i)=>(
              <a key={s.id} href={s.link}
                className={`block p-5 card-white hover-card-lift stagger-${Math.min(i+1,8)} group`}
                style={{ textDecoration:"none" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background:s.bg }}>
                    {s.emoji}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-semibold"
                    style={{ background:s.bg, color:s.color }}>
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-oswald font-bold text-lg mb-1 transition-colors" style={{ color:"var(--text-main)" }}>
                  {s.title}
                </h3>
                <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color:s.color }}>
                  {s.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color:"var(--text-muted)" }}>
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full"
                    style={{ background:"#f5f4ff", color:"var(--text-muted)" }}>{s.tag}</span>
                  <Icon name="ArrowRight" size={16} style={{ color:s.color }}/>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR SECTION */}
      <section className="py-14 px-6" id="calendar">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 uppercase"
                style={{ background:"rgba(91,79,255,0.1)", color:V, border:`1.5px solid rgba(91,79,255,0.2)` }}>
                📅 Олимп-Календарь
              </div>
              <h2 className="font-oswald font-bold text-4xl mb-4" style={{ color:"var(--text-main)" }}>
                НЕ ПРОЗЕВАЙ<br/><span style={{ color:V }}>РЕГИСТРАЦИЮ</span>
              </h2>
              <p className="text-base mb-6" style={{ color:"var(--text-muted)" }}>
                Все перечневые олимпиады в одном месте. Ломоносов, Высшая проба, ПВГ и сотни других — с push-уведомлениями о каждом этапе.
              </p>
              <ul className="space-y-3 mb-8">
                {["Уведомление за 7 дней до регистрации","Напоминание о загрузке работ","Дедлайн подачи документов","Результаты и апелляция"].map(item=>(
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color:"var(--text-muted)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background:"rgba(91,79,255,0.12)" }}>
                      <Icon name="Check" size={11} style={{ color:V }}/>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={()=>setNotifEnabled(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                style={{ background:`linear-gradient(135deg, ${V}, #8b5cf6)` }}>
                <Icon name="Bell" size={16}/>Подключить уведомления
              </button>
            </div>

            <div className="space-y-3">
              <div className="card-white p-5">
                <div className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2"
                  style={{ color:"var(--text-muted)" }}>
                  <Icon name="Clock" size={12}/>Ближайшие дедлайны
                </div>
                {olympiads.map((ol,i)=>(
                  <div key={i} className="flex items-center justify-between py-3 border-b last:border-0"
                    style={{ borderColor:"#f0eeff" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background:ol.color }}/>
                      <div>
                        <div className="font-semibold text-sm" style={{ color:"var(--text-main)" }}>{ol.name}</div>
                        <div className="text-xs" style={{ color:"var(--text-muted)" }}>{ol.subject}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-oswald font-bold" style={{ color:ol.color }}>{ol.date}</div>
                      <div className="text-xs" style={{ color:"var(--text-muted)" }}>через {ol.days} дн.</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl flex items-center gap-3"
                style={{ background:"rgba(91,79,255,0.07)", border:`1.5px solid rgba(91,79,255,0.18)` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:"rgba(91,79,255,0.12)" }}>
                  <Icon name="Bell" size={18} style={{ color:V }}/>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color:"var(--text-main)" }}>Push-уведомления</div>
                  <div className="text-xs" style={{ color:"var(--text-muted)" }}>Напоминание за 7 дней и в день дедлайна</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAWYER */}
      <section className="py-14 px-6" id="lawyer">
        <div className="max-w-6xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
            style={{ background:"linear-gradient(135deg, #fff8f4 0%, #fff 60%)", border:`1.5px solid #ffd0b8` }}>
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background:`radial-gradient(circle, rgba(255,107,43,0.12) 0%, transparent 70%)` }}/>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 uppercase"
                  style={{ background:"rgba(255,107,43,0.1)", color:O, border:`1.5px solid rgba(255,107,43,0.25)` }}>
                  ⚖️ Новинка в России
                </div>
                <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-4" style={{ color:"var(--text-main)" }}>
                  ОЛИМП-<br/><span style={{ color:O }}>АДВОКАТ</span>
                </h2>
                <p className="text-base mb-6" style={{ color:"var(--text-muted)" }}>
                  Вуз нарушает правила? Завалили на апелляции? Конструктор сформирует готовую жалобу по законам РФ за 2 минуты.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[{val:"2 мин",label:"Жалоба готова"},{val:"100%",label:"Законно"},{val:"ВШП",label:"Юристы"}].map(item=>(
                    <div key={item.val} className="text-center p-3 rounded-xl"
                      style={{ background:"rgba(255,107,43,0.08)", border:`1px solid rgba(255,107,43,0.2)` }}>
                      <div className="font-oswald font-bold text-xl" style={{ color:O }}>{item.val}</div>
                      <div className="text-xs" style={{ color:"var(--text-muted)" }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                  style={{ background:`linear-gradient(135deg, ${O}, #ff9f6b)` }}>
                  <Icon name="FileText" size={16}/>Составить жалобу
                </button>
              </div>
              <div className="space-y-3">
                {["Нарушение сроков публикации результатов","Неправомерный отказ в апелляции","Дискриминация при зачислении","Нарушение правил приёма"].map(issue=>(
                  <div key={issue} className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all hover:scale-[1.02]"
                    style={{ background:"#fff2ec", border:`1px solid rgba(255,107,43,0.2)` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background:"rgba(255,107,43,0.12)" }}>
                      <Icon name="AlertTriangle" size={14} style={{ color:O }}/>
                    </div>
                    <span className="text-sm" style={{ color:"var(--text-main)" }}>{issue}</span>
                    <Icon name="ChevronRight" size={14} style={{ color:`rgba(255,107,43,0.5)`, marginLeft:"auto" }}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-14 px-6" id="benefits">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 uppercase"
              style={{ background:"rgba(0,201,125,0.1)", color:"#00a864", border:"1.5px solid rgba(0,201,125,0.25)" }}>
              🎓 Навигатор льгот
            </div>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl mb-4" style={{ color:"var(--text-main)" }}>
              УЗНАЙ ГДЕ ТВОЙ <span style={{ color:"#00c97d" }}>БВИ</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color:"var(--text-muted)" }}>
              Введи дипломы и баллы ЕГЭ — система мгновенно покажет вузы, где проходишь без вступительных
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card-white p-6 mb-5" style={{ border:"1.5px solid rgba(0,201,125,0.2)" }}>
              <div className="text-sm font-semibold mb-4" style={{ color:"var(--text-muted)" }}>Твои данные:</div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color:"#00a864" }}>
                    Дипломы олимпиад
                  </label>
                  <input type="text" placeholder="Например: Ломоносов (призёр), Высшая проба (победитель)"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background:"#f5fdf9", border:"1.5px solid rgba(0,201,125,0.2)", color:"var(--text-main)", fontFamily:"'Golos Text',sans-serif" }}/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color:"var(--text-muted)" }}>Баллы ЕГЭ</label>
                    <input type="number" placeholder="85" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background:"#fafafa", border:"1.5px solid #e8e5ff", color:"var(--text-main)", fontFamily:"'Golos Text',sans-serif" }}/>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color:"var(--text-muted)" }}>Направление</label>
                    <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background:"#fafafa", border:"1.5px solid #e8e5ff", color:"var(--text-main)", fontFamily:"'Golos Text',sans-serif" }}>
                      <option>Математика</option><option>Физика</option><option>История</option><option>Экономика</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="w-full mt-5 py-3 rounded-xl font-oswald font-semibold tracking-wide text-sm text-white transition-all hover:scale-[1.02]"
                style={{ background:"linear-gradient(135deg, #00c97d, #059669)" }}>
                🎯 Рассчитать мои шансы на БВИ
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["МГУ","ВШЭ","РЭУ","РУДН","СПбГУ","МФТИ"].map(uni=>(
                <div key={uni} className="card-white p-3 rounded-xl text-center text-sm font-bold transition-all hover:scale-105 cursor-pointer"
                  style={{ color:V }}>
                  {uni}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RATING */}
      <section className="py-14 px-6" id="rating">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4 uppercase"
                style={{ background:"rgba(236,72,153,0.1)", color:"#ec4899", border:"1.5px solid rgba(236,72,153,0.2)" }}>
                🏆 Рейтинг Взлёта
              </div>
              <h2 className="font-oswald font-bold text-4xl mb-4" style={{ color:"var(--text-main)" }}>
                ЗАРАБАТЫВАЙ<br/><span style={{ color:"#ec4899" }}>ПЛЮШКИ</span>
              </h2>
              <p className="text-base mb-6" style={{ color:"var(--text-muted)" }}>
                Решай тесты, помогай другим, проходи олимпиады — зарабатывай баллы и получай реальные призы каждый месяц.
              </p>
              <div className="space-y-3">
                {[
                  {prize:"🥇 1–3 место",reward:"Мерч + консультация юриста",color:"#d97706"},
                  {prize:"🥈 4–6 место",reward:"Бесплатный курс Умскул",color:"#6b7280"},
                  {prize:"🥉 7–10 место",reward:"Скидка 30% в онлайн-школах",color:"#92400e"},
                  {prize:"⭐ Карьера",reward:"В кадровый резерв Молодёжной палаты",color:"#8b5cf6"},
                ].map(p=>(
                  <div key={p.prize} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background:"#fafafa", border:"1.5px solid #f0eeff" }}>
                    <span className="font-bold text-sm w-28 flex-shrink-0" style={{ color:p.color }}>{p.prize}</span>
                    <span className="text-sm" style={{ color:"var(--text-muted)" }}>{p.reward}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-white p-6" style={{ border:"1.5px solid rgba(236,72,153,0.18)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color:"var(--text-muted)" }}>
                Топ участников этого месяца
              </div>
              <div className="space-y-3">
                {topUsers.map(user=>(
                  <div key={user.rank} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center font-oswald font-bold text-sm flex-shrink-0"
                      style={{
                        background: user.rank<=3?"rgba(251,191,36,0.15)":"#f5f4ff",
                        color: user.rank===1?"#d97706":user.rank===2?"#6b7280":user.rank===3?"#92400e":"var(--text-muted)",
                        border: user.rank<=3?"1.5px solid rgba(251,191,36,0.35)":"1.5px solid #e8e5ff",
                      }}>
                      {user.rank}
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-oswald font-bold text-white text-sm flex-shrink-0"
                      style={{ background:"linear-gradient(135deg, #ec4899, #8b5cf6)" }}>
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate" style={{ color:"var(--text-main)" }}>{user.name}</div>
                      <div className="text-xs truncate" style={{ color:"var(--text-muted)" }}>{user.prize}</div>
                    </div>
                    <div className="font-oswald font-bold text-sm flex-shrink-0" style={{ color:"#ec4899" }}>
                      {user.score.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl text-center"
                style={{ background:"rgba(236,72,153,0.06)", border:"1.5px solid rgba(236,72,153,0.15)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color:"#ec4899" }}>Твоё место</div>
                <div className="font-oswald font-bold text-2xl" style={{ color:"#ec4899" }}>127</div>
                <div className="text-xs mt-1" style={{ color:"var(--text-muted)" }}>Войди и начни зарабатывать баллы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest font-bold mb-6" style={{ color:"rgba(107,107,138,0.5)" }}>
            При поддержке и партнёрстве
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map(p=>(
              <div key={p} className="card-white px-6 py-3 text-sm font-semibold transition-all hover:scale-105 cursor-pointer"
                style={{ color:"var(--text-muted)" }}>
                {p}
              </div>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ color:"rgba(107,107,138,0.45)" }}>
            Рекомендован к интеграции в нацпроект «Молодёжь и дети»
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 md:p-16 rounded-3xl relative overflow-hidden"
            style={{ background:`linear-gradient(135deg, rgba(91,79,255,0.07) 0%, #fff 40%, rgba(255,107,43,0.07) 100%)`, border:`1.5px solid #e8e5ff` }}>
            <div className="absolute inset-0 grid-light opacity-50 pointer-events-none"/>
            <div className="relative z-10">
              <h2 className="font-oswald font-bold text-4xl md:text-6xl mb-4" style={{ color:"var(--text-main)" }}>
                ВРЕМЯ <span style={{ color:V }}>ВЗЛЕТАТЬ</span>
              </h2>
              <p className="text-lg mb-10" style={{ color:"var(--text-muted)" }}>
                Зарегистрируйся и получи персональный план подготовки к олимпиадам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 rounded-2xl font-oswald font-bold text-xl tracking-wide text-white transition-all hover:scale-105"
                  style={{ background:`linear-gradient(135deg, ${V}, #8b5cf6)`, boxShadow:"0 8px 40px rgba(91,79,255,0.35)" }}>
                  🚀 Начать бесплатно
                </button>
                <button className="px-10 py-4 rounded-2xl font-oswald font-bold text-xl tracking-wide transition-all hover:scale-105"
                  style={{ border:`1.5px solid rgba(255,107,43,0.4)`, color:O, background:"rgba(255,107,43,0.05)" }}>
                  ⚖️ Нужна защита прав?
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t" style={{ borderColor:"#e8e5ff" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-oswald font-bold text-xs text-white"
              style={{ background:`linear-gradient(135deg, ${V}, ${O})` }}>ВЗ</div>
            <span className="font-oswald font-bold" style={{ color:V }}>ВЗЛЁТ.РФ</span>
          </div>
          <div className="flex gap-6 text-sm text-center" style={{ color:"var(--text-muted)" }}>
            <span>© 2026 Взлёт.рф</span>
            <span>При поддержке К. А. Горячевой</span>
            <span>Программа «Я в деле»</span>
          </div>
          <div className="flex items-center gap-3">
            {["🛡️ Безопасность","📜 Политика"].map(item=>(
              <span key={item} className="text-xs px-3 py-1.5 rounded-full cursor-pointer hover:opacity-70 transition-opacity"
                style={{ background:"#f5f4ff", color:"var(--text-muted)", border:"1px solid #e8e5ff" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
