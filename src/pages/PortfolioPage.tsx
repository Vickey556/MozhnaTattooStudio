import { useState } from 'react';
import { CoverflowGallery } from '../components/CoverflowGallery';
import { useArtists } from '../hooks/useArtists';
import { usePortfolio } from '../hooks/usePortfolio';
import { useBooking } from '../context/BookingContext';
import { Button } from '../components/ui/Button';

export const PortfolioPage = () => {
  const { openBooking } = useBooking();
  const { artists: masters, loading: loadingArtists } = useArtists();
  const { works, loading: loadingWorks } = usePortfolio();
  
  const [activeMaster, setActiveMaster] = useState<string>('Всі майстри');

  const filteredWorks = activeMaster === 'Всі майстри' 
    ? works 
    : works.filter(work => work.artist && work.artist.name.toUpperCase() === activeMaster.toUpperCase());

  const filters = ['Всі стилі', 'Татуювання', 'Пірсинг', 'Графіка', 'Орнаментал', 'Мініатюра'];

  if (loadingArtists || loadingWorks) {
    return <div className="min-h-screen pt-32 pb-24 flex items-center justify-center font-serif text-[#EBEBDF]">Завантаження...</div>;
  }

  return (
    <div className="pt-14 pb-24 px-4 min-h-screen font-serif text-[#F0F4E8] max-w-[100%] mx-auto overflow-hidden">
      <h1 className="text-3xl md:text-4xl text-center uppercase tracking-wider mb-12">Портфоліо</h1>

      {/* Master Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-0 max-w-4xl mx-auto px-4">
        <button
          onClick={() => setActiveMaster('Всі майстри')}
          className={`px-6 py-2 rounded-full border transition-colors ${activeMaster === 'Всі майстри'
            ? 'bg-[#6F892E] border-[#6F892E] text-[#122110]'
            : 'border-[#73934A]/50 hover:border-[#6F892E]'
            }`}
        >
          Всі майстри
        </button>
        {masters.map(master => (
          <button
            key={master.id}
            onClick={() => setActiveMaster(master.name)}
            className={`px-6 py-2 rounded-full border transition-colors ${activeMaster === master.name
              ? 'bg-[#6F892E] border-[#6F892E] text-[#122110]'
              : 'border-[#73934A]/50 hover:border-[#6F892E]'
              }`}
          >
            {master.name}
          </button>
        ))}
      </div>

      <div className="w-full bg-cover bg-center bg-fixed py-0 relative before:absolute before:inset-0">
        <div className="relative z-10">
          <CoverflowGallery items={filteredWorks} categories={filters} />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button onClick={() => openBooking()}>
          Записатися на сеанс
        </Button>
      </div>
    </div>
  );
};
