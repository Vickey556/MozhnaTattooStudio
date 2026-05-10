import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { ReviewsSection } from './HomePage';
import { FAQItem } from '../components/FAQItem';
import { CoverflowGallery } from '../components/CoverflowGallery';
import type { GalleryItem } from '../components/CoverflowGallery';

const tattooWorks: GalleryItem[] = [
  {
    id: '1',
    image: 'balance.jpg',
    title: 'ТАТУЮВАННЯ БАЛАНС',
    description: 'Унікальна графічна робота, що символізує внутрішній спокій та гармонію.',
    date: 'Травень 2024',
    category: 'Графіка',
    artist: {
      name: 'Надія Можаєва',
      description: 'Майстер графіки та мінімалізму',
      image: 'Можаєва Надія.png'
    }
  },
  {
    id: '2',
    image: 'cherryblossome.jpg',
    title: 'КВІТУЧА САКУРА',
    description: 'Ніжне татуювання з гілочкою сакури в стилі мінімалізм.',
    date: 'Квітень 2024',
    category: 'Мінімалізм',
    artist: {
      name: 'Анна Вовна',
      description: 'Спеціаліст з кольорових робіт',
      image: 'Вовна Анна.png'
    }
  },
  {
    id: '3',
    image: 'fearandchaos.jpg',
    title: 'СТРАХ І ХАОС',
    description: 'Емоційна робота в темному стилі, що поєднує графіку та реалізм.',
    date: 'Березень 2024',
    category: 'Реалізм',
    artist: {
      name: 'Вікторія Телятник',
      description: 'Майстер чорно-білого реалізму',
      image: 'Телятник Вікторія.png'
    }
  },
  {
    id: '4',
    image: 'lotousback.jpg',
    title: 'ЛОТОС НА СПИНІ',
    description: 'Великомасштабна робота лотоса, що розпускається.',
    date: 'Січень 2024',
    category: 'Графіка',
    artist: {
      name: 'Надія Можаєва',
      description: 'Майстер графіки та мінімалізму',
      image: 'Можаєва Надія.png'
    }
  },
  {
    id: '5',
    image: 'sipofdeath.jpg',
    title: 'КОВТОК СМЕРТІ',
    description: 'Концептуальне татуювання з глибоким символізмом в стилі олдскул.',
    date: 'Лютий 2024',
    category: 'Олдскул',
    artist: {
      name: 'Надія Можаєва',
      description: 'Майстер графіки та мінімалізму',
      image: 'Можаєва Надія.png'
    }
  }
];

const filters = ['Всі стилі', 'Графіка', 'Олдскул', 'Мінімалізм', 'Кольорові', 'Реалізм'];

export const TattooPage = () => {
  const { openBooking } = useBooking();

  return (
    <div className="pt-14 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">

      {/* Hero Section */}
      <h1 className="font-serif text-3xl md:text-4xl text-center uppercase tracking-wider">ТАТУЮВАННЯ</h1>

      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl mb-12 uppercase text-[#6F892E] tracking-tighter font-serif">Вартість послуг</h2>
            <div className="space-y-6">
              {[
                { name: "Консультація", price: "0 грн", desc: "Обговорення ідеї, розробка концепту та підбір місця" },
                { name: "Мінімальна вартість", price: "1500 грн", desc: "Прості тату, написи, символи до 10 см" },
                { name: "Сеанс татуювання", price: "6000-7000 грн", desc: "Повноцінний робочий день майстра (4-6 годин)" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#6F892E]/50 transition-all">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-xl uppercase tracking-widest">{item.name}</h3>
                    <span className="text-2xl text-[#6F892E] font-bold">{item.price}</span>
                  </div>
                  <p className="opacity-60 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <img src="work.png" className="w-[80%] opacity-80 mix-blend-lighten" alt="Tattoo process" />
          </div>
        </div>
      </section>

      <h1 className="font-serif text-3xl md:text-4xl text-center uppercase tracking-wider">ПОРТФОЛІО</h1>
      {/* --- СПІЛЬНИЙ КОНТЕЙНЕР ДЛЯ ГАЛЕРЕЇ ТА МАЙСТРА З ФОНОМ --- */}
      <div
        className="relative w-full bg-cover bg-center bg-fixed mb-32"
        style={{ backgroundImage: "url('/gallery-bg.jpg')" }} // Вставте сюди шлях до вашого фонового зображення
      >

        <div className="relative z-10">

          {/* Portfolio Section */}
          <section className="pt-0 pb-12 max-w-[100%] mx-auto overflow-hidden">
            <CoverflowGallery items={tattooWorks} categories={filters} />
          </section>

        </div>
      </div>

      {/* FAQ / How to Book */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32 flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-left uppercase tracking-widest text-[#EBEBDF] font-serif">ЩО ПОТРІБНО ЗНАТИ?</h2>
        </div>

        <div className="lg:w-2/3 flex flex-col border-t border-[#EBEBDF]/30">
          <FAQItem
            question="ГОЛОВНЕ"
            answer="Ми працюємо за попереднім записом. Консультація безкоштовна. Ми обговоримо ескіз, розмір та місце нанесення, після чого майстер зможе назвати точну вартість сеансу."
          />
          <FAQItem
            question="ПРОЦЕС ЗАПИСУ"
            answer={"1. Натисніть кнопку 'Записатися онлайн'.\n2. Оберіть майстра та бажану послугу.\n3. Виберіть вільну дату та час у календарі.\n4. Залиште свої контактні дані для підтвердження."}
          />
          <FAQItem
            question="ОПЛАТА"
            answer="Мінімальна вартість сеансу — 1500 грн. Бронювання дати відбувається за передоплатою. Залишок суми оплачується після сеансу готівкою або переказом на карту."
          />
          <FAQItem
            question="ПЕРЕНЕСЕННЯ ТА ВІДМІНА СЕАНСУ"
            answer="Будь ласка, повідомляйте про зміну планів мінімум за 24 години. В такому випадку ми збережемо вашу передоплату для перенесення на наступний візит."
          />
          <FAQItem
            question="ПРОТИПОКАЗИ"
            answer="Татуювання не рекомендується робити при цукровому діабеті, епілепсії, захворюваннях крові, шкірних захворюваннях у стадії загострення, а також під час вагітності та лактації."
          />
          <FAQItem
            question="ПІДГОТОВКА ДО СЕАНСУ"
            answer="За 24 години до сеансу відмовтеся від алкоголю та енергетиків. Добре виспіться та щільно поїжте перед сеансом. Одягніть зручний одяг, що не перетискає та дає доступ до ділянки тіла, де буде тату."
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

          <div className="relative w-[90%] md:w-[700px] aspect-[4/3] md:aspect-[3/2] mx-auto rounded-t-full overflow-hidden shadow-2xl bg-[#1A2E16]">
            <img src="booking.png" alt="Studio" className="w-full h-full object-cover" />
          </div>

          <button onClick={openBooking} className="relative z-10 mt-10 px-12 py-5 bg-[#6F892E] text-[#122110] uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-[#EBEBDF] hover:text-[#122110] transition-colors shadow-xl border border-transparent font-serif font-bold">
            ЗАПИСАТИСЯ ОНЛАЙН
          </button>
        </div>
      </section>

    </div>
  );
};