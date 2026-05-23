import { useBooking } from '../context/BookingContext';
import { CustomReviews } from '../components/CustomReviews';
import { FAQItem } from '../components/FAQItem';
import { CoverflowGallery } from '../components/CoverflowGallery';
import { PiercingViewer } from '../components/PiercingViewer';
import { BookingBlock } from '../components/shared/BookingBlock';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardImage } from '../components/ui/Card';
import { usePortfolio } from '../hooks/usePortfolio';

const filters = ['Всі проколи', 'Вухо', 'Ніс', 'Губа', 'Мікродермали', 'Брова', 'Язик'];

export const PiercingPage = () => {
  const { openBooking } = useBooking();
  const { getPiercingWorks } = usePortfolio();

  const piercingWorks = getPiercingWorks();

  return (
    <div className="pt-14 pb-0 px-0 min-h-screen font-serif text-[#F0F4E8]">
      {/* Hero Section */}
      <SectionHeading as="h1" align="center" className="mb-0 mt-8">ПІРСИНГ</SectionHeading>

      {/* 3D Piercing Viewer Block */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-12 md:mb-32 pt-12">
        <PiercingViewer onBook={(data) => openBooking(data ? { ...data, service: 'Пірсинг' } : { service: 'Пірсинг' })} />
      </section>

      {/* Portfolio Section */}
      <section
        className="relative w-full pt-12 pb-12 md:pb-24 bg-cover bg-center bg-fixed mb-12 md:mb-32 overflow-hidden before:absolute before:inset-0 before:bg-black/40"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}piercingbg.png')` }}
      >
        <div className="relative z-10 max-w-[100%] mx-auto">

          {/* 1. Заголовок (зменшили mb-16 на mb-8, щоб фільтри підтягнулися вище) */}
          <SectionHeading align="center" className="mb-0 text-[#EBEBDF]">
            ПОРТФОЛІО
          </SectionHeading>

          {/* 2. Галерея (фільтри та слайдер знаходяться всередині CoverflowGallery) */}
          <CoverflowGallery items={piercingWorks} categories={filters} />

        </div>
      </section>

      {/* Jewelry Section */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-12 md:mb-32">
        <SectionHeading align="center" className="mt-5 mb-8 md:mb-16">
          Прикраси в наявності
        </SectionHeading>

        <div className="flex md:grid overflow-x-auto snap-x snap-mandatory md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {[
            { name: 'Лабрет з цирконом (титан)', price: '300 грн', img: '/labretcircon.jpg' },
            { name: 'Лабрет з цирконом (титан)', price: '300 грн', img: '/labretcircon2.jpg' },
            { name: 'Лабрет з опалом (титан)', price: '300 грн', img: '/labretopal.jpg' },
            { name: 'Лабрет з цирконом (титан)', price: '300 грн', img: '/labretcircon3.jpg'},
            { name: 'Лабрет з цирконом (титан)', price: '300 грн', img: '/labretcircon4.jpg' },
            { name: 'Лабрет з цирконом (титан)', price: '300 грн', img: '/labretcircon5.jpg' },
            { name: 'Лабрет з цирконом (титан)', price: '300 грн', img: '/labretcircon6.jpg' },
            { name: 'Клікер титановий', price: '300 грн', img: '/dropclicer.jpg'},
          
          ].map((item, idx) => (
            <Card key={idx} variant="glass" className="shrink-0 snap-center w-[85vw] sm:w-[320px] md:w-auto group">
              <CardImage src={item.img.startsWith('http') ? item.img : `${import.meta.env.BASE_URL}${item.img.startsWith('/') ? item.img.slice(1) : item.img}`} alt={item.name} />
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif mb-2 text-[#EBEBDF]">{item.name}</h3>
                <p className="text-[#6F892E] font-bold tracking-widest">{item.price}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="opacity-70 max-w-2xl mx-auto font-serif text-sm md:text-base">
            * У студії представлений великий вибір титанових прикрас для будь-якого виду проколу. Ми використовуємо тільки біосумісний гіпоалергенний титан (ASTM F136), який ідеально підходить для первинного проколу та постійного носіння.
          </p>
        </div>
      </section>

      {/* FAQ / How to Book */}
      <section className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-12 md:mb-32 flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="lg:w-1/3 flex-shrink-0">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl text-[#EBEBDF]">ЩО ПОТРІБНО ЗНАТИ?</SectionHeading>
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


      <CustomReviews type="piercing" />

      {/* Booking Block */}
      <BookingBlock serviceName="Пірсинг" />
    </div>
  );
};
