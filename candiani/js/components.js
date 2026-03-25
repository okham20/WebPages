const NAVBAR_HTML = `
    <header id="navbar" class="flex justify-between items-center px-6 py-5 bg-noche/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-300">
        <div class="flex items-center gap-3 z-50">
            <div class="flex flex-col gap-0.5">
                <div class="flex gap-0.5 h-1.5 w-8">
                    <div class="flex-1 bg-logoAmarillo rounded-l-full"></div>
                    <div class="flex-1 bg-logoVerde"></div>
                    <div class="flex-1 bg-logoAzulClaro rounded-r-full"></div>
                </div>
                <a href="index.html" class="font-montserrat text-xl tracking-tighter font-black">
                    <span class="text-white">AUDIOMASTER</span>
                    <span class="text-textoSecundario font-light">CANDIANI</span>
                </a>
            </div>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#inicio" class="text-textoPrincipal hover:text-logoAmarillo transition-colors">Inicio</a>
            <a href="#nosotros" class="text-textoPrincipal hover:text-logoAzulClaro transition-colors">Nosotros</a>
            <a href="#servicios" class="text-textoPrincipal hover:text-logoVerde transition-colors">Servicios</a>
            <a href="#instalaciones" class="text-textoPrincipal hover:text-logoAzulMarino transition-colors">Instalaciones</a>
            <a href="#inicio" class="text-textoPrincipal hover:text-logoAmarillo transition-colors">TAX-1379</a>
            <a href="#contacto" class="bg-logoAmarillo text-noche px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_15px_rgba(242,231,24,0.4)] transition-all">Contacto</a>
        </nav>
        <button id="mobile-menu-btn" class="md:hidden text-white z-50 hover:text-logoAmarillo transition-colors">
            <i data-lucide="menu"></i>
        </button>

        <div id="mobile-menu" class="fixed inset-0 bg-noche/98 backdrop-blur-xl flex flex-col items-center justify-center opacity-0 pointer-events-none transition-all duration-300">
            <a href="#inicio" class="mobile-link text-2xl mb-6 font-montserrat font-black hover:text-logoAmarillo transition-colors">Inicio</a>
            <a href="#nosotros" class="mobile-link text-2xl mb-6 font-montserrat font-black hover:text-logoAzulClaro transition-colors">Nosotros</a>
            <a href="#servicios" class="mobile-link text-2xl mb-6 font-montserrat font-black hover:text-logoVerde transition-colors">Servicios</a>
            <a href="#instalaciones" class="mobile-link text-2xl mb-6 font-montserrat font-black hover:text-logoAzulClaro transition-colors">Instalaciones</a>
            <a href="#inicio" class="mobile-link text-2xl mb-6 font-montserrat font-black hover:text-logoAmarillo transition-colors">TAX-1379</a>
            <a href="#contacto" class="mobile-link text-2xl mb-8 font-montserrat font-black text-logoAmarillo">Contacto</a>
        </div>
    </header>
`;

const FOOTER_HTML = `
    <footer class="py-12 border-t border-white/5 bg-panel text-center">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <img src="https://audiomaster.com.mx/img/AudioMasterCandiani_iso.png" alt="Logo Footer" class="h-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <p class="text-[10px] font-bold uppercase tracking-[0.5em] text-textoSecundario">
                © 2026 AUDIOMASTER CANDIANI | <span class="text-logoAmarillo">MÉXICO</span>
            </p>
        </div>
    </footer>
        `;