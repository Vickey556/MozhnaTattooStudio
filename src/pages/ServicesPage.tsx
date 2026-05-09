import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'ТАТУЮВАННЯ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPCZJaIoFIifoLuuIa-dkMM-N95dPZGAbROlnEF=s1360-w1360-h1020-rw',
    prices: [
      { label: "Консультація", value: "0 грн" },
      { label: "Татуювання", value: "від 1500 грн" },
      { label: "Сеанс", value: "6000 грн" }
    ],
    desc: 'Художнє татуювання в будь-якому стилі. Розробка індивідуального ескізу або робота за вашою ідеєю.',
    link: '/tattoo'
  },
  {
    id: 2,
    title: 'ПІРСИНГ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipN3EmXKR8S4v_k0Ng9QNpr1cc20GGEbyBt9DEjc=s1360-w1360-h1020-rw',
    prices: [
      { label: "Мочка вуха", value: "від 500 грн" },
      { label: "Хрящ", value: "від 700 грн" },
      { label: "Складний пірсинг", value: "від 1000 грн" }
    ],
    desc: 'Професійний прокол з використанням стерильних титанових прикрас. Безпечно та естетично.',
    link: '/piercing'
  },
  {
    id: 3,
    title: 'КУРСИ ТАТУ МАЙСТРА',
    image: 'https://lh3.googleusercontent.com/p/AF1QipOBTGNXgPkzhLM8tSalF_iEeW6mhiAQORNfo4N8=s1360-w1360-h1020-rw',
    prices: [
      { label: "Базовий курс", value: "від 10000 грн" }
    ],
    desc: 'Базовий курс татуювання та пірсингу. Теорія та багато практики на моделях.',
    link: null
  },
  {
    id: 4,
    title: 'АРТ-СЕАНС',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHqKxMS5_LMmQmQe4fLWWmArd1zXxhu2dyf2W_xE6DS4PBgRLbGcKWgEQ9b7c7LrbUotvr0w2SKaLKPgsZnkXR2q1Mm5rO3jB2JWa12G8YVhcJ4RAeQvUgam0vUPJ-zEocT6g0oR--HXVIP=s1360-w1360-h1020-rw',
    prices: [
      { label: "Фріхенд сеанс", value: "від 2000 грн" }
    ],
    desc: 'Сеанс татуювання в режимі фріхенд, коли майстер малює прямо на шкірі, довіряючись потоку.',
    link: null
  },
  {
    id: 5,
    title: 'ПЕРМАНЕНТНИЙ МАКІЯЖ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPUPM3hpfhds9ACgHyYn8Yu4-xzaoCqesdbAN9w=s1360-w1360-h1020-rw',
    prices: [
      { label: "Брови/Губи", value: "від 1500 грн" }
    ],
    desc: 'Брови, губи, міжвійка. Природній вигляд та стійкий результат на роки.',
    link: null
  },
  {
    id: 6,
    title: 'ПОДАРУНКОВИЙ СЕРТИФІКАТ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipM-evGc62nJtuo0mnoe3qlMJPfpxgRrB16Ds1D3=s1360-w1360-h1020-rw',
    prices: [
      { label: "Сертифікат", value: "від 500 грн" }
    ],
    desc: 'Сертифікати на будь-яку послугу або суму. Ідеальний подарунок для сміливих.',
    link: null
  }
];

// Star component

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`flex-shrink-0 ${className || ''}`}>
    <path d="M16 0 L17.5 14.5 L32 16 L17.5 17.5 L16 32 L14.5 17.5 L0 16 L14.5 14.5 Z" fill="currentColor" />
  </svg>
);

