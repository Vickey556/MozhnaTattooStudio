import React from 'react';
import { Link } from 'react-router-dom';
import { useArtists } from '../../hooks/useArtists';
import { StarIcon } from '../ui/Icons';
import { SectionHeading } from '../ui/SectionHeading';

export const MastersSection = () => {
  const { artists: masters } = useArtists();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const sliderRef = React.useRef<HTMLDivElement>(null);

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
      className="py-12 md:py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto noise-bg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-16 gap-4 md:gap-6">
        <SectionHeading align="left" className="text-center md:text-left">Наші майстри</SectionHeading>

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
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-2 md:pb-8 -mx-4 px-4 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {masters.map((master, index) => {
          return (
            <Link
              key={index}
              to={`/artists/${master.id}`}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0 w-[calc(100%-24px)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center relative outline-none transition-transform duration-500 ease-out"
            >
              <div className={`absolute top-0 w-full aspect-[3/4] master-plaque -z-0 transition-all duration-500 translate-x-4 translate-y-4 scale-95 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0'}`}></div>

              <div className={`w-full aspect-[3/4] rounded-[40px] overflow-hidden mb-6 relative transition-transform duration-500 z-10 ${index === activeIndex ? '-translate-y-2' : ''} bg-transparent`}>
                <img
                  src={`${import.meta.env.BASE_URL}${master.silhouetteImage || (master.image?.startsWith('/') ? master.image.slice(1) : master.image)}`}
                  alt={master.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`font-serif text-xl md:text-2xl mb-2 transition-colors duration-300 z-10 ${index === activeIndex ? 'text-[#6F892E]' : ''}`}>{master.name}</h3>
              <p className="font-serif text-sm opacity-70 text-center z-10">{master.specs}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-4 md:mt-8">
        {masters.map((_, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className="focus:outline-none">
            <StarIcon className={`w-6 h-6 transition-all duration-300 ${index === activeIndex ? 'text-[#EBEBDF] scale-125' : 'text-[#EBEBDF]/30 hover:text-[#EBEBDF]/60'}`} />
          </button>
        ))}
      </div>
    </section>
  );
};
