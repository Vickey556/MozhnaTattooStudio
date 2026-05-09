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

      {/* Preparation Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32 flex flex-col md:flex-row gap-16 items-center justify-between">

        {/* Ліва частина - Зображення (прибрано md:justify-start) */}
        {/* Irregular Star Mask */}
        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <image
              href="work.png"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Права частина - Текст */}
        <div className="md:w-[50%]">
          <h2 className="mt-12 md:mt-5 text-3xl md:text-3xl mb-8 uppercase text-[#6F892E] tracking-wider leading-snug">
            ЯК ПІДГОТУВАТИСЬ ДО СЕАНСУ?
          </h2>

          <ul className="space-y-4 text-lg opacity-90 leading-[1.8] text-[#F0F4E8] text-justify md:text-left">
            <li className="flex gap-2 items-start">
              <p>Ваш комфорт у студії починається ще за добу до зустрічі. Щоб татуювання або пірсинг у Черкасах пройшли легко, за 24 години до візиту варто повністю відмовитися від алкоголю та енергетиків. Ці напої розріджують кров, що заважає роботі майстра та сповільнює загоєння. Замість вечірки краще добре виспатися — відпочилий організм набагато спокійніше реагує на процес.
                Ніколи не приходьте на сеанс голодними. Щільний сніданок — це ваш захист від запаморочення та зайвого стресу для імунітету. Також подбайте про зручний одяг, який не тисне та відкриває майстру доступ до потрібної ділянки тіла. Якщо ж ви відчуваєте слабкість або симптоми застуди, краще перенести візит, адже здоров'я — понад усе.
                Візьміть із собою улюблені солодощі чи солодку воду для підтримання рівня глюкози та обов'язково — гарний настрій. Дотримання цих простих правил гарантує, що ваш візит до нашої студії буде приємним, а результат — ідеальним.</p>
            </li>
          </ul>
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

      {/* Portfolio Section */}
      <section className="py-24 max-w-[100%] mx-auto mb-16 overflow-hidden">
        <CoverflowGallery items={tattooWorks} categories={filters} />
      </section>

      {/* Masters Section */}
      <section className="py-24 px-4 bg-[#1A2E16] border-y border-[#6F892E]/20 mb-32">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-2 border-[#6F892E]/50 relative p-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="/Можаєва Надія.png" alt="Надія Можаєва" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl mb-4 uppercase tracking-wider text-[#6F892E]">НАДІЯ МОЖАЄВА</h2>
            <p className="text-xl uppercase tracking-widest opacity-80 mb-8">Майстер татуювання</p>
            <p className="text-lg opacity-80 mb-12 leading-relaxed max-w-xl">
              Спеціалізується на графіці, лайнворку та мінімалізмі. Більше 5 років досвіду. Створює унікальні індивідуальні ескізи та втілює найсміливіші ідеї.
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

