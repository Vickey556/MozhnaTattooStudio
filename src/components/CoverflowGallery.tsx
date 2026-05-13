import { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  category: string;
  artist?: {
    name: string;
    description: string;
    image: string;
  };
}

interface CoverflowGalleryProps {
  items: GalleryItem[];
  categories: string[];
}

export const CoverflowGallery = ({ items, categories }: CoverflowGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Всі стилі');
  const { openBooking } = useBooking();

  const filteredItems = activeCategory === 'Всі стилі'
    ? items
    : items.filter(item => item.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveIndex(0);
  };

  const next = () => {
    if (activeIndex < filteredItems.length - 1) setActiveIndex(activeIndex + 1);
  };

  const prev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const currentItem = filteredItems[activeIndex];

  // Rerender on resize to adjust xFactor for mobile/desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-[1400px] mx-auto py-12 flex flex-col items-center">

      {/* Header & Filter */}
      <div className="w-full relative flex justify-center mb-16">
        {/* Title positioned behind/above filters */}


        <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-full p-2 flex flex-wrap justify-center gap-2 md:gap-4 shadow-xl border border-white/20 relative z-10 w-full max-w-[95%] md:max-w-[80%] lg:max-w-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-serif text-xs md:text-sm tracking-widest uppercase transition-all border ${activeCategory === cat
                ? 'border-white/60 bg-white/10 text-white'
                : 'border-transparent text-[#EBEBDF]/70 hover:text-white hover:border-white/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        className="relative w-full h-[350px] md:h-[550px] flex justify-center items-center mb-16"
        style={{ perspective: '1200px' }}
      >
        {filteredItems.length === 0 && (
          <p className="text-[#EBEBDF]/50 font-serif text-xl">Немає робіт у цій категорії.</p>
        )}

        {filteredItems.map((item, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);

          if (absOffset > 2) return null; // Render only nearby items

          // Adjust translateX and rotation for mobile
          const xFactor = isMobile ? 65 : 45;
          const translateX = offset * xFactor; // percentage
          const translateZ = absOffset * (isMobile ? -150 : -250); // px
          const rotateY = offset * -30; // deg
          const opacity = absOffset > 1 ? 0 : 1 - (absOffset * 0.3);
          const zIndex = 10 - absOffset;

          return (
            <div
              key={item.id}
              className="absolute top-0 w-[260px] md:w-[450px] h-full rounded-[30px] overflow-hidden transition-all duration-700 ease-out shadow-2xl cursor-pointer border border-[#EBEBDF]/10"
              style={{
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                zIndex,
                opacity,
              }}
              onClick={() => setActiveIndex(index)}
            >
              {item.image ? (
                <img src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#1A2E16] flex items-center justify-center">
                  <span className="text-[#EBEBDF]/30 font-serif text-sm">Фото відсутнє</span>
                </div>
              )}

              {/* Only show text on active item */}
              <div className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0a1208] via-[#0a1208]/80 to-transparent transition-opacity duration-500 ${offset === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-[#EBEBDF] font-serif text-lg md:text-xl uppercase tracking-widest mb-1">{item.title}</h3>
                <p className="text-[#EBEBDF]/80 font-serif text-xs md:text-sm mb-4 line-clamp-2">{item.description}</p>
                <p className="text-[#EBEBDF]/50 text-xs font-serif tracking-wider">{item.date}</p>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        {activeIndex > 0 && (
          <button onClick={prev} className="absolute left-2 md:left-24 lg:left-32 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md bg-black/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        )}
        {activeIndex < filteredItems.length - 1 && (
          <button onClick={next} className="absolute right-2 md:right-24 lg:right-32 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md bg-black/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        )}
      </div>

      {/* Artist Info Block */}
      {currentItem && currentItem.artist && (
        <div className="bg-white/5 backdrop-blur-md rounded-[40px] py-4 px-6 md:px-8 flex items-center gap-4 md:gap-6 shadow-2xl border border-white/20 w-[95%] max-w-[700px]">
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 relative border border-white/30">
            {currentItem.artist.image ? (
              <img src={`${import.meta.env.BASE_URL}${currentItem.artist.image.replace(/^\//, '')}`} alt={currentItem.artist.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#1A2E16]" />
            )}
          </div>
          <div className="flex-grow font-serif">
            <h4 className="text-[#EBEBDF] text-base md:text-xl tracking-widest uppercase mb-1">{currentItem.artist.name}</h4>
            <p className="text-[#EBEBDF]/70 text-[10px] md:text-xs tracking-wider uppercase">{currentItem.artist.description}</p>
          </div>
          <button onClick={openBooking} className="px-6 py-2 md:px-8 md:py-3 border border-white/50 text-[#EBEBDF] rounded-full uppercase tracking-widest text-[10px] md:text-sm hover:bg-[#EBEBDF] hover:text-[#122110] transition-colors whitespace-nowrap">
            Записатись
          </button>
        </div>
      )}
    </div>
  );
};
