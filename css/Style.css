/* ==========================================
   MIMI ARTS — Pink Luxury Art Gallery
   ========================================== */

:root {
  --pink-50:  #fff5f8;
  --pink-100: #ffe0eb;
  --pink-200: #ffc2d4;
  --pink-300: #ff9ab8;
  --pink-400: #f4658c;
  --pink-500: #e8376a;
  --pink-600: #c41f52;
  --pink-700: #9b1540;
  --rose-50:  #fdf2f6;
  --rose-100: #fce4ed;
  --dusty:    #c9849b;
  --cream:    #fef9f6;
  --dark:     #1a0d12;
  --dark-2:   #2d1420;
  --text:     #3d1a26;
  --text-2:   #7a4055;
  --text-3:   #a06078;

  --ff-display: 'Playfair Display', Georgia, serif;
  --ff-body: 'Cormorant Garamond', Georgia, serif;
  --ff-ui: 'DM Sans', sans-serif;

  --shadow-sm: 0 2px 12px rgba(200, 60, 100, 0.08);
  --shadow-md: 0 8px 32px rgba(200, 60, 100, 0.14);
  --shadow-lg: 0 20px 60px rgba(200, 60, 100, 0.18);
  --radius: 4px;
  --radius-lg: 12px;
  --radius-xl: 20px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--ff-body);
  background: var(--cream);
  color: var(--text);
  overflow-x: hidden;
}

/* ---- NAV ---- */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 4vw;
  background: rgba(254,249,246,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.nav.scrolled {
  border-color: var(--pink-200);
  box-shadow: var(--shadow-sm);
}
.nav-logo {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--ff-display); font-size: 1.25rem; font-weight: 700;
  color: var(--pink-600); text-decoration: none;
}
.logo-mark { font-size: 1rem; color: var(--pink-400); }
.nav-links {
  display: flex; align-items: center; gap: 2rem;
  list-style: none;
}
.nav-links a {
  font-family: var(--ff-ui); font-size: 0.875rem; font-weight: 500; letter-spacing: 0.04em;
  color: var(--text-2); text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--pink-500); }
.nav-cta {
  background: var(--pink-500) !important;
  color: #fff !important;
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  transition: background 0.2s, transform 0.15s !important;
}
.nav-cta:hover { background: var(--pink-600) !important; transform: translateY(-1px); }
.hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
.hamburger span { display: block; width: 22px; height: 2px; background: var(--text); margin: 5px 0; border-radius: 2px; transition: all 0.3s; }

/* mobile menu */
.mobile-menu {
  display: none; position: fixed; top: 64px; left: 0; right: 0; z-index: 99;
  background: var(--cream); border-bottom: 1px solid var(--pink-200);
  padding: 1rem 4vw; flex-direction: column; gap: 1rem;
}
.mobile-menu.open { display: flex; }
.mobile-menu a { font-family: var(--ff-ui); font-size: 1rem; color: var(--text-2); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--pink-100); }

/* ---- BUTTONS ---- */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  font-family: var(--ff-ui); font-size: 0.875rem; font-weight: 500; letter-spacing: 0.06em;
  padding: 0.75rem 1.75rem; border-radius: 2rem;
  cursor: pointer; text-decoration: none; border: none;
  transition: transform 0.15s, box-shadow 0.2s;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary {
  background: var(--pink-500); color: #fff;
  box-shadow: 0 4px 20px rgba(232,55,106,0.35);
}
.btn-primary:hover { background: var(--pink-600); box-shadow: 0 6px 28px rgba(196,31,82,0.4); }
.btn-ghost {
  background: transparent; color: var(--pink-600);
  border: 1.5px solid var(--pink-300);
}
.btn-ghost:hover { background: var(--pink-50); }
.btn-full { width: 100%; }

