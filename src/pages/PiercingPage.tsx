import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { ReviewsSection } from './HomePage';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-[#73934A]/30 py-6">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none hover:text-[#6F892E] transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-2xl uppercase tracking-wider">{question}</span>
        <div className="w-8 h-8 flex items-center justify-center border border-[#73934A]/50 rounded-full group-hover:border-[#6F892E] transition-colors">
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="font-serif text-lg opacity-80 leading-relaxed whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
};

export const PiercingPage = () => {
  const { openBooking } = useBooking();
  const [activeFilter, setActiveFilter] = useState('Всі проколи');

  const filters = ['Всі проколи', 'Вуха', 'Ніс', 'Губа', 'Брова', 'Пупок'];

  const portfolioPhotos = [
    '/helix.png',
    '/helixsnake.png',
    '/orbital.png',
    '/snakebites.png',
    '/toung.png'
  ];

  return (
    <div className="pt-32 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">
      
      {/* Hero Section */}
      <h1 className="text-5xl md:text-7xl lg:text-[100px] text-center uppercase tracking-wider mb-20 md:mb-32">ПІРСИНГ</h1>

      {/* Piercing Types Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32">
        <h2 className="text-4xl md:text-5xl mb-16 text-center uppercase tracking-wider">ВИДИ ПРОКОЛІВ</h2>
        <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-24">
           {/* Left Labels */}
           <div className="flex flex-col gap-8 md:gap-16 w-full md:w-auto text-center md:text-right">
              <div className="group">
                 <p className="text-2xl text-[#6F892E] uppercase tracking-wider mb-1">HELIX</p>
                 <p className="text-xl opacity-80">500 грн</p>
              </div>
              <div className="group">
                 <p className="text-2xl text-[#6F892E] uppercase tracking-wider mb-1">FLAT</p>
                 <p className="text-xl opacity-80">500 грн</p>
              </div>
              <div className="group">
                 <p className="text-2xl text-[#6F892E] uppercase tracking-wider mb-1">SEPTUM</p>
                 <p className="text-xl opacity-80">450 грн</p>
              </div>
           </div>

           {/* Central 3D Model Image */}
           <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative z-10 flex-shrink-0">
             <img src="/piercing.png" alt="3D Piercing Model" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(111,137,46,0.3)]" />
           </div>

           {/* Right Labels */}
           <div className="flex flex-col gap-8 md:gap-16 w-full md:w-auto text-center md:text-left">
              <div className="group">
                 <p className="text-2xl text-[#6F892E] uppercase tracking-wider mb-1">NOSTRIL</p>
                 <p className="text-xl opacity-80">450 грн</p>
              </div>
              <div className="group">
                 <p className="text-2xl text-[#6F892E] uppercase tracking-wider mb-1">MEDUSA</p>
                 <p className="text-xl opacity-80">550 грн</p>
              </div>
              <div className="group">
                 <p className="text-2xl text-[#6F892E] uppercase tracking-wider mb-1">CONCH</p>
                 <p className="text-xl opacity-80">550 грн</p>
              </div>
           </div>
        </div>
      </section>

      {/* Booking Block */}
      <section className="py-24 px-4 bg-[#1A2E16] mb-32 border-y border-[#6F892E]/20">
         <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl mb-6 uppercase tracking-widest text-[#EBEBDF]">ОНЛАЙН ЗАПИС ВІДКРИТО</h2>
            <p className="text-xl md:text-2xl opacity-80 mb-12 uppercase tracking-wider text-[#6F892E]">ВСТИГНИ ЗАБРОНЮВАТИ СВІЙ СЕАНС</p>
            <button onClick={openBooking} className="px-12 py-5 bg-[#6F892E] text-[#122110] uppercase tracking-widest text-lg rounded-full hover:bg-white hover:text-black transition-colors shadow-[0_0_30px_rgba(111,137,46,0.3)]">
              ЗАПИСАТИСЯ ОНЛАЙН
            </button>
         </div>
      </section>

      {/* FAQ / How to Book */}
      <section className="px-4 md:px-12 lg:px-24 max-w-5xl mx-auto mb-32">
        <h2 className="text-4xl md:text-5xl mb-16 text-center uppercase tracking-wider">ЯК ЗАПИСАТИСЯ</h2>
        <div className="flex flex-col">
          <FAQItem 
            question="ГОЛОВНЕ" 
            answer="Ми працюємо за попереднім записом. Консультація щодо вибору прикраси та місця проколу безкоштовна." 
          />
          <FAQItem 
            question="ПРОЦЕС ЗАПИСУ" 
            answer={"1. Натисніть кнопку 'Записатися онлайн'.\n2. Оберіть майстра та вид проколу.\n3. Виберіть вільну дату та час у календарі.\n4. Залиште свої контактні дані."} 
          />
          <FAQItem 
            question="ОПЛАТА" 
            answer="Вартість проколу вказана без урахування прикраси. Базова титанова прикраса коштує від 300 грн. Оплата після сеансу." 
          />
          <FAQItem 
            question="ПРОТИПОКАЗИ" 
            answer="Пірсинг не робиться при цукровому діабеті, епілепсії, захворюваннях крові, а також під час вагітності та лактації." 
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl mb-16 text-center uppercase tracking-wider">ПОРТФОЛІО</h2>
        
        {/* Filter Bar */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#1A2E16] rounded-full p-2 flex flex-wrap gap-2 justify-center border border-[#6F892E]/30">
            {filters.map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full uppercase tracking-widest text-sm transition-colors ${activeFilter === filter ? 'bg-[#6F892E] text-[#122110]' : 'text-[#EBEBDF]/80 hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioPhotos.map((photo, index) => (
            <div key={index} className="rounded-[40px] overflow-hidden aspect-[4/5] relative group cursor-pointer border border-[#73934A]/20">
              <img src={photo} alt="Piercing work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <p className="text-[#6F892E] uppercase tracking-widest text-lg font-serif mb-2">Анастасія Старинець</p>
                 <p className="text-white/80">Пірсинг, 2024</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 border border-[#6F892E] text-[#6F892E] rounded-full uppercase tracking-widest hover:bg-[#6F892E] hover:text-[#122110] transition-colors">
            Більше робіт
          </button>
        </div>
      </section>

      {/* Masters Section */}
      <section className="py-24 px-4 bg-[#1A2E16] border-y border-[#6F892E]/20 mb-32">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 flex justify-center">
             <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-2 border-[#6F892E]/50 relative p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/tattoo_artist_1_1777048808245.png" alt="Анастасія Старинець" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
             <h2 className="text-4xl md:text-5xl mb-4 uppercase tracking-wider text-[#6F892E]">АНАСТАСІЯ СТАРИНЕЦЬ</h2>
             <p className="text-xl uppercase tracking-widest opacity-80 mb-8">Майстер пірсингу</p>
             <p className="text-lg opacity-80 mb-12 leading-relaxed max-w-xl">
               Безпечний та професійний пірсинг. Використовує лише високоякісний титан. Допоможе обрати ідеальну прикрасу та забезпечить комфортне загоєння проколу.
             </p>
             <div className="flex gap-6">
                <button onClick={openBooking} className="px-8 py-4 bg-[#6F892E] text-[#122110] uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-colors">
                  Записатися
                </button>
                <Link to="/artists" className="px-8 py-4 border border-[#6F892E] text-[#6F892E] uppercase tracking-widest rounded-full hover:bg-[#6F892E] hover:text-[#122110] transition-colors">
                  Портфоліо
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />
    </div>
  );
};

