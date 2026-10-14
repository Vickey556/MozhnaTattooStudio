import { Link } from 'react-router-dom';
import { useArtists } from '../../hooks/useArtists';
import { SectionHeading } from '../ui/SectionHeading';

export const MastersSection = () => {
  const { artists: masters } = useArtists();

  return (
    <section
      id="masters"
      className="py-12 md:py-24 noise-bg relative overflow-hidden"
    >
      <div className="px-4 md:px-12 lg:px-24 max-w-7xl mx-auto mb-8 md:mb-16">
        <SectionHeading align="left" className="text-center md:text-left">Наші майстри</SectionHeading>
      </div>

      <div
        className="marquee-wrapper flex w-full"
        style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
      >
        <div className="flex gap-[32px] pr-[32px] animate-marquee items-stretch" style={{ animationDuration: '35s' }}>
          {masters.map((master, index) => (
            <Link
              key={`set1-${index}`}
              to={`/artists/${master.id}`}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0 w-[260px] md:w-[300px] outline-none relative"
            >
              <div className="absolute top-0 left-0 w-full aspect-[3/4] master-plaque -z-0 translate-x-3 translate-y-3 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden mb-4 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                <img
                  src={`${import.meta.env.BASE_URL}${master.silhouetteImage || (master.image?.startsWith('/') ? master.image.slice(1) : master.image)}`}
                  alt={master.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <h3 className="font-serif text-xl mb-1 z-10 group-hover:text-[#6F892E] transition-colors duration-300">{master.name}</h3>
              <p className="font-serif text-sm opacity-70 text-center z-10">{master.specs}</p>
            </Link>
          ))}
        </div>

        <div className="flex gap-[32px] pr-[32px] animate-marquee items-stretch" aria-hidden="true" style={{ animationDuration: '35s' }}>
          {masters.map((master, index) => (
            <Link
              key={`set2-${index}`}
              to={`/artists/${master.id}`}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0 w-[260px] md:w-[300px] outline-none relative"
            >
              <div className="absolute top-0 left-0 w-full aspect-[3/4] master-plaque -z-0 translate-x-3 translate-y-3 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
              <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden mb-4 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                <img
                  src={`${import.meta.env.BASE_URL}${master.silhouetteImage || (master.image?.startsWith('/') ? master.image.slice(1) : master.image)}`}
                  alt={master.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <h3 className="font-serif text-xl mb-1 z-10 group-hover:text-[#6F892E] transition-colors duration-300">{master.name}</h3>
              <p className="font-serif text-sm opacity-70 text-center z-10">{master.specs}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
