import { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { Link } from 'react-router-dom';
import { ReviewsSection } from './HomePage';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#73934A]/30 py-6">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none hover:text-[#6F892E] transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-2xl uppercase tracking-wider">{question}</span>
        <div className="w-8 h-8 flex items-center justify-center border border-[#73934A]/50 rounded-full group-hover:border-[#6F892E] transition-colors">
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="font-serif text-lg opacity-80 leading-relaxed whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
};

export const TattooPage = () => {
  const { openBooking } = useBooking();
  const [activeFilter, setActiveFilter] = useState('Всі стилі');

  const filters = ['Всі стилі', 'Графіка', 'Олдскул', 'Традишинал', 'Колір'];

  const portfolioPhotos = [
    '/flowertattoo.png',
    '/lightningtattoo.png',
    '/oldschooltatoo.png',
    '/phoenixtattoo.png',
    '/sculltattoo.png',
    '/snaketattoo.png'
  ];

  return (
    <div className="pt-14 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">

      {/* Hero Section */}
      <h1 className="font-serif text-3xl md:text-4xl text-center uppercase tracking-wider">ТАТУЮВАННЯ</h1>

      {/* Preparation Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32 flex flex-col md:flex-row gap-16 items-center justify-between">

        {/* Ліва частина - Зображення (прибрано md:justify-start) */}
        {/* Irregular Star Mask */}
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <image
              href="/work (1).png"
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
      <section className="py-24 px-4 bg-[#1A2E16] mb-32 border-y border-[#6F892E]/20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl mb-6 uppercase tracking-widest text-[#EBEBDF]">ОНЛАЙН ЗАПИС ВІДКРИТО</h2>
          <p className="text-xl md:text-2xl opacity-80 mb-12 uppercase tracking-wider text-[#6F892E]">ВСТИГНИ ЗАБРОНЮВАТИ СВІЙ СЕАНС</p>
          <button onClick={openBooking} className="px-12 py-5 bg-[#6F892E] text-[#122110] uppercase tracking-widest text-lg rounded-full hover:bg-white hover:text-black transition-colors shadow-[0_0_30px_rgba(111,137,46,0.3)]">
            ЗАПИСАТИСЯ ОНЛАЙН
          </button>
        </div>
      </section>

      {/* FAQ / How to Book */}
      <section className="px-4 md:px-12 lg:px-24 max-w-5xl mx-auto mb-32">
        <h2 className="text-4xl md:text-5xl mb-16 text-center uppercase tracking-wider">ЯК ЗАПИСАТИСЯ</h2>
        <div className="flex flex-col">
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
            question="ПРОТИПОКАЗИ"
            answer="Татуювання не рекомендується робити при цукровому діабеті, епілепсії, захворюваннях крові, шкірних захворюваннях у стадії загострення, а також під час вагітності та лактації."
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl mb-16 text-center uppercase tracking-wider">ПОРТФОЛІО</h2>

        {/* Filter Bar */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#1A2E16] rounded-full p-2 flex flex-wrap gap-2 justify-center border border-[#6F892E]/30">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full uppercase tracking-widest text-sm transition-colors ${activeFilter === filter ? 'bg-[#6F892E] text-[#122110]' : 'text-[#EBEBDF]/80 hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioPhotos.map((photo, index) => (
            <div key={index} className="rounded-[40px] overflow-hidden aspect-[4/5] relative group cursor-pointer border border-[#73934A]/20">
              <img src={photo} alt="Tattoo work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-[#6F892E] uppercase tracking-widest text-lg font-serif mb-2">Надія Можаєва</p>
                <p className="text-white/80">Графіка, 2024</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 border border-[#6F892E] text-[#6F892E] rounded-full uppercase tracking-widest hover:bg-[#6F892E] hover:text-[#122110] transition-colors">
            Більше робіт
          </button>
        </div>
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