/* ---- HERO ---- */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  padding: 8rem 4vw 4rem;
  position: relative; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(135deg, #fff5f8 0%, #fce4ed 40%, #fdf2f6 100%);
}
.grain {
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.5;
}
.petal {
  position: absolute; border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
  opacity: 0.25;
}
.petal-1 { width: 500px; height: 500px; background: var(--pink-200); top: -100px; right: -100px; animation: float1 12s ease-in-out infinite; }
.petal-2 { width: 300px; height: 350px; background: var(--pink-300); bottom: -80px; left: 5%; animation: float2 10s ease-in-out infinite; }
.petal-3 { width: 200px; height: 220px; background: var(--pink-400); top: 30%; right: 30%; animation: float1 15s ease-in-out infinite reverse; }
.petal-4 { width: 150px; height: 160px; background: var(--pink-200); top: 10%; left: 40%; animation: float2 9s ease-in-out infinite; }
.petal-5 { width: 400px; height: 300px; background: var(--rose-100); bottom: 10%; right: 10%; animation: float1 13s ease-in-out infinite; }
@keyframes float1 { 0%,100% { transform: translate(0,0) rotate(0deg); } 33% { transform: translate(20px,-15px) rotate(5deg); } 66% { transform: translate(-10px,10px) rotate(-3deg); } }
@keyframes float2 { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(-20px,-20px) rotate(8deg); } }

.hero-content { position: relative; z-index: 1; max-width: 640px; }
.hero-label { font-family: var(--ff-ui); font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--pink-500); margin-bottom: 1.5rem; }
.hero-title {
  font-family: var(--ff-display); font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 700; line-height: 1.05; color: var(--dark);
  margin-bottom: 1.5rem;
}
.hero-title em { font-style: italic; color: var(--pink-500); }
.hero-sub { font-size: 1.2rem; font-weight: 300; color: var(--text-2); line-height: 1.7; margin-bottom: 2.5rem; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* hero badge */
.hero-badge {
  position: absolute; right: 8vw; bottom: 15%;
  z-index: 1;
}
.badge-ring { width: 130px; height: 130px; position: relative; animation: rotateBadge 20s linear infinite; }
.badge-svg { width: 100%; height: 100%; }
.badge-svg text { font-family: var(--ff-ui); font-size: 9px; fill: var(--pink-500); letter-spacing: 3px; }
.badge-center {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; color: var(--pink-400); animation: rotateBadge 20s linear infinite reverse;
}
@keyframes rotateBadge { to { transform: rotate(360deg); } }

.hero-scroll {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  font-family: var(--ff-ui); font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-3);
}
.scroll-line {
  width: 1px; height: 48px; background: linear-gradient(to bottom, var(--pink-400), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

/* ---- STATS ---- */
.stats {
  background: var(--pink-500);
  padding: 3rem 4vw;
}
.stats-inner {
  max-width: 900px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: 1rem;
}
.stat { text-align: center; }
.stat-num { font-family: var(--ff-display); font-size: 3rem; font-weight: 700; color: #fff; }
.stat-plus { font-family: var(--ff-display); font-size: 1.5rem; color: rgba(255,255,255,0.7); }
.stat p { font-family: var(--ff-ui); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75); margin-top: 4px; }
.stat-divider { width: 1px; height: 60px; background: rgba(255,255,255,0.3); }

/* ---- SECTION COMMON ---- */
.section-header { text-align: center; padding: 5rem 4vw 3rem; }
.section-label { font-family: var(--ff-ui); font-size: 0.78rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--pink-400); margin-bottom: 0.75rem; }
.section-title { font-family: var(--ff-display); font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; color: var(--dark); line-height: 1.15; }
.section-title em { font-style: italic; color: var(--pink-500); }
.section-sub { font-size: 1.1rem; color: var(--text-2); max-width: 520px; margin: 1rem auto 0; line-height: 1.7; }

/* ---- GALLERY ---- */
.gallery { padding: 0 4vw 6rem; }
.gallery-filters {
  display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;
  margin-bottom: 2.5rem;
}
.filter {
  font-family: var(--ff-ui); font-size: 0.82rem; font-weight: 500; letter-spacing: 0.08em;
  padding: 0.5rem 1.25rem; border-radius: 2rem; cursor: pointer;
  background: none; border: 1.5px solid var(--pink-200); color: var(--text-2);
  transition: all 0.2s;
}
.filter:hover, .filter.active {
  background: var(--pink-500); border-color: var(--pink-500); color: #fff;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px; margin: 0 auto;
}
.gallery-card {
  position: relative; cursor: pointer; border-radius: var(--radius-lg);
  overflow: hidden; background: #fff;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
}
.gallery-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.gallery-card.hidden { display: none; }

.card-art {
  width: 100%; aspect-ratio: 4/5;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(29,8,18,0.7) 0%, transparent 50%);
  opacity: 0; transition: opacity 0.3s;
  display: flex; align-items: flex-end; padding: 1.25rem;
}
.gallery-card:hover .card-overlay { opacity: 1; }
.card-overlay span {
  font-family: var(--ff-ui); font-size: 0.8rem; color: #fff; letter-spacing: 0.1em;
}
.card-meta {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--pink-100);
}
.card-meta h3 { font-family: var(--ff-display); font-size: 1.05rem; font-weight: 600; color: var(--dark); margin-bottom: 4px; }
.card-meta-row { display: flex; justify-content: space-between; align-items: center; }
.card-tag { font-family: var(--ff-ui); font-size: 0.75rem; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.1em; }
.card-price { font-family: var(--ff-display); font-size: 1rem; font-weight: 600; color: var(--pink-500); }
.sold-badge {
  position: absolute; top: 12px; right: 12px;
  background: var(--dark); color: #fff;
  font-family: var(--ff-ui); font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 4px 10px; border-radius: 2rem;
}

