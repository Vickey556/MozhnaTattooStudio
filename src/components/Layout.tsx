import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BookingModal } from "./BookingModal";

// Icons as simple SVGs
const TelegramIcon = () => (
  <img src={`${import.meta.env.BASE_URL}telegram.svg`} alt="Telegram" className="w-6 h-6" />
);

const InstagramIcon = () => (
  <img src={`${import.meta.env.BASE_URL}instagram.svg`} alt="Instagram" className="w-6 h-6" />
);

const PhoneIcon = () => (
  <img src={`${import.meta.env.BASE_URL}phone.svg`} alt="Phone" className="w-6 h-6" />
);

const Logo = () => (
  <img src={`${import.meta.env.BASE_URL}mozhna%20logo.svg`} alt="Можна Тату Логотип" className="h-12 w-auto" />
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1780px] h-[70px] px-6 lg:px-8 rounded-[35px] flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
        <div className="flex items-center gap-4 text-white">
          <Link to="/" onClick={closeMenu}><Logo /></Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex nav-menu font-serif uppercase items-center gap-8 text-sm">
          <Link to="/#about">Про нас</Link>
          <Link to="/services">Послуги</Link>
          <Link to="/tattoo">Татуювання</Link>
          <Link to="/piercing">Пірсинг</Link>
          <Link to="/artists">Майстри</Link>
          <Link to="/#reviews">Відгуки</Link>
          <a href="#contacts">Контакти</a>
        </nav>

        <div className="hidden lg:flex items-center social-icons gap-4">
          <a href="#"><TelegramIcon /></a>
          <a href="#"><InstagramIcon /></a>
          <a href="#"><PhoneIcon /></a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-[6px] p-2 focus:outline-none z-[60]"
          onClick={toggleMenu}
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a1208]/95 backdrop-blur-xl z-[40] transition-opacity duration-300 lg:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-8 font-serif uppercase tracking-widest text-2xl text-[#EBEBDF]">
          <Link to="/#about" onClick={closeMenu}>Про нас</Link>
          <Link to="/services" onClick={closeMenu}>Послуги</Link>
          <Link to="/tattoo" onClick={closeMenu}>Татуювання</Link>
          <Link to="/piercing" onClick={closeMenu}>Пірсинг</Link>
          <Link to="/artists" onClick={closeMenu}>Майстри</Link>
          <Link to="/#reviews" onClick={closeMenu}>Відгуки</Link>
          <a href="#contacts" onClick={closeMenu}>Контакти</a>
        </nav>
        <div className="flex items-center gap-8 mt-12">
          <a href="#" className="scale-125"><TelegramIcon /></a>
          <a href="#" className="scale-125"><InstagramIcon /></a>
          <a href="#" className="scale-125"><PhoneIcon /></a>
        </div>
      </div>
    </>
  );
};

// Contacts Footer
const ContactsFooter = () => {
  return (
    <footer id="contacts" className="py-24 px-4 md:px-12 lg:px-24 bg-[#0a1208] border-t border-[#73934A]/20 font-serif text-[#EBEBDF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between relative z-10">

        {/* Contact Info */}
        <div className="flex flex-col gap-10 lg:w-1/3 pt-8 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm tracking-widest uppercase mb-2">Адреса</h4>
            <p className="text-sm opacity-90">м. Черкаси, вул. Байди Вишневецького,</p>
            <p className="text-sm opacity-90">бул. 34, 3й поверх, каб. 310</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm tracking-widest uppercase mb-2">Графік роботи</h4>
            <p className="text-sm opacity-90">З 10:00 до 19:00 кожного дня</p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-[#6F892E] hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-[#6F892E] hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-[#6F892E] hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="lg:w-2/3 h-80 lg:h-96 rounded-3xl overflow-hidden border border-[#73934A]/30 relative flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.096209210345!2d32.058796!3d49.444898599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b004e80a5bf%3A0x95063f2eb8226ca5!2z0JzQntCW0J3QkCDQotCQ0KLQow!5e0!3m2!1suk!2sua!4v1777577116583!5m2!1suk!2sua"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/Mozhna-Tattoo/';
  const [iframeStyle, setIframeStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const updatePosition = () => {
      const placeholder = document.getElementById('spotify-placeholder');
      if (isHome && placeholder) {
        const rect = placeholder.getBoundingClientRect();
        setIframeStyle({
          position: 'absolute',
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height,
          opacity: 1,
          pointerEvents: 'auto'
        });
      } else {
        setIframeStyle({
          position: 'fixed',
          top: '-1000px',
          opacity: 0,
          pointerEvents: 'none'
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    // Interval ensures it corrects position after images/fonts load
    const interval = setInterval(updatePosition, 500);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
      clearInterval(interval);
    };
  }, [isHome, location.pathname]);

  return (
    <div className="min-h-screen text-[#F0F4E8] font-serif overflow-x-hidden selection:bg-[#73934A] selection:text-white flex flex-col relative">
      <Header />
      <div className="flex-grow pt-[100px]">
        <Outlet />
      </div>
      <ContactsFooter />

      {/* Spotify Widget - Plays globally, positioned via JS over placeholder on Home */}
      <div className="z-[45] transition-opacity duration-500 drop-shadow-2xl" style={iframeStyle}>
        <iframe
          style={{ borderRadius: '16px' }}
          src="https://open.spotify.com/embed/playlist/28gTXXOrv6GQENYucfodQ5?utm_source=generator"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <BookingModal />
    </div>
  );
};
