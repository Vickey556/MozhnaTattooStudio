import { Link } from 'react-router-dom';
import { useSupabaseData } from '../hooks/useSupabaseData';

export const masters = [
  {
    id: 'nadiya-mozhaieva',
    name: "НАДІЯ МОЖАЄВА",
    specs: "Татуювання, пірсинг, навчання, арт сеанс",
    image: "/Mozhaeva.jpg",
    experience: "7 років",
    price: "від 2000 грн",
    inst: "@nadiia.mo.tattoo",
    instLink: "https://www.instagram.com/nadiia.mo.tattoo"
  },
  {
    id: 'viktoria-teliatnyk',
    name: "ТЕЛЯТНИК ВІКТОРІЯ",
    specs: "Татуювання",
    image: "/Teliatnyk.jpg",
    experience: "2 роки",
    price: "від 1500 грн",
    inst: "@toska.tatt",
    instLink: "https://www.instagram.com/toska.tatt"
  },
  {
    id: 'anna-vovna',
    name: "ВОВНА АННА",
    specs: "Татуювання, навчання, арт-сеанс",
    image: "/Vovna.jpg",
    experience: "5 років",
    price: "від 1500 грн",
    inst: "@psycho.art.tattoo",
    instLink: "https://www.instagram.com/psycho.art.tattoo"
  },
  {
    id: 'anastasia-starynets',
    name: "АНАСТАСІЯ СТАРИНЕЦЬ",
    specs: "Пірсинг, навчання",
    image: "/Starinets.jpg",
    experience: "3 роки",
    price: "від 300 грн",
    inst: "@piercing_che",
    instLink: "https://www.instagram.com/piercing_che"
  },
  {
    id: 'vitalina-shum',
    name: "ВІТАЛІНА ШУМ",
    specs: "Татуювання",
    image: "/Shum.jpg",
    experience: "2 роки",
    price: "від 1500 грн",
    inst: "@rmviqs",
    instLink: "https://www.instagram.com/rmviqs"
  }
];

export const ArtistsPage = () => {
  const { artists: dbArtists } = useSupabaseData();

  const displayArtists = dbArtists.length > 0 
    ? dbArtists.map(a => ({
        id: a.id,
        name: a.name,
        specs: a.role || a.description || "Майстер",
        image: a.image_url || "",
        experience: "Деталі на сторінці",
        price: "Уточнюйте",
        inst: "",
        instLink: ""
      }))
    : masters;

  return (
    <div className="pt-14 pb-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-serif text-3xl md:text-4xl text-center uppercase tracking-wider mb-8">Наші Майстри</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {displayArtists.map((master) => (
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
