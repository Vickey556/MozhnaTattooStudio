import { Link } from 'react-router-dom';
import { useArtists } from '../hooks/useArtists';

export const ArtistsPage = () => {
  const { artists: masters, loading } = useArtists();

  if (loading) {
    return <div className="min-h-screen pt-32 pb-24 flex items-center justify-center font-serif text-[#EBEBDF]">Завантаження...</div>;
  }

  return (
    <div className="pt-14 pb-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-serif text-3xl md:text-4xl text-center uppercase tracking-wider mb-8">Наші Майстри</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {masters.map((master) => (
          <Link
            key={master.id}
            to={`/artists/${master.id}`}
            className="flex flex-col items-center group cursor-pointer w-full relative outline-none"
          >
            <div className="absolute top-0 w-full max-w-sm aspect-[3/4] master-plaque -z-0 transition-all duration-500 translate-x-4 translate-y-4 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100"></div>

            <div className="w-full max-w-sm aspect-[3/4] rounded-[40px] overflow-hidden mb-6 relative transition-transform duration-500 z-10 group-hover:-translate-y-2 bg-transparent">
              <img
                src={master.image && master.image.startsWith('http') ? master.image : `${import.meta.env.BASE_URL}${master.image?.startsWith('/') ? master.image.slice(1) : (master.image || 'placeholder.jpg')}`}
                alt={master.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop';
                }}
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl mb-2 transition-colors duration-300 z-10 group-hover:text-[#6F892E]">{master.name}</h3>
            <p className="font-serif text-sm opacity-70 text-center z-10">{master.specs}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
