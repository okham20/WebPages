// ============================================================
// AUDIOMASTER CANDIANI — Shared Components
// components.js · v2.0
// ============================================================

// ---- NAV ITEMS (single source of truth) ----
const NAV_LINKS = [
    { label: 'Inicio',        href: '#inicio',       color: 'logoAmarillo' },
    { label: 'Nosotros',      href: '#nosotros',     color: 'logoAzulClaro' },
    { label: 'Servicios',     href: '#servicios',    color: 'logoVerde' },
    { label: 'Instalaciones', href: '#instalaciones',color: 'logoAmarillo' },
    { label: 'TAX-1379',      href: 'tax1379.html',  color: 'logoVerde' },
];

// ---- LOGO MARKUP ----
const LOGO_HTML = `
<a href="index.html" class="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-logoAmarillo rounded-md" aria-label="Audiomaster Candiani — Inicio">
    <div class="flex flex-col gap-0.5">
        <div class="flex gap-0.5 h-1.5 w-8">
            <div class="flex-1 bg-logoAmarillo rounded-l-full"></div>
            <div class="flex-1 bg-logoVerde"></div>
            <div class="flex-1 bg-logoAzulClaro rounded-r-full"></div>
        </div>
        <span class="font-montserrat text-xl tracking-tighter font-black leading-none">
            <span class="text-white">AUDIOMASTER</span><span class="text-textoSecundario font-light">CANDIANI</span>
        </span>
    </div>
</a>`;

// ---- DESKTOP NAV LINKS ----
const desktopLinks = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="nav-link text-textoPrincipal hover:text-${l.color} transition-colors duration-200 text-[10px] font-bold uppercase tracking-widest">${l.label}</a>`
).join('');

// ---- MOBILE NAV LINKS ----
const mobileLinks = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="mobile-link font-montserrat text-3xl font-black text-textoPrincipal hover:text-${l.color} transition-colors duration-200 py-3 text-center">${l.label}</a>`
).join('');

// ---- NAVBAR HTML ----
const NAVBAR_HTML = `
<header id="main-navbar" class="flex justify-between items-center px-6 py-5 bg-noche/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-300" role="banner">

    ${LOGO_HTML}

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-8" aria-label="Navegación principal">
        ${desktopLinks}
        <a href="#contacto" class="bg-logoAmarillo text-noche px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(242,231,24,0.45)] transition-all duration-200">
            Contacto
        </a>
    </nav>

    <!-- Mobile hamburger -->
    <button id="mobile-menu-btn"
            class="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[6px] text-white hover:text-logoAmarillo transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-logoAmarillo rounded-md"
            aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
        <span class="hamburger-bar block w-6 h-0.5 bg-current rounded-full transition-all duration-300 origin-center"></span>
        <span class="hamburger-bar block w-6 h-0.5 bg-current rounded-full transition-all duration-300"></span>
        <span class="hamburger-bar block w-6 h-0.5 bg-current rounded-full transition-all duration-300 origin-center"></span>
    </button>

    <!-- Mobile menu overlay -->
    <div id="mobile-menu"
         class="fixed inset-0 bg-noche/98 backdrop-blur-2xl z-[55] flex flex-col items-center justify-center gap-1 translate-x-full transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
         aria-hidden="true" role="dialog" aria-modal="true" aria-label="Menú de navegación">

        <div class="absolute top-0 left-0 w-64 h-64 bg-logoAmarillo/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-logoVerde/5 rounded-full blur-[80px] pointer-events-none"></div>

        ${mobileLinks}

        <a href="#contacto" class="mobile-link mt-4 bg-logoAmarillo text-noche px-10 py-4 rounded-full font-montserrat font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform duration-200 text-center">
            Contacto
        </a>

        <p class="absolute bottom-8 text-[10px] font-bold uppercase tracking-[0.4em] text-textoSecundario/40">
            Audiomaster Candiani
        </p>
    </div>
</header>`;

