import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { ReviewsSection } from './HomePage';
import { FAQItem } from '../components/FAQItem';
import { CoverflowGallery } from '../components/CoverflowGallery';
import type { GalleryItem } from '../components/CoverflowGallery';

const piercingWorks: GalleryItem[] = [
  {
    id: '1',
    image: '',
    title: 'ПІРСИНГ HELIX',
    description: 'Акуратний прокол хряща з титановою прикрасою.',
    date: 'Квітень 2024',
    category: 'Вуха',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: ''
    }
  },
  {
    id: '2',
    image: '',
    title: 'ПІРСИНГ NOSTRIL',
    description: 'Класичний прокол крила носа з кільцем.',
    date: 'Березень 2024',
    category: 'Ніс',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: ''
    }
  },
  {
    id: '3',
    image: '',
    title: 'ПІРСИНГ SEPTUM',
    description: 'Прокол перегородки носа з циркуляром.',
    date: 'Травень 2024',
    category: 'Ніс',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: ''
    }
  }
];

const filters = ['Всі стилі', 'Вуха', 'Ніс', 'Губи', 'Мікродермали', 'Брови'];

export const PiercingPage = () => {
  const { openBooking } = useBooking();

  return (
    <div className="pt-32 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">
      
      {/* Hero Section */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] text-center uppercase tracking-wider mb-20 md:mb-32">ПІРСИНГ</h1>

      {/* Piercing Types Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32">
        <h2 className="text-4xl md:text-5xl mb-16 text-center uppercase tracking-wider">ВИДИ ПРОКОЛІВ</h2>
        <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-24">
           {/* Left Labels */}
           <div className="flex flex-row md:flex-col flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 w-full md:w-auto text-center md:text-right">
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
           <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] relative z-10 flex-shrink-0 my-4 md:my-0">
             <img src="/piercing.png" alt="3D Piercing Model" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(111,137,46,0.3)]" />
           </div>

           {/* Right Labels */}
           <div className="flex flex-row md:flex-col flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 w-full md:w-auto text-center md:text-left">
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
      <section className="pt-10 pb-40 px-4 mb-32 relative overflow-visible flex justify-center">
        <div className="w-full max-w-[1000px] text-center flex flex-col items-center relative z-10">
          <h2 className="text-3xl md:text-4xl mb-4 uppercase tracking-widest text-[#EBEBDF] font-serif">ОНЛАЙН ЗАПИС ВІДКРИТО</h2>
          <p className="text-base md:text-lg opacity-90 mb-12 font-serif text-[#EBEBDF]">Встигни забронювати зручний для себе день та час!</p>
          
          {/* Arch image */}
          <div className="relative w-[90%] md:w-[700px] aspect-[4/3] md:aspect-[3/2] mx-auto rounded-t-full overflow-hidden shadow-2xl bg-[#1A2E16]">
            <img src="booking.png" alt="Studio" className="w-full h-full object-cover" />
          </div>

          {/* Button overlapping the bottom */}
          <button onClick={openBooking} className="relative z-10 mt-10 px-12 py-5 bg-[#6F892E] text-[#122110] uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-[#EBEBDF] hover:text-[#122110] transition-colors shadow-xl border border-transparent font-serif font-bold">
            ЗАПИСАТИСЯ ОНЛАЙН
          </button>
        </div>
      </section>

      {/* FAQ / How to Book */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32 flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-left uppercase tracking-widest text-[#EBEBDF] font-serif">ЩО ПОТРІБНО ЗНАТИ?</h2>
        </div>
        
        <div className="lg:w-2/3 flex flex-col border-t border-[#EBEBDF]/30">
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
            question="ПЕРЕНЕСЕННЯ ТА ВІДМІНА СЕАНСУ"
            answer="Будь ласка, повідомляйте про зміну планів мінімум за 24 години. В такому випадку ми збережемо вашу передоплату для перенесення на наступний візит."
          />
          <FAQItem 
            question="ПРОТИПОКАЗИ" 
            answer="Пірсинг не робиться при цукровому діабеті, епілепсії, захворюваннях крові, а також під час вагітності та лактації." 
          />
          <FAQItem
            question="ПІДГОТОВКА ДО СЕАНСУ"
            answer="Обов'язково поїжте перед сеансом, щоб уникнути запаморочення. Не вживайте алкоголь за 24 години до візиту. Якщо ви маєте схильність до алергічних реакцій на метали (крім титану), попередьте про це майстра."
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 max-w-[100%] mx-auto mb-16 overflow-hidden">
        <CoverflowGallery items={piercingWorks} categories={filters} />
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

