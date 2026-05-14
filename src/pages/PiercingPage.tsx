import { useBooking } from '../context/BookingContext';
import { ReviewsSection } from './HomePage';
import { FAQItem } from '../components/FAQItem';
import { CoverflowGallery } from '../components/CoverflowGallery';
import type { GalleryItem } from '../components/CoverflowGallery';
import { PiercingViewer } from '../components/PiercingViewer';

export const piercingWorks: GalleryItem[] = [
  {
    id: '1',
    image: '/helixwhite.jpg',
    title: 'Прокол хелікс',
    description: 'Акуратний прокол хряща з титановою прикрасою.',
    date: 'Квітень 2024',
    category: 'Вухо',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '2',
    image: '/nostril.jpg',
    title: 'Прокол крила носа',
    description: 'Класичний прокол крила носа з кільцем.',
    date: 'Березень 2024',
    category: 'Ніс',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '3',
    image: '/lobesimple.jpg',
    title: 'Прокол мочки вуха',
    description: 'Прокол мочки',
    date: 'Травень 2024',
    category: 'Вухо',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '4',
    image: '/lobe1.jpg',
    title: 'Прокол мочки вуха',
    description: 'Прокол мочки',
    date: 'Травень 2024',
    category: 'Вухо',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '5',
    image: '/vertycallabret.jpg',
    title: 'Прокол вертикальний лабрет',
    description: 'Прокол губи',
    date: 'Травень 2024',
    category: 'Губа',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '6',
    image: '/vertycallabret2.jpg',
    title: 'Прокол вертикальний лабрет',
    description: 'Прокол губи',
    date: 'Травень 2024',
    category: 'Губа',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '7',
    image: '/tongue.jpg',
    title: 'Прокол язка',
    description: 'Прокол язика',
    date: 'Травень 2024',
    category: 'Язик',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '8',
    image: '/rook.jpg',
    title: 'Прокол руук',
    description: 'Прокол верхньої внутрішньої складки хряща.',
    date: 'Травень 2024',
    category: 'Вухо',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '9',
    image: '/eyebrow.jpg',
    title: 'Прокол брови',
    description: 'Прокол брови',
    date: 'Травень 2024',
    category: 'Брова',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '10',
    image: '/upperlobe.jpg',
    title: 'Додатковий прокол мочки',
    description: 'Прокол мочки вуха',
    date: 'Травень 2024',
    category: 'Вухо',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },
  {
    id: '11',
    image: '/helix.jpg',
    title: 'Прокол хелікс',
    description: 'Акуратний прокол хряща з титановою прикрасою.',
    date: 'Квітень 2024',
    category: 'Вухо',
    artist: {
      name: 'Анастасія Старинець',
      description: 'Майстер пірсингу',
      image: '/Starinets.jpg'
    }
  },

];

const filters = ['Всі проколи', 'Вухо', 'Ніс', 'Губа', 'Мікродермали', 'Брова', 'Язик'];

export const PiercingPage = () => {
  const { openBooking } = useBooking();

  return (
    <div className="pt-14 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">
      {/* Hero Section */}
      <h1 className="font-serif text-3xl md:text-4xl text-center uppercase tracking-wider">ПІРСИНГ</h1>

      {/* 3D Piercing Viewer Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32 pt-12">
        <PiercingViewer onBook={(data) => openBooking(data ? { ...data, service: 'Пірсинг' } : { service: 'Пірсинг' })} />
      </section>

      {/* Portfolio Section */}
      <section
        className="relative w-full pt-12 pb-24 bg-cover bg-center bg-fixed mb-32 overflow-hidden before:absolute before:inset-0 before:bg-black/40"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}piercingbg.png')` }} // або piercingbg.png
      >
        <div className="relative z-10 max-w-[100%] mx-auto">

          {/* 1. Заголовок (зменшили mb-16 на mb-8, щоб фільтри підтягнулися вище) */}
          <h2 className="text-3xl md:text-4xl mb-0 text-center uppercase tracking-wider text-[#EBEBDF]">
            ПОРТФОЛІО
          </h2>

          {/* 2. Галерея (фільтри та слайдер знаходяться всередині CoverflowGallery) */}
          <CoverflowGallery items={piercingWorks} categories={filters} />

        </div>
      </section>

      {/* Jewelry Section */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32">
        <h2 className="text-3xl md:text-4xl mt-5 mb-16 text-center uppercase tracking-wider">Прикраси в наявності</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Титановий лабрет', price: 'від 300 грн', img: 'https://www.instagram.com/p/DX1gn_WDYR_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
            { name: 'Кільце з фіанітами', price: 'від 650 грн', img: 'https://images.unsplash.com/photo-1599643478524-fb66f70d00f0?q=80&w=600&auto=format&fit=crop' },
            { name: 'Кластер для хряща', price: 'від 800 грн', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop' },
            { name: 'Банан для пупка', price: 'від 500 грн', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#6F892E]/50 transition-colors group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-black/50">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif mb-2 text-[#EBEBDF]">{item.name}</h3>
                <p className="text-[#6F892E] font-bold tracking-widest">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="opacity-70 max-w-2xl mx-auto font-serif text-sm md:text-base">
            * У студії представлений великий вибір титанових прикрас для будь-якого виду проколу. Ми використовуємо тільки біосумісний гіпоалергенний титан (ASTM F136), який ідеально підходить для первинного проколу та постійного носіння.
          </p>
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


      {/* Reviews */}
      <ReviewsSection />

      {/* Booking Block */}
      <section className="pt-10 pb-40 px-4 mb-32 relative overflow-visible flex justify-center">
        <div className="w-full max-w-[1000px] text-center flex flex-col items-center relative z-10">
          <h2 className="text-3xl md:text-4xl mb-4 uppercase tracking-widest text-[#EBEBDF] font-serif">ОНЛАЙН ЗАПИС ВІДКРИТО</h2>
          <p className="text-base md:text-lg opacity-90 mb-12 font-serif text-[#EBEBDF]">Встигни забронювати зручний для себе день та час!</p>

          {/* Arch image */}
          <div className="relative w-[90%] md:w-[700px] aspect-[4/3] md:aspect-[3/2] mx-auto rounded-t-full overflow-hidden shadow-2xl bg-[#1A2E16]">
            <img src={`${import.meta.env.BASE_URL}booking.png`} alt="Studio" className="w-full h-full object-cover" />
          </div>

          {/* Button overlapping the bottom */}
          <button onClick={() => openBooking({ service: 'Пірсинг' })} className="relative z-10 mt-10 px-12 py-5 bg-[#6F892E] text-[#122110] uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-[#EBEBDF] hover:text-[#122110] transition-colors shadow-xl border border-transparent font-serif font-bold">
            ЗАПИСАТИСЯ ОНЛАЙН
          </button>
        </div>
      </section>

    </div>
  );
};
