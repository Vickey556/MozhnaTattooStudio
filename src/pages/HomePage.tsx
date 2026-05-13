import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useBooking } from '../context/BookingContext';


// Note: Reused components from original App.tsx
// Hero Section
const HeroSection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-4 text-center overflow-hidden -mt-[100px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src={`${import.meta.env.BASE_URL}IMG_1830.MP4`} type="video/mp4" />
      </video>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#122110]/50 z-0 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <p className="font-serif text-xl md:text-2xl mb-4 opacity-90">Студія татуювання та пірсингу</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-[75px] xl:text-[100px] mb-6 tracking-wider leading-none">
          «МОЖНА ТАТУ»
        </h1>
        <p className="font-serif italic text-xl md:text-2xl mb-16 opacity-80">
          Можна. Бо ми знаємо, як.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-24 items-center justify-center">
          <button onClick={openBooking} className="hero-btn text-white font-serif tracking-widest text-sm uppercase px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Записатися онлайн
          </button>
          <Link to="/artists" className="hero-btn text-white font-serif tracking-widest text-sm uppercase px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Переглянути портфоліо
          </Link>
        </div>

        <p className="text-sm font-serif tracking-wider opacity-60">
          Працюємо за попереднім записом · 18+
        </p>
      </div>

      {/* Background radial gradient to mimic the light spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2B451A] rounded-full blur-[150px] opacity-40 z-0 pointer-events-none"></div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-[0px] px-4 md:px-12 lg:px-24 w-full flex justify-center noise-bg">
      <div className="flex flex-col lg:flex-row gap-12 max-w-[1600px] w-full items-center lg:items-start justify-center">
        <div className="about-snake-img lg:-mt-10"></div>

        <div className="w-full flex flex-col items-center lg:items-start gap-12 max-w-[1080px]">
          <h2 className="about-heading self-start">ПРО НАШУ СТУДІЮ</h2>

          <div className="about-text flex flex-col gap-6">
            <div>
              <p>
                Вітаємо у місці, де креативна ідея оживає, а смілива мрія стає частиною вашого образу.
                Тату-студія «МОЖНА ТАТУ» — це сучасний арт-простір у самому серці Черкас, де професіоналізм,
                безкомпромісна стерильність та затишна атмосфера створюють ідеальні умови для перевтілення.
              </p>
              <p>
                Ми переконані: татуювання та пірсинг — це не просто процедури. Це справжня історія на шкірі, прояв
                характеру та маніфест внутрішньої свободи. Саме тому ми створили місце, де кожен клієнт почувається
                спокійно, впевнено та натхненно.
              </p>
            </div>
            <div>
              <p>
                Ми дбаємо про кожну деталь — від чистоти робочих поверхонь до музики в залі.
                Уся наша робота проходить в умовах повної стерильності - ми використовуємо лише одноразові витратні
                матеріали, а інструменти проходять багаторівневе очищення і стерилізацію відповідно до медичних норм.
              </p>
              <p>
                Ми - команда майстрів, які працюють у різних стилях, постійно розвиваються та не бояться сміливих рішень.
                Кожен з нас вкладає душу в свою роботу та завжди допоможе знайти те тату, яке підійде саме вам.
              </p>
            </div>
          </div>

          <div className="about-quote-right">
            Приходьте до студії - ми створюємо не просто татуювання, а моменти, які
            залишаються з вами назавжди.<br />
            Ми віримо: якщо дуже хочеться - значить, можна!
          </div>

          <div className="about-signature w-full xl:text-left">
            З повагою до вашого тіла і любов'ю до своєї справи.
          </div>
        </div>

      </div>
    </section>
  );
};

// Expertise Section
const ExpertiseSection = () => {
  const statsData = [
    { img: 'clients return.png', text: '60% клієнтів повертаються знову або приводять друзів' },
    { img: 'course.png', text: 'Більше 10 випускників тату-курсів' },
    { img: 'healed tattoo.png', text: 'Понад 1000 виконаних татуювань' },
    { img: 'popular tattoo.png', text: 'Найпопулярніші запити — графіка, лайнворк, флористика та символічні тату' },
    { img: 'team.png', text: 'Середній вік клієнтів — 20–35 років' }
  ];

  const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-[#EBEBDF]">
      <path d="M16 0 L17.5 14.5 L32 16 L17.5 17.5 L16 32 L14.5 17.5 L0 16 L14.5 14.5 Z" fill="currentColor" />
    </svg>
  );

  return (
    <section className="pt-0 pb-24 px-0 w-full text-center noise-bg overflow-hidden relative">
      <div className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-[15px]">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Наша експертність у цифрах та фактах</h2>
        <p className="font-serif opacity-80 max-w-3xl mx-auto text-sm md:text-base">
          Ми пишаємося тим, що стали частиною життя сотень людей. Наша статистика — це кредит довіри, який ми виправдовуємо щодня
        </p>
      </div>

      <div className="marquee-wrapper flex w-full" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="flex gap-[50px] pr-[50px] animate-marquee items-center">
          {statsData.map((stat, index) => (
            <img
              key={`set1-img-${index}`}
              src={`${import.meta.env.BASE_URL}${stat.img}`}
              alt={`Статистика ${index + 1}`}
              className="h-64 md:h-80 lg:h-96 w-auto max-w-none flex-none rounded-[32px] object-cover shadow-2xl"
            />
          ))}
        </div>
        <div className="flex gap-[50px] pr-[50px] animate-marquee items-center" aria-hidden="true">
          {statsData.map((stat, index) => (
            <img
              key={`set2-img-${index}`}
              src={`${import.meta.env.BASE_URL}${stat.img}`}
              alt={`Статистика ${index + 1}`}
              className="h-64 md:h-80 lg:h-96 w-auto max-w-none flex-none rounded-[32px] object-cover shadow-2xl"
            />
          ))}
        </div>
      </div>

      <div className="marquee-wrapper flex w-full mt-12 text-xl md:text-2xl font-serif text-[#EBEBDF]" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="flex gap-[13px] pr-[13px] animate-marquee items-center whitespace-nowrap" style={{ animationDirection: 'normal', animationDuration: '40s' }}>
          {statsData.map((stat, index) => (
            <React.Fragment key={`set1-txt-${index}`}>
              <span>{stat.text}</span>
              <StarIcon />
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-[13px] pr-[13px] animate-marquee items-center whitespace-nowrap" aria-hidden="true" style={{ animationDirection: 'normal', animationDuration: '40s' }}>
          {statsData.map((stat, index) => (
            <React.Fragment key={`set2-txt-${index}`}>
              <span>{stat.text}</span>
              <StarIcon />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// Masters Section
const MastersSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const masters = [
    {
      name: "НАДІЯ МОЖАЄВА",
      specs: "Татуювання, пірсинг, навчання, арт сеанс",
      image: "Можаєва Надія.png",
      color: "bg-transparent"
    },
    {
      name: "ТЕЛЯТНИК ВІКТОРІЯ",
      specs: "Татуювання",
      image: "Телятник Вікторія.png",
      color: "bg-transparent"
    },
    {
      name: "ВОВНА АННА",
      specs: "Татуювання, навчання, арт-сеанс",
      image: "Вовна Анна.png",
      color: "bg-transparent"
    },
    {
      name: "АНАСТАСІЯ СТАРИНЕЦЬ",
      specs: "Пірсинг, навчання",
      image: "tattoo_artist_1_1777048808245.png",
      color: "bg-transparent"
    },
    {
      name: "ВІТАЛІНА ШУМ",
      specs: "Татуювання",
      image: "tattoo_artist_2_1777048821101.png",
      color: "bg-transparent"
    },
    {
      name: "ІРИНА МІЛЛЕР",
      specs: "Перманентний макіяж, ламінування",
      image: "tattoo_artist_3_1777048833890.png",
      color: "bg-transparent"
    }
  ];

  const StarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`flex-shrink-0 ${className || ''}`}>
      <path d="M16 0 L17.5 14.5 L32 16 L17.5 17.5 L16 32 L14.5 17.5 L0 16 L14.5 14.5 Z" fill="currentColor" />
    </svg>
  );

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + masters.length) % masters.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % masters.length);
  };

  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const child = slider.children[activeIndex] as HTMLElement;
    if (child) {
      const scrollLeft = child.offsetLeft - slider.offsetLeft - (slider.offsetWidth / 2) + (child.offsetWidth / 2);
      slider.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % masters.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [masters.length, isHovered]);

  return (
    <section
      id="masters"
      className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto noise-bg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
        <h2 className="font-serif text-3xl md:text-4xl text-center md:text-left uppercase">Наші майстри</h2>

        <div className="flex gap-4">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-[#EBEBDF]/30 flex items-center justify-center hover:bg-[#EBEBDF]/10 hover:border-[#6F892E] transition-colors group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:text-[#6F892E] transition-colors" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border border-[#EBEBDF]/30 flex items-center justify-center hover:bg-[#EBEBDF]/10 hover:border-[#6F892E] transition-colors group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:text-[#6F892E] transition-colors" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {masters.map((master, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center relative outline-none"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className={`absolute top-0 w-full max-w-sm aspect-[3/4] master-plaque -z-0 transition-all duration-500 translate-x-4 translate-y-4 scale-95 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0'}`}></div>

            <div className={`w-full max-w-sm aspect-[3/4] rounded-[40px] overflow-hidden mb-6 relative transition-transform duration-500 z-10 ${index === activeIndex ? '-translate-y-2' : ''} ${master.color}`}>
              <img
                src={`${import.meta.env.BASE_URL}${master.image}`}
                alt={master.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className={`font-serif text-xl md:text-2xl mb-2 transition-colors duration-300 z-10 ${index === activeIndex ? 'text-[#6F892E]' : ''}`}>{master.name}</h3>
            <p className="font-serif text-sm opacity-70 text-center z-10">{master.specs}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {masters.map((_, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className="focus:outline-none">
            <StarIcon className={`w-6 h-6 transition-all duration-300 ${index === activeIndex ? 'text-[#EBEBDF] scale-125' : 'text-[#EBEBDF]/30 hover:text-[#EBEBDF]/60'}`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export const AtmosphereSection = () => {
  // --- ЛОГІКА КАРУСЕЛІ ФОТО ---
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photoRotationSpeed = 4000;

  // Ваші фотографії
  const studioPhotos = [
    "vibe1.jpg", "team.jpg", "vibe2.jpg", "team2.jpg",
    "vibe3.jpg", "study.jpg", "study2.jpg", "piercing.jpg", "team3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % studioPhotos.length);
    }, photoRotationSpeed);
    return () => clearInterval(timer);
  }, [studioPhotos.length]);

  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto noise-bg relative">

      <div className="flex flex-col lg:flex-row gap-16 items-stretch">

        {/* Ліва частина: Текст */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-[#F0F4E8] font-serif leading-relaxed text-sm md:text-base py-0">

          <div className="space-y-2 mb-0">
            <p>
              Ми знаємо, що візит до тату-майстра — це завжди поєднання хвилювання,
              очікування та легкого адреналіну. Саме тому в «МОЖНА ТАТУ» ми приділяємо
              особливу увагу не лише технічному виконанню, а й вашому емоційному
              комфорту. Для нас важливо, щоб кожен тату-сеанс у Черкасах став для вас
              приємною подією, а не просто маніпуляцією.
            </p>
            <div className="space-y-5 mb-2 italic text-xl text-[#6F892E]">
              <p>Твій комфорт — наш пріоритет!</p>
            </div>
            <p>
              Ми створили простір, де немає місця стресу чи дискомфорту. Наш особливий
              вайб складається з багатьох дрібниць, які ви відчуваєте з першої хвилини.
            </p>
          </div>

          <div className="space-y-3">
            <p>
              Інтер'єр студії продуманий так, щоб ви почувалися як у гостях у кращих друзів.
              М'яке світло, стильний декор та зручні ергономічні кушетки дозволяють
              розслабитися навіть під час тривалих сеансів.
            </p>
            <p>
              У залі завжди звучить якісний саунд, який задає настрій. Ми віримо, що
              правильна музика допомагає краще переносити процес і налаштовує на творчу
              хвилю.
            </p>
            <p>
              Наші майстри — це не просто професіонали, а люди, які чують ваші побажання.
              Ми завжди запропонуємо чай, каву, зробимо необхідну перерву та підтримаємо
              розмову (або навпаки — забезпечимо тишу, якщо вам так комфортніше).
            </p>
          </div>
        </div>

        {/* Права частина: Карусель */}
        <div className="w-full lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <div className="rounded-[32px] overflow-hidden w-full h-[400px] md:h-[600px] relative shadow-2xl border border-[#73934A]/30">
            <div
              className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out flex flex-col"
              style={{ transform: `translateY(-${activePhotoIndex * 100}%)` }}
            >
              {studioPhotos.map((photoSrc, index) => (
                <img
                  key={index}
                  src={`${import.meta.env.BASE_URL}${photoSrc}`}
                  alt={`Фото атмосфери ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#122110] to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Spotify Widget Placeholder */}
      <div id="spotify-placeholder" className="mt-20 max-w-3xl mx-auto h-[152px] w-full"></div>

    </section>
  );
};


export const ReviewsSection = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Перевіряємо, чи ми на клієнті і чи блок існує
    if (widgetRef.current && !widgetRef.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js?041df50700898942d406974caa0";
      script.async = true;
      script.defer = true;
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto noise-bg relative">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <h2 className="font-serif text-3xl md:text-4xl uppercase">Ваші Відгуки</h2>
        <a
          href="https://www.google.com/search?sca_esv=8c24cb2666462953&sxsrf=ANbL-n6TNIJFLiU1Chbiaq5zymmw3tOxBg:1777925328984&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOezGQDdIV1B1SIBisroYPXzMyvCKls5zkqwXWs0MdTCVqNrC8G2AF_-buI2J7FLC8FCWn0WUquWPva-wE3IOV4TwC065pClJADnOqTdx6bFVKFvhpg%3D%3D&q=%D0%9C%D0%9E%D0%96%D0%9D%D0%90+%D0%A2%D0%90%D0%A2%D0%A3+%D0%92%D1%96%D0%B4%D0%B3%D1%83%D0%BA%D0%B8&sa=X&ved=2ahUKEwjRi6_9t6CUAxXwEBAIHfelD_AQ0bkNegQIIxAH&biw=1536&bih=730&dpr=1.25"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#6F892E] text-[#122110] px-8 py-4 rounded-full hover:bg-white transition-colors font-serif uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(182,255,64,0.3)]"
        >
          Написати в Google
        </a>
      </div>

      <div className="rounded-3xl border border-[#6F892E]/30 p-4 md:p-8 min-h-[400px] shadow-2xl relative overflow-hidden">
        {/* Сюди ефект useEffect вставить скрипт */}
        <div ref={widgetRef} className="w-full h-full"></div>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="bg-cover bg-fixed bg-center" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background.jpg')` }}>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <MastersSection />
      <AtmosphereSection />
      <ReviewsSection />
    </div>
  );
};
