
import { CustomReviews } from '../components/CustomReviews';
import { FAQItem } from '../components/FAQItem';
import { CoverflowGallery } from '../components/CoverflowGallery';
import { BookingBlock } from '../components/shared/BookingBlock';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardContent } from '../components/ui/Card';
import { usePortfolio } from '../hooks/usePortfolio';

const filters = ['Всі стилі', 'Графіка', 'Олдскул', 'Мінімалізм', 'Кольорові', 'Реалізм', 'Скандинавія', 'Геометрія', 'Гравюра', 'Абстракція', 'Написи'];

export const TattooPage = () => {
  const { getTattooWorks } = usePortfolio();
  
  const tattooWorks = getTattooWorks();

  return (
    <div className="pt-14 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">

      {/* Hero Section */}
      <SectionHeading as="h1" align="center" className="mb-0 mt-2">ТАТУЮВАННЯ</SectionHeading>

      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-12 md:mb-32">

        {/* Section heading */}
        <SectionHeading align="center" className="mb-4 text-[#6F892E] tracking-tighter">Вартість татуювання</SectionHeading>
        <p className="text-center font-serif text-sm md:text-base text-[#EBEBDF]/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Точна вартість розраховується індивідуально та залежить від багатьох факторів
        </p>

        {/* Two-column layout: cards left, photo right */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT: factors + cards */}
          <div className="w-full lg:w-1/2">

        {/* Factor icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-14">
          {[
            {
              label: 'Розмір та\nскладність',
              icon: (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              )
            },
            {
              label: 'Місце\nнанесення',
              icon: (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              )
            },
            {
              label: 'Час\nроботи',
              icon: (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h14M5 21h14M7 3v3a5 5 0 0010 0V3M7 21v-3a5 5 0 0110 0v3"/>
                </svg>
              )
            },
            {
              label: 'Деталізація\nта стиль',
              icon: (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              )
            },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-3 w-[80px] md:w-[100px]">
              <div className="text-[#6F892E]">{f.icon}</div>
              <p className="font-serif text-xs md:text-sm text-center text-[#EBEBDF]/70 uppercase tracking-widest leading-snug whitespace-pre-line">{f.label}</p>
            </div>
          ))}
        </div>

            {/* Consultation card */}
            <div className="space-y-4">
          <Card variant="glass" hoverable={true}>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#EBEBDF]/50 mb-1">Консультація</p>
                  <h3 className="text-2xl md:text-3xl uppercase tracking-widest text-[#EBEBDF]">Безкоштовно</h3>
                  <p className="text-[#EBEBDF]/60 text-sm mt-2 font-light">Обговорення ідеї, розробка концепту та підбір місця</p>
                </div>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6F892E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 ml-4">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Size-based price cards */}
          {[
            { label: 'Татуювання', size: 'до 5 см', price: '1500 грн', priceLabel: 'мінімальна вартість', img: 'lightningtattoo.png' },
            { label: 'Татуювання', size: 'до 10 см', price: '2000 – 3000 грн', priceLabel: '', img: 'flowertattoo.png' },
            { label: 'Татуювання', size: 'до 20 см', price: '3000 – 5000 грн', priceLabel: '', img: 'dragontattoo.jpg' },
            { label: 'Масштабні', size: 'проекти', price: '6000 грн за сеанс', priceLabel: '(7-8 годин роботи)', img: 'phoenixtattoo.png' },
          ].map((card, i) => (
            <div
              key={i}
              className="relative rounded-[20px] overflow-hidden border border-[#73934A]/20 hover:border-[#6F892E]/50 transition-colors group"
              style={{ minHeight: '120px' }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url('${import.meta.env.BASE_URL}${card.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1208]/95 via-[#0a1208]/80 to-transparent" />

              {/* Content */}
              <div className="relative z-10 px-6 py-5 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#EBEBDF]/50 mb-0.5">{card.label}</p>
                <h3 className="text-3xl md:text-4xl uppercase tracking-tight text-[#EBEBDF] leading-none mb-3">{card.size}</h3>
                <div className="w-12 h-[1px] bg-[#6F892E] mb-3" />
                <p className="text-[#6F892E] text-xl md:text-2xl font-serif">{card.price}</p>
                {card.priceLabel && <p className="text-[#EBEBDF]/50 text-xs tracking-widest mt-1">{card.priceLabel}</p>}
              </div>
            </div>
          ))}
            </div>
          </div>

          {/* RIGHT: tattoo photo */}
          <div className="hidden lg:flex lg:w-1/2 sticky top-28 self-start">
            <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1208]/60 via-transparent to-transparent z-10" />
              <img
                src={`${import.meta.env.BASE_URL}phoenixtattoo.png`}
                alt="Татуювання"
                className="w-full h-full object-cover mix-blend-lighten opacity-90"
              />
            </div>
          </div>

        </div>
      </section>


      {/* --- СПІЛЬНИЙ КОНТЕЙНЕР ДЛЯ ГАЛЕРЕЇ ТА МАЙСТРА З ФОНОМ --- */}
      <section
        className="relative w-full pt-12 pb-12 md:pb-24 bg-cover bg-center bg-fixed mb-12 md:mb-32 overflow-hidden before:absolute before:inset-0 before:bg-black/40"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}gallery-bg.jpg')` }}
      >
        <div className="relative z-10 max-w-[100%] mx-auto">

          <SectionHeading align="center" className="mb-0 text-[#EBEBDF]">
            ПОРТФОЛІО
          </SectionHeading>

          {/* 2. Галерея (фільтри та слайдер знаходяться всередині CoverflowGallery) */}
          <CoverflowGallery items={tattooWorks} categories={filters} />

        </div>
      </section>

      {/* FAQ / How to Book */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-32 flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3 flex-shrink-0">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl text-[#EBEBDF]">ЩО ПОТРІБНО ЗНАТИ?</SectionHeading>
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

      <CustomReviews type="tattoo" />

      {/* Booking Block */}
      <BookingBlock serviceName="Татуювання" />
    </div>
  );
};