import { useBooking } from '../context/BookingContext';
import { useState } from 'react';
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
  const { openBooking } = useBooking(); const [selectedType, setSelectedType] = useState(0);

  const piercingTypes = [
    { name: "Мочка вуха", price: "300", top: "82%", left: "70%", desc: "Найпопулярніший і класичний вид пірсингу, який заживає найшвидше." },
    { name: "Крило носа", price: "450", top: "45%", left: "58%", desc: "Класичний прокол ніздрі (Nostril), виглядає дуже ніжно з маленьким камінчиком." },
    { name: "Септум", price: "450", top: "48%", left: "50%", desc: "Прокол центральної перегородки носа, який за потреби можна сховати." },
    { name: "Хелікс", price: "500", top: "25%", left: "72%", desc: "Прокол верхньої частини хряща вушної раковини." },
    { name: "Флет", price: "500", top: "30%", left: "62%", desc: "Плаский прокол внутрішнього хряща вуха, ідеально для красивих прикрас-кластерів." },
    { name: "Трагус", price: "500", top: "52%", left: "63%", desc: "Прокол козелка вуха — невеликого виступу перед вушним каналом." },
    { name: "Конч", price: "500", top: "55%", left: "67%", desc: "Прокол центральної частини вушної раковини (чаші)." },
    { name: "Руук", price: "550", top: "38%", left: "62%", desc: "Вертикальний прокол внутрішнього хряща вуха над козелком." },
    { name: "Дейз", price: "550", top: "48%", left: "61%", desc: "Прокол самого внутрішнього хряща, який знаходиться над слуховим каналом." },
    { name: "Брова", price: "550", top: "18%", left: "40%", desc: "Вертикальний або горизонтальний прокол бровної дуги." },
    { name: "Губа", price: "550", top: "65%", left: "44%", desc: "Будь-який вид проколу навколо рота (Лабрет, Монро, Медуза)." },
    { name: "Смайл", price: "550", top: "60%", left: "50%", desc: "Прокол вуздечки під верхньою губою, який видно лише при посмішці." },
    { name: "Язик", price: "600", top: "62%", left: "50%", desc: "Класичний вертикальний прокол язика — швидко заживає та не заважає." },
    { name: "Пуп", price: "600", top: "90%", left: "50%", desc: "Класичний пірсинг живота, що підкреслює фігуру." },
    { name: "Брідж", price: "600", top: "32%", left: "50%", desc: "Горизонтальний прокол перенісся на рівні очей." },
    { name: "Індастріал", price: "700", top: "22%", left: "68%", desc: "Подвійний прокол хряща вуха, з'єднаний однією довгою штангою." },
    { name: "Сосок", price: "700", top: "85%", left: "40%", desc: "Горизонтальний або вертикальний прокол, виконується максимально безпечно." },
    { name: "Мікродермал", price: "1200", top: "55%", left: "30%", desc: "Внутрішньошкірна імплантація прикраси на будь-якій частині тіла." }
  ];

  // У рендері:
  <section className="px-4 py-20 bg-cover bg-fixed" style={{ backgroundImage: "url('/gallery-bg.jpg')" }}>
    <h2 className="text-center text-3xl uppercase mb-16 tracking-[0.2em]">Види проколів</h2>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

      {/* Модель з точкою */}
      <div className="relative w-[300px] h-[400px] bg-white/5 rounded-full p-8 backdrop-blur-md">
        <img src="/piercing.png" className="w-full h-full object-contain" alt="Model" />
        {/* Анімована точка */}
        <div
          className="absolute w-4 h-4 bg-[#6F892E] rounded-full shadow-[0_0_15px_#6F892E] transition-all duration-500 ease-in-out"
          style={{ top: piercingTypes[selectedType].top, left: piercingTypes[selectedType].left }}
        />
      </div>

      {/* Слайдер/Опис */}
      <div className="flex-1 space-y-8">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {piercingTypes.map((t, i) => (
            <button
              key={i}
              onClick={() => setSelectedType(i)}
              className={`px-6 py-2 rounded-full border transition-all whitespace-nowrap ${selectedType === i ? 'bg-[#6F892E] border-[#6F892E] text-black' : 'border-white/20'}`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
          <h3 className="text-4xl font-serif mb-2">{piercingTypes[selectedType].name}</h3>
          <p className="text-[#6F892E] text-2xl mb-4">{piercingTypes[selectedType].price} грн</p>
          <p className="opacity-70 leading-relaxed text-lg">{piercingTypes[selectedType].desc}</p>
        </div>
      </div>
    </div>
  </section>

  return (
    <div className="pt-14 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">

      {/* Hero Section */}
      <h1 className="font-serif text-3xl md:text-4xl text-center uppercase tracking-wider">ПІРСИНГ</h1>

      {/* Piercing Types Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32">
        <h2 className="text-3xl md:text-4xl mt-5 mb-16 text-center uppercase tracking-wider">ВИДИ ПРОКОЛІВ</h2>
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

      {/* Portfolio Section */}
      <section className="py-24 max-w-[100%] mx-auto mb-16 overflow-hidden">
        <CoverflowGallery items={piercingWorks} categories={filters} />
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
            <img src="booking.png" alt="Studio" className="w-full h-full object-cover" />
          </div>

          {/* Button overlapping the bottom */}
          <button onClick={openBooking} className="relative z-10 mt-10 px-12 py-5 bg-[#6F892E] text-[#122110] uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-[#EBEBDF] hover:text-[#122110] transition-colors shadow-xl border border-transparent font-serif font-bold">
            ЗАПИСАТИСЯ ОНЛАЙН
          </button>
        </div>
      </section>

    </div>
  );
};