/* ---- COMMISSION ---- */
.commission { background: var(--rose-50); padding: 5rem 4vw; }
.commission-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;
}
.commission-text .section-title { text-align: left; font-size: clamp(2rem, 3.5vw, 3rem); }
.commission-text p { font-size: 1.1rem; color: var(--text-2); line-height: 1.8; margin: 1rem 0 2rem; }
.process-steps { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem; }
.step { display: flex; gap: 1.25rem; align-items: flex-start; }
.step-num { font-family: var(--ff-display); font-size: 2.5rem; font-weight: 700; color: var(--pink-200); line-height: 1; flex-shrink: 0; width: 44px; }
.step strong { font-family: var(--ff-ui); font-size: 0.95rem; font-weight: 500; color: var(--dark); display: block; margin-bottom: 4px; }
.step p { font-size: 0.95rem; color: var(--text-2); line-height: 1.6; margin: 0; }

.palette-card {
  background: #fff; border-radius: var(--radius-lg);
  padding: 1.5rem; box-shadow: var(--shadow-sm);
  margin-bottom: 1.25rem;
}
.palette-swatches { display: flex; gap: 8px; margin-bottom: 12px; }
.swatch { width: 40px; height: 40px; border-radius: 50%; }
.palette-label { font-family: var(--ff-ui); font-size: 0.82rem; color: var(--text-3); letter-spacing: 0.1em; }

.pricing-card {
  background: var(--dark); color: #fff;
  border-radius: var(--radius-lg); padding: 1.75rem;
}
.pricing-card h3 { font-family: var(--ff-display); font-size: 1.2rem; margin-bottom: 1.25rem; color: var(--pink-200); }
.price-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0.65rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);
  font-family: var(--ff-ui); font-size: 0.9rem; color: rgba(255,255,255,0.8);
}
.price-row:last-of-type { border-bottom: none; }
.price { color: var(--pink-300); font-weight: 500; }
.price-note { font-size: 0.75rem; color: rgba(255,255,255,0.45); margin-top: 1rem; font-style: italic; }

