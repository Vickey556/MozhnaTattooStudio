import { useParams, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { masters } from './ArtistsPage';

export const ArtistDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { openBooking } = useBooking();
  
  const master = masters.find(m => m.id === id);

  if (!master) {
    return (
      <div className="pt-32 pb-24 px-4 min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl mb-6">Майстра не знайдено</h1>
        <Link to="/artists" className="text-[#6F892E] hover:underline font-serif">Повернутися до списку майстрів</Link>
      </div>
    );
  }

  // Тимчасові фото портфоліо для конкретного майстра
  const portfolioPhotos = [
    'https://images.unsplash.com/photo-1598371839696-5e5bb00b059f?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550418390-e7b3992225bc?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1589710711910-1867115814ac?q=80&w=1974&auto=format&fit=crop',
  ];

  return (
    <div className="pt-32 pb-0 px-0 min-h-screen">
      
      {/* Intro Section */}
      <section className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Master Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
           <div className="w-full max-w-md aspect-[3/4] relative">
             <div className="absolute top-0 w-full h-full master-plaque -z-0 translate-x-4 translate-y-4"></div>
             <div className="w-full h-full rounded-[40px] overflow-hidden relative z-10">
                <img 
                  src={`${import.meta.env.BASE_URL}${master.image.replace(/^\//, '')}`} 
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
        <div className="w-full lg:w-1/2 flex flex-col">
          <Link to="/artists" className="text-sm font-serif opacity-60 hover:text-[#6F892E] transition-colors mb-6 flex items-center gap-2">
            ← Всі майстри
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-[#6F892E] uppercase">{master.name}</h1>
          <p className="font-serif text-xl opacity-80 mb-8 pb-8 border-b border-[#73934A]/30">Спеціалізація: {master.specs}</p>
          
          <div className="flex flex-col gap-6 mb-12">
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
              <a href="#" className="font-serif text-xl text-[#6F892E] hover:underline">{master.inst}</a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={openBooking}
              className="px-8 py-4 bg-[#6F892E] text-[#122110] font-serif uppercase tracking-widest rounded-full hover:bg-white transition-colors text-center w-full sm:w-auto"
            >
              Записатися до майстра
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#0a1208] py-24 px-4 md:px-12 lg:px-24 border-y border-[#73934A]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center uppercase">Портфоліо</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioPhotos.map((photo, index) => (
              <div key={index} className="rounded-3xl overflow-hidden aspect-[4/5] relative group border border-[#73934A]/20">
                <img src={photo} alt="Робота майстра" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <p className="font-serif text-[#6F892E] border border-[#6F892E] px-6 py-2 rounded-full backdrop-blur-sm">Переглянути</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-block px-8 py-3 rounded-full font-serif tracking-widest uppercase transition-colors border border-[#73934A]/50 text-[#EBEBDF] hover:border-[#6F892E] hover:text-[#6F892E]">
              Більше робіт в Instagram
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