// ---- FOOTER HTML ----
const FOOTER_HTML = `
<footer class="border-t border-white/5 bg-panel" role="contentinfo">
    <div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="https://audiomaster.com.mx/img/AudioMasterCandiani_iso.png"
             alt="Audiomaster Candiani" class="h-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

        <div class="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-textoSecundario hover:text-logoAmarillo hover:border-logoAmarillo/40 transition-all duration-200"
               aria-label="Instagram">
                <i data-lucide="instagram" class="w-4 h-4"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-textoSecundario hover:text-logoAzulClaro hover:border-logoAzulClaro/40 transition-all duration-200"
               aria-label="Facebook">
                <i data-lucide="facebook" class="w-4 h-4"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
               class="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-textoSecundario hover:text-red-400 hover:border-red-400/40 transition-all duration-200"
               aria-label="YouTube">
                <i data-lucide="youtube" class="w-4 h-4"></i>
            </a>
        </div>

        <p class="text-[10px] font-bold uppercase tracking-[0.5em] text-textoSecundario text-center">
            © 2026 AUDIOMASTER CANDIANI | <span class="text-logoAmarillo">MÉXICO</span>
        </p>
    </div>
</footer>`;


// ============================================================
// COMPONENT INJECTOR
// ============================================================
function injectComponents({ navbar = true, footer = true } = {}) {
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (navbar && navbarContainer)  navbarContainer.innerHTML = NAVBAR_HTML;
    if (footer && footerContainer)  footerContainer.innerHTML = FOOTER_HTML;

    initNavbar();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}


// ============================================================
// NAVBAR BEHAVIOUR
// ============================================================
function initNavbar() {
    const navbar   = document.getElementById('main-navbar');
    const btn      = document.getElementById('mobile-menu-btn');
    const menu     = document.getElementById('mobile-menu');
    const bars     = btn ? btn.querySelectorAll('.hamburger-bar') : [];
    const mLinks   = menu ? menu.querySelectorAll('.mobile-link') : [];

    if (!navbar || !btn || !menu) return;

    let isOpen = false;

    // ---- scroll shrink ----
    const onScroll = () => {
        const scrolled = window.scrollY > 50;
        navbar.classList.toggle('py-3',  scrolled);
        navbar.classList.toggle('py-5', !scrolled);
        navbar.classList.toggle('bg-noche/95', scrolled);
        navbar.classList.toggle('bg-noche/80', !scrolled);
        navbar.classList.toggle('shadow-lg', scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    // ---- hamburger animation ----
    function setHamburger(open) {
        if (bars.length < 3) return;
        bars[0].style.transform = open ? 'translateY(8px) rotate(45deg)'  : '';
        bars[1].style.opacity   = open ? '0' : '1';
        bars[2].style.transform = open ? 'translateY(-8px) rotate(-45deg)' : '';
    }

    // ---- open / close ----
    function openMenu() {
        isOpen = true;
        menu.classList.remove('translate-x-full');
        menu.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Cerrar menú');
        setHamburger(true);
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        isOpen = false;
        menu.classList.add('translate-x-full');
        menu.setAttribute('aria-hidden', 'true');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Abrir menú');
        setHamburger(false);
        document.body.style.overflow = '';
    }

    btn.addEventListener('click', () => isOpen ? closeMenu() : openMenu());

    // close on link click
    mLinks.forEach(link => link.addEventListener('click', closeMenu));

    // close on Escape key
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) closeMenu(); });

    // close on outside click (backdrop)
    menu.addEventListener('click', e => { if (e.target === menu) closeMenu(); });
}


// ============================================================
// SCROLL REVEAL UTILITY
// ============================================================
function initReveal(selector = '.reveal', options = {}) {
    const defaults = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
    const cfg = Object.assign({}, defaults, options);

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        });
    }, cfg);

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
}


// ============================================================
// COUNTER ANIMATION UTILITY
// ============================================================
function initCounters(selector = '[data-counter]') {
    const counterEls = document.querySelectorAll(selector);
    if (!counterEls.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.dataset.counter, 10);
            const suffix = el.dataset.suffix || '';
            const duration = 1800;
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
                el.textContent = Math.floor(ease * target) + suffix;
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });

    counterEls.forEach(el => observer.observe(el));
}