/* ---- ABOUT ---- */
.about { padding: 5rem 4vw; }
.about-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1.1fr; gap: 4rem; align-items: center;
}
.about-frame { position: relative; display: inline-block; }
.about-portrait {
  width: 280px; height: 360px; border-radius: var(--radius-xl);
  background: linear-gradient(135deg, var(--pink-200), var(--pink-400));
  display: flex; align-items: center; justify-content: center;
  box-shadow: var(--shadow-lg);
}
.portrait-initials {
  font-family: var(--ff-display); font-size: 8rem; font-weight: 700;
  color: rgba(255,255,255,0.5);
}
.about-years {
  position: absolute; bottom: -1.5rem; right: -1.5rem;
  width: 90px; height: 90px; border-radius: 50%;
  background: var(--pink-500); color: #fff;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: var(--shadow-md);
}
.years-num { font-family: var(--ff-display); font-size: 2rem; font-weight: 700; line-height: 1; }
.years-label { font-family: var(--ff-ui); font-size: 0.58rem; letter-spacing: 0.08em; text-align: center; opacity: 0.85; }
.about-quote {
  margin-top: 2.5rem;
  padding: 1.25rem 1.5rem;
  border-left: 3px solid var(--pink-300);
  background: var(--pink-50);
  border-radius: 0 var(--radius) var(--radius) 0;
}
.about-quote p { font-family: var(--ff-display); font-size: 1rem; font-style: italic; color: var(--text-2); line-height: 1.6; }

.about-text .section-title { text-align: left; font-size: clamp(2rem, 3vw, 2.8rem); margin-bottom: 1.5rem; }
.about-text p { font-size: 1.05rem; color: var(--text-2); line-height: 1.85; margin-bottom: 1rem; }
.skill-chips { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.5rem; }
.skill-chips span {
  font-family: var(--ff-ui); font-size: 0.78rem; letter-spacing: 0.08em;
  background: var(--pink-100); color: var(--pink-700);
  padding: 0.35rem 1rem; border-radius: 2rem;
}

/* ---- TESTIMONIALS ---- */
.testimonials { padding: 5rem 0 4rem; overflow: hidden; }
.testimonials-track {
  display: flex; gap: 1.5rem;
  padding: 1rem 4vw;
  overflow-x: auto; scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.testimonials-track::-webkit-scrollbar { display: none; }
.testimonial-card {
  min-width: 340px; max-width: 340px;
  scroll-snap-align: start;
  background: #fff; border-radius: var(--radius-lg);
  padding: 2rem; box-shadow: var(--shadow-sm);
  border: 1px solid var(--pink-100);
}
.stars { color: var(--pink-400); font-size: 1rem; letter-spacing: 2px; margin-bottom: 1rem; }
.testimonial-card blockquote { font-size: 1rem; font-style: italic; color: var(--text-2); line-height: 1.75; margin-bottom: 1.25rem; }
.reviewer { display: flex; align-items: center; gap: 12px; }
.reviewer-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--pink-200); display: flex; align-items: center; justify-content: center;
  font-family: var(--ff-display); font-weight: 700; font-size: 1rem; color: var(--pink-700);
}
.reviewer-name { font-family: var(--ff-ui); font-size: 0.9rem; font-weight: 500; color: var(--dark); }
.reviewer-loc { font-family: var(--ff-ui); font-size: 0.78rem; color: var(--text-3); }
.testimonials-dots { display: flex; justify-content: center; gap: 8px; margin-top: 1.5rem; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--pink-200); cursor: pointer; transition: background 0.2s, transform 0.2s; }
.dot.active { background: var(--pink-500); transform: scale(1.3); }

