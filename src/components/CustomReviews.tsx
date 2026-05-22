import { useRef } from 'react';
import { useSupabaseData } from '../hooks/useSupabaseData';

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  type: 'tattoo' | 'piercing';
}

const allReviews: Review[] = [
  {
    id: '1',
    author: 'Тетяна Сальницька',
    date: 'тиждень тому',
    rating: 5,
    text: 'Задоволена роботою майстра Вікторії.\n Було проведено перекриття шраму за допомогою тату. \n Вікторія допомогла визначитися з дизайном, розповіла як доглядати. \n Загоєння минуло без жодних проблем. Рекомендую салон та майстра Вікторію! ✅✅✅',
    type: 'tattoo'
  },
  {
    id: '2',
    author: 'Андрій Тищенко',
    date: 'Місяць тому',
    rating: 5,
    text: 'Чудове місце для втілення ваших ідей та мрій',
    type: 'tattoo'
  },
  {
    id: '3',
    author: 'Єва',
    date: '3 тижні тому',
    rating: 5,
    text: 'Дуже задоволена візитом до студії. Робила пірсинг септум у майстрині Анастасії - все пройшло ідеально. \n Атмосфера в студії дуже комфортна, приємна і спокійна. \n Анастасія - надзвичайно привітна, мила та уважна майстриня. \n Все зробила дуже акуратно і рівно, результат просто чудовий. \n Я залишилась у повному захваті',
    type: 'piercing'
  },
  {
    id: '4',
    author: 'Стеблівець Каріна',
    date: '3 місяці тому',
    rating: 5,
    text: 'Чудова студія. Шикарні всі майстрині, які тут працюють 🥰. \n Чілова атмосфера, можна з усіма знайти спільну мову. І взагалі тут всіх обожнюю ❤️. \n Довіряю їм , і ні разу не пошкодувала про це 💓',
    type: 'tattoo'
  },
  {
    id: '5',
    author: 'Владлен',
    date: '3 місяці тому',
    rating: 5,
    text: 'Нещодавно вийшов із салону. Був на сеансі у майстра Надії. \n Тату зробили дуже швидко, та й під час запису вчора відповіли майже відразу. \n Працюють професіонали, тому всім раджу',
    type: 'tattoo'
  }
];

export const CustomReviews = ({ type }: { type?: 'tattoo' | 'piercing' }) => {
  const { reviews: dbReviews, loading } = useSupabaseData();
  const carouselRef = useRef<HTMLDivElement>(null);

  const displayReviews = dbReviews.length > 0 
    ? dbReviews.map(r => ({
        id: r.id,
        author: r.author_name,
        date: r.date,
        rating: r.rating,
        text: r.text,
        type: r.type || 'tattoo'
      }))
    : allReviews;

  const filteredReviews = type ? displayReviews.filter(r => r.type === type) : displayReviews;

  // Функція для скролу каруселі по кнопках
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 424; // Приблизна ширина картки + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const Star = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#6F892E" stroke="#6F892E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <section id="reviews" className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto noise-bg relative">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <h2 className="font-serif text-3xl md:text-4xl uppercase">Ваші Відгуки</h2>
        
        <div className="flex items-center gap-4">
          {/* Кнопки управління каруселлю */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-[#6F892E] text-[#6F892E] hover:bg-[#6F892E] hover:text-[#122110] transition-colors"
              aria-label="Попередні відгуки"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-[#6F892E] text-[#6F892E] hover:bg-[#6F892E] hover:text-[#122110] transition-colors"
              aria-label="Наступні відгуки"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          <a
            href="https://www.google.com/search?q=%D0%9C%D0%9E%D0%96%D0%9D%D0%90+%D0%A2%D0%90%D0%A2%D0%A3+%D0%92%D1%96%D0%B4%D0%B3%D1%83%D0%BA%D0%B8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#6F892E] text-[#122110] px-8 py-4 rounded-full hover:bg-white transition-colors font-serif uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(111,137,46,0.3)] shrink-0"
          >
            Залишити відгук у Google
          </a>
        </div>
      </div>

      {/* Карусель */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {loading && displayReviews === allReviews && dbReviews.length === 0 ? null : null}
        
        {filteredReviews.map((review) => (
          <div 
            key={review.id} 
            className="snap-start shrink-0 min-w-[85vw] md:min-w-[350px] lg:min-w-[400px] bg-[#122110] p-8 rounded-3xl border border-[#73934A]/30 shadow-lg flex flex-col justify-between whitespace-normal"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} />)}
              </div>
              <div className="font-serif opacity-90 leading-relaxed mb-6 italic whitespace-pre-wrap break-words">
                {review.text.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-3 last:mb-0">
                  {index === 0 ? `"${paragraph}` : paragraph}
                  {index === review.text.split('\n').length - 1 ? '"' : ''}
                  </p>
               ))}
              </div>
            </div>
            <div className="flex justify-between items-end border-t border-[#73934A]/20 pt-4 mt-4">
              <span className="font-serif font-bold text-[#6F892E]">{review.author}</span>
              <span className="font-serif text-sm opacity-50">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};