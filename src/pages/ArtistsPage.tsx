import { Link } from 'react-router-dom';

export const masters = [
  {
    id: 'nadiya-mozhaieva',
    name: "НАДІЯ МОЖАЄВА",
    specs: "Татуювання, пірсинг, навчання, арт сеанс",
    image: "/Mozhaeva.jpg",
    experience: "7 років",
    price: "від 2000 грн",
    inst: "@mozhaieva_tattoo"
  },
  {
    id: 'viktoria-teliatnyk',
    name: "ТЕЛЯТНИК ВІКТОРІЯ",
    specs: "Татуювання",
    image: "/Teliatnyk.jpg",
    experience: "4 роки",
    price: "від 1500 грн",
    inst: "@teliatnyk.tattoo"
  },
  {
    id: 'anna-vovna',
    name: "ВОВНА АННА",
    specs: "Татуювання, навчання, арт-сеанс",
    image: "/Vovna.jpg",
    experience: "5 років",
    price: "від 1500 грн",
    inst: "@vovna.tattoo"
  },
  {
    id: 'anastasia-starynets',
    name: "АНАСТАСІЯ СТАРИНЕЦЬ",
    specs: "Пірсинг, навчання",
    image: "/Starinets.jpg",
    experience: "3 роки",
    price: "від 500 грн",
    inst: "@starynets_piercing"
  },
  {
    id: 'vitalina-shum',
    name: "ВІТАЛІНА ШУМ",
    specs: "Татуювання",
    image: "/tattoo_artist_2_1777048821101.png",
    experience: "2 роки",
    price: "від 1500 грн",
    inst: "@shum_tattoo"
  },
  {
    id: 'iryna-miller',
    name: "ІРИНА МІЛЛЕР",
    specs: "Перманентний макіяж, ламінування",
    image: "/tattoo_artist_3_1777048833890.png",
    experience: "6 років",
    price: "від 1500 грн",
    inst: "@miller_pm"
  }
];

export const ArtistsPage = () => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-screen">
      <h1 className="font-serif text-5xl md:text-7xl mb-16 text-center uppercase">Наші Майстри</h1>

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
                src={master.image}
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