/* ---- CONTACT ---- */
.contact { background: var(--dark); padding: 5rem 4vw; }
.contact-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1.3fr; gap: 4rem; align-items: start;
}
.contact-text .section-label { color: var(--pink-300); }
.contact-text .section-title { text-align: left; color: #fff; font-size: clamp(2rem, 3vw, 2.8rem); }
.contact-text p { font-size: 1.05rem; color: rgba(255,255,255,0.6); line-height: 1.8; margin: 1.25rem 0; }
.contact-info { display: flex; flex-direction: column; gap: 8px; }
.contact-info a { font-family: var(--ff-ui); font-size: 0.95rem; color: var(--pink-300); text-decoration: none; }
.contact-info a:hover { color: var(--pink-200); }

.order-form { display: flex; flex-direction: column; gap: 1.25rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-family: var(--ff-ui); font-size: 0.82rem; letter-spacing: 0.08em; color: rgba(255,255,255,0.6); }
.form-group input, .form-group select, .form-group textarea {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--radius);
  padding: 0.75rem 1rem;
  font-family: var(--ff-ui); font-size: 0.95rem; color: #fff;
  transition: border-color 0.2s;
  outline: none;
}
.form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,0.3); }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--pink-400);
  background: rgba(255,255,255,0.1);
}
.form-group select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23f4658c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; }
.form-group select option { background: var(--dark-2); color: #fff; }
.form-check { flex-direction: row !important; align-items: center; gap: 10px !important; }
.form-check input { width: 16px; height: 16px; accent-color: var(--pink-400); }
.form-check label { font-size: 0.85rem !important; color: rgba(255,255,255,0.55) !important; }
.form-success {
  text-align: center; padding: 1rem;
  background: rgba(232,55,106,0.15); border: 1px solid var(--pink-500);
  border-radius: var(--radius); color: var(--pink-300);
  font-family: var(--ff-ui); font-size: 0.95rem;
}

/* ---- FOOTER ---- */
.footer { background: #0d0508; padding: 3rem 4vw 2rem; }
.footer-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
  text-align: center;
}
.footer-brand .logo-text { font-family: var(--ff-display); font-size: 1.5rem; font-weight: 700; color: var(--pink-400); }
.footer-brand p { font-size: 0.9rem; color: rgba(255,255,255,0.4); margin-top: 6px; line-height: 1.6; }
.footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center; }
.footer-links a { font-family: var(--ff-ui); font-size: 0.85rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: var(--pink-300); }
.footer-copy { font-family: var(--ff-ui); font-size: 0.78rem; color: rgba(255,255,255,0.25); }

/* ---- LIGHTBOX ---- */
.lb-overlay {
  display: none; position: fixed; inset: 0; z-index: 200;
  background: rgba(10,3,7,0.85);
}
.lb-overlay.open { display: block; }
.lightbox {
  display: none; position: fixed; z-index: 201;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: min(90vw, 800px);
  background: #fff; border-radius: var(--radius-xl);
  overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,0.4);
}
.lightbox.open { display: block; }
.lb-close {
  position: absolute; top: 1rem; right: 1rem; z-index: 10;
  background: rgba(255,255,255,0.9); border: none; cursor: pointer;
  width: 36px; height: 36px; border-radius: 50%;
  font-size: 1rem; color: var(--text); transition: background 0.2s;
}
.lb-close:hover { background: var(--pink-100); }
.lb-content { display: grid; grid-template-columns: 1fr 1fr; }
.lb-art { aspect-ratio: 1; }
.lb-info { padding: 2.5rem 2rem; display: flex; flex-direction: column; justify-content: center; gap: 1rem; }
.lb-info h3 { font-family: var(--ff-display); font-size: 1.4rem; color: var(--dark); }
.lb-info p { font-size: 0.95rem; color: var(--text-2); line-height: 1.7; }
#lbPrice { font-family: var(--ff-display); font-size: 1.3rem; color: var(--pink-500); }

/* ---- ANIMATIONS ON SCROLL ---- */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: none; }

/* ---- RESPONSIVE ---- */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: block; }
  .hero { padding: 6rem 4vw 8rem; }
  .hero-badge { display: none; }
  .hero-title { font-size: 3rem; }
  .stats-inner { gap: 1.5rem; }
  .stat-divider { display: none; }
  .commission-inner, .about-inner, .contact-inner { grid-template-columns: 1fr; gap: 2rem; }
  .lb-content { grid-template-columns: 1fr; }
  .lb-art { aspect-ratio: 4/3; }
  .form-row { grid-template-columns: 1fr; }
  .about-frame { margin: 0 auto; }
  .about-portrait { width: 220px; height: 280px; }
}
@media (max-width: 480px) {
  .hero-title { font-size: 2.5rem; }
  .testimonial-card { min-width: 280px; }
}