export const ServicesPage = () => {
  const { openBooking } = useBooking();
  const [selectedCard, setSelectedCard] = useState<typeof services[0] | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
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

  return (
    <div className="pt-[50px] pb-32 px-4 min-h-[calc(100vh-100px)] relative overflow-hidden">

      <div className="relative z-10 max-w-[1400px] mx-auto">

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center mb-12 px-4 md:px-12 relative z-30">
          <h1 className="font-serif text-3xl md:text-4xl text-center md:text-left uppercase tracking-wider">Наші Послуги</h1>

          <div className="flex gap-4 hidden md:flex">
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

        {/* Main Slider (Додано relative z-30 щоб картки перекривали нитки) */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-12 pt-4 hide-scrollbar snap-x snap-mandatory px-4 md:px-12 relative z-30"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="w-[280px] md:w-[320px] h-[450px] md:h-[480px] flex-shrink-0 snap-center cursor-pointer group perspective-1000"
              onClick={() => setSelectedCard(service)}
            >
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-xl border border-[#73934A]/30 transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(111,137,46,0.15)] bg-[#122110]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1208] via-[#0a1208]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 text-[#EBEBDF] group-hover:text-[#6F892E] transition-colors">{service.title}</h3>
                  <p className="font-serif text-[#6F892E]/80 text-sm tracking-widest uppercase">Дізнатися більше →</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots for slider (Додано z-30) */}
        <div className="flex justify-center gap-4 mt-2 mb-24 relative z-30">
          {services.map((_, index) => (
            <button key={index} onClick={() => setActiveIndex(index)} className="focus:outline-none">
              <StarIcon className={`w-6 h-6 transition-all duration-300 ${index === activeIndex ? 'text-[#EBEBDF] scale-125' : 'text-[#EBEBDF]/30 hover:text-[#EBEBDF]/60'}`} />
            </button>
          ))}
        </div>


        {/* Спільний контейнер для подарунків та знижок (Змінено z-20 на z-10) */}
        <div className="w-full max-w-[1400px] mx-auto px-4 -mt-12 md:-mt-24 flex flex-col space-y-[-60px] md:space-y-[-120px] relative z-10">

          {/* Блок 1: Знижки (Зірка зліва) */}
          <div className="flex flex-col md:flex-row items-center justify-start relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-16 pl-0 md:pl-12">

              {/* Контейнер зірки */}
              <div className="relative flex items-center justify-center w-[350px] h-[350px] md:w-[480px] md:h-[480px]">

                {/* НИТКА: Товстіша (w-[3px]), висока (h-[2000px]), відцентрована (left-1/2 -translate-x-1/2) і схована під картки (z-[-1]) */}
                <div className="absolute bottom-1/2 left-1/2 -translate-x-1 w-[3px] h-[2000px] bg-[#375B11]/60 z-[-1]"></div>

                {/* ВСТАВКА ЗОБРАЖЕННЯ ЗІРОК */}
                <img
                  src="/star.png"
                  alt="Декоративні зірки"
                  className="absolute inset-0 w-full h-full object-contain rotate-[-10deg] opacity-90 mix-blend-screen"
                />

                {/* Текст поверх зірки */}
                <span className="relative z-10 text-center font-serif text-xl md:text-2xl uppercase leading-tight text-[#EBEBDF] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-8">
                  ЗНИЖКИ НА<br />ДЕНЬ<br />НАРОДЖЕННЯ
                </span>
              </div>

              {/* Текст опису (Ліворуч) */}
              <div className="font-serif text-sm md:text-base max-w-sm text-center md:text-left text-[#EBEBDF]/90 mt-[-30px] md:mt-0 relative z-10">
                <h4 className="text-white text-xl mb-2 uppercase tracking-tighter">Святкуй свій день народження з нами!</h4>
                <p>Даруємо знижку у розмірі 15% на будь-яку послугу в нашій студії. Скористатись знижкою можна в день народження та за три дні ДО та ПІСЛЯ дня народження. Просто повідом нас про своє свято, та отримай подарунок від нас ♥</p>
              </div>
            </div>
          </div>

          {/* Блок 2: Сертифікат (Зірка справа) */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-end relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-16 pr-0 md:pr-12">

              {/* Текст опису (Праворуч) */}
              <div className="font-serif text-sm md:text-base max-w-sm text-center md:text-right text-[#EBEBDF]/90 mb-[-30px] md:mb-0 relative z-10">
                <h4 className="text-white text-xl mb-2 uppercase tracking-tighter">Хочеш подарувати щось справді особливе?</h4>
                <p>Подарунковий сертифікат на тату, пірсинг, перманент — це не просто подарунок, це можливість втілити мрію, проявити себе, залишити слід. Сума — на твій вибір.Можна отримати в електронному або друкованому вигляді.Дійсний протягом 3х місяців.Подаруй емоцію, що залишиться назавжди.</p>
              </div>

              {/* Контейнер зірки */}
              <div className="relative flex items-center justify-center w-[350px] h-[350px] md:w-[480px] md:h-[480px]">

                {/* НИТКА: Товстіша (w-[3px]), висока (h-[2000px]), відцентрована (left-1/2 -translate-x-1/2) і схована під картки (z-[-1]) */}
                <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[3px] h-[2000px] bg-[#375B11]/60 z-[-1]"></div>

                {/* ВСТАВКА ЗОБРАЖЕННЯ */}
                <img
                  src="/star-r.png"
                  alt="Декоративні зірки"
                  className="absolute inset-0 w-full h-full object-contain rotate-[160deg] opacity-90 mix-blend-screen"
                />

                {/* Текст поверх зірки */}
                <span className="relative top-6 right-10 z-10 text-center font-serif text-xl md:text-2xl uppercase leading-tight text-[#EBEBDF] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-8">
                  ПОДАРУНКОВИЙ<br />СЕРТИФІКАТ
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Selected Card Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 perspective-1000">
          <div className="absolute inset-0 bg-[#0a1208]/90 backdrop-blur-md" onClick={() => setSelectedCard(null)}></div>

          <div className="relative w-full max-w-md h-[550px] preserve-3d animate-in zoom-in-95 duration-500" style={{ transform: 'rotateY(180deg)' }}>
            {/* Back of card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#122110] rounded-[40px] border border-[#6F892E]/30 shadow-[0_0_50px_rgba(111,137,46,0.15)] overflow-hidden flex flex-col">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-[#6F892E] hover:text-black transition-colors z-20"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="p-8 flex-grow flex flex-col justify-between relative z-10 bg-[#122110] mt-8 overflow-y-auto hide-scrollbar">
                <div>
                  <h2 className="font-serif text-3xl mb-4 text-[#6F892E]">{selectedCard.title}</h2>
                  <div className="flex flex-col gap-2 mb-6">
                    {selectedCard.prices.map((p, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-[#73934A]/20 pb-2">
                        <span className="font-serif opacity-80">{p.label}</span>
                        <span className="font-serif text-[#EBEBDF]">{p.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-serif opacity-70 mb-8 leading-relaxed">{selectedCard.desc}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => {
                      setSelectedCard(null);
                      setTimeout(openBooking, 300);
                    }}
                    className="w-full py-4 bg-[#6F892E] text-[#122110] rounded-full font-serif uppercase tracking-widest hover:bg-white transition-colors text-center"
                  >
                    Записатися онлайн
                  </button>

                  {selectedCard.link && (
                    <Link
                      to={selectedCard.link}
                      className="w-full py-4 border border-[#73934A] text-center rounded-full font-serif uppercase tracking-widest hover:bg-[#73934A]/20 transition-colors"
                    >
                      Перейти на сторінку
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}