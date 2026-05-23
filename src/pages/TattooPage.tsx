
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
      <SectionHeading as="h1" align="center" className="mb-0 mt-8">ТАТУЮВАННЯ</SectionHeading>

      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-12 md:mb-32">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <SectionHeading className="mb-12 text-[#6F892E] tracking-tighter">Вартість послуг</SectionHeading>
            <div className="space-y-6">
              {[
                { name: "Консультація", price: "0 грн", desc: "Обговорення ідеї, розробка концепту та підбір місця" },
                { name: "Мінімальна вартість", price: "1500 грн", desc: "Прості тату, написи, символи до 10 см" },
                { name: "Сеанс татуювання", price: "6000-7000 грн", desc: "Повноцінний робочий день майстра (4-6 годин)" }
              ].map((item, i) => (
                <Card key={i} variant="glass" hoverable={true}>
                  <CardContent>
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="text-xl uppercase tracking-widest">{item.name}</h3>
                      <span className="text-2xl text-[#6F892E] font-bold">{item.price}</span>
                    </div>
                    <p className="opacity-60 font-light">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 relative justify-center">
            <img src={`${import.meta.env.BASE_URL}dragontattoo.jpg`} className="w-[80%] opacity-80 mix-blend-lighten" alt="Tattoo process" />
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