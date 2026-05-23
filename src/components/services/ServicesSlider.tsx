import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import type { Service } from '../../types';
import { StarIcon } from '../ui/Icons';
import { SectionHeading } from '../ui/SectionHeading';
interface ServicesSliderProps {
  services: Service[];
}

export const ServicesSlider: React.FC<ServicesSliderProps> = ({ services }) => {
  const { openBooking } = useBooking();
  const [selectedCard, setSelectedCard] = useState<Service | null>(null);
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
    <>
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center mb-12 px-4 md:px-12 relative z-30">
        <SectionHeading as="h1" align="left" className="text-center md:text-left">Наші Послуги</SectionHeading>

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

      {/* Main Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-12 pt-4 hide-scrollbar snap-x snap-mandatory px-4 md:px-12 relative z-30"
      >
        {services.map((service) => (
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

      {/* Dots for slider */}
      <div className="flex justify-center gap-4 mt-2 mb-24 relative z-30">
        {services.map((_, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className="focus:outline-none">
            <StarIcon className={`w-6 h-6 transition-all duration-300 ${index === activeIndex ? 'text-[#EBEBDF] scale-125' : 'text-[#EBEBDF]/30 hover:text-[#EBEBDF]/60'}`} />
          </button>
        ))}
      </div>

      {/* Selected Card Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 perspective-1000">
          <div className="absolute inset-0 bg-[#0a1208]/90 backdrop-blur-md" onClick={() => setSelectedCard(null)}></div>

          <div className="relative w-full max-w-md h-[550px] preserve-3d animate-in zoom-in-95 duration-500" style={{ transform: 'rotateY(180deg)' }}>
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
                      setTimeout(() => openBooking({ service: selectedCard.title }), 300);
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
    </>
  );
};
