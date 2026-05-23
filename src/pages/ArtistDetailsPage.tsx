import { useParams, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { useArtists } from '../hooks/useArtists';
import { usePortfolio } from '../hooks/usePortfolio';
import { CoverflowGallery } from '../components/CoverflowGallery';

export const ArtistDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { openBooking } = useBooking();
  const { getArtistById, loading: artistLoading } = useArtists();
  const { getWorksByArtist, loading: portfolioLoading } = usePortfolio();

  const master = getArtistById(id || '');

  if (artistLoading || portfolioLoading) {
    return <div className="min-h-screen pt-32 pb-24 flex items-center justify-center font-serif text-[#EBEBDF]">Завантаження...</div>;
  }

  if (!master) {
    return (
      <div className="pt-32 pb-24 px-4 min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl mb-6">Майстра не знайдено</h1>
        <Link to="/artists" className="text-[#6F892E] hover:underline font-serif">Повернутися до списку майстрів</Link>
      </div>
    );
  }

  const artistWorks = getWorksByArtist(master.name);

  const filters = ['Всі роботи', ...Array.from(new Set(artistWorks.map(w => w.category)))];

  return (
    <div className="pt-24 md:pt-32 pb-0 px-0 min-h-screen">

      {/* Intro Section */}
      <section className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-12 md:mb-24 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

        {/* Mobile Top Info (Hidden on Desktop) */}
        <div className="w-full flex flex-col lg:hidden">
          <Link to="/artists" className="text-sm font-serif opacity-60 hover:text-[#6F892E] transition-colors mb-4 flex items-center gap-2">
            ← Всі майстри
          </Link>
          <h1 className="font-serif text-4xl mb-2 text-[#6F892E] uppercase">{master.name}</h1>
          <p className="font-serif text-lg opacity-80 pb-4 border-b border-[#73934A]/30">Спеціалізація: {master.specs}</p>
        </div>

        {/* Master Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
          <div className="w-[85vw] sm:w-full max-w-md aspect-[3/4] relative">
            <div className="absolute top-0 w-full h-full master-plaque -z-0 translate-x-4 translate-y-4"></div>
            <div className="w-full h-full rounded-[40px] overflow-hidden relative z-10">
              <img
                src={master.image && master.image.startsWith('http') ? master.image : `${import.meta.env.BASE_URL}${master.image?.startsWith('/') ? master.image.slice(1) : (master.image || 'placeholder.jpg')}`}
                alt={master.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop';
                }}
              />
            </div>
          </div>
        </div>

        {/* Master Info */}
        <div className="w-full lg:w-1/2 flex flex-col mt-6 lg:mt-0">
          
          {/* Desktop Top Info (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col">
            <Link to="/artists" className="text-sm font-serif opacity-60 hover:text-[#6F892E] transition-colors mb-6 flex items-center gap-2">
              ← Всі майстри
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl mb-4 text-[#6F892E] uppercase">{master.name}</h1>
            <p className="font-serif text-xl opacity-80 mb-8 pb-8 border-b border-[#73934A]/30">Спеціалізація: {master.specs}</p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="flex justify-between items-center pb-4 border-b border-[#73934A]/10">
              <span className="font-serif opacity-70">Досвід роботи:</span>
              <span className="font-serif text-xl text-[#EBEBDF]">{master.experience}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[#73934A]/10">
              <span className="font-serif opacity-70">Вартість сеансу:</span>
              <span className="font-serif text-xl text-[#EBEBDF]">{master.price}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[#73934A]/10">
              <span className="font-serif opacity-70">Instagram:</span>
              <a href={master.instLink} target="_blank" rel="noopener noreferrer" className="font-serif text-xl text-[#6F892E] hover:underline">{master.inst}</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => openBooking({ artist: master.name })}
              className="px-8 py-4 bg-[#6F892E] text-[#122110] font-serif uppercase tracking-widest rounded-full hover:bg-white transition-colors text-center w-full sm:w-auto"
            >
              Записатися до майстра
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#0a1208] py-12 md:py-24 border-y border-[#73934A]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
          <h2 className="font-serif text-4xl mb-12 text-center uppercase">Портфоліо</h2>
        </div>

        {artistWorks.length > 0 ? (
          <div className="relative z-10 w-full mx-auto">
            <CoverflowGallery items={artistWorks} categories={filters} />
          </div>
        ) : (
          <p className="text-center font-serif opacity-70 px-4">Роботи цього майстра ще не додані в портфоліо.</p>
        )}

        <div className="mt-12 text-center">
          <a href={master.instLink} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full font-serif tracking-widest uppercase transition-colors border border-[#73934A]/50 text-[#EBEBDF] hover:border-[#6F892E] hover:text-[#6F892E]">
            Більше робіт в Instagram
          </a>
        </div>
      </section>
    </div>
  );
};


