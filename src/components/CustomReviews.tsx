

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
    author: 'Анна К.',
    date: '2 тижні тому',
    rating: 5,
    text: 'Робила перше татуювання у майстра Надії. Дуже хвилювалася, але дарма! Все пройшло чудово, швидко і майже не боляче. Ескіз вийшов навіть краще, ніж я уявляла.',
    type: 'tattoo'
  },
  {
    id: '2',
    author: 'Максим В.',
    date: 'Місяць тому',
    rating: 5,
    text: 'Крута студія! Робив масштабний проєкт на спині у Вікторії. Атмосфера супер, завжди запропонують каву, можна розслабитись під музику. Роботою повністю задоволений.',
    type: 'tattoo'
  },
  {
    id: '3',
    author: 'Олена С.',
    date: '3 тижні тому',
    rating: 5,
    text: 'Проколювала хрящ (Хелікс). Майстер Анастасія все детально пояснила, допомогла вибрати ідеальну прикрасу. Прокол заживає чудово, ніяких проблем.',
    type: 'piercing'
  },
  {
    id: '4',
    author: 'Дмитро П.',
    date: '2 місяці тому',
    rating: 5,
    text: 'Робив мінімалістичне тату у Анни. Дуже тонка і акуратна робота, лінії рівненькі. Обов\'язково повернуся ще!',
    type: 'tattoo'
  },
  {
    id: '5',
    author: 'Катерина М.',
    date: '1 тиждень тому',
    rating: 5,
    text: 'Робила пірсинг крила носа. Стерильно, швидко і безпечно. Дуже сподобався підхід майстра, відчувається професіоналізм.',
    type: 'piercing'
  }
];

export const CustomReviews = ({ type }: { type?: 'tattoo' | 'piercing' }) => {
  const filteredReviews = type ? allReviews.filter(r => r.type === type) : allReviews;

  const Star = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#6F892E" stroke="#6F892E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <section id="reviews" className="py-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto noise-bg relative">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <h2 className="font-serif text-3xl md:text-4xl uppercase">Ваші Відгуки</h2>
        <a
          href="https://www.google.com/search?q=%D0%9C%D0%9E%D0%96%D0%9D%D0%90+%D0%A2%D0%90%D0%A2%D0%A3+%D0%92%D1%96%D0%B4%D0%B3%D1%83%D0%BA%D0%B8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#6F892E] text-[#122110] px-8 py-4 rounded-full hover:bg-white transition-colors font-serif uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(111,137,46,0.3)]"
        >
          Залишити відгук у Google
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-[#122110] p-8 rounded-3xl border border-[#73934A]/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} />)}
              </div>
              <p className="font-serif opacity-90 leading-relaxed mb-6 italic">"{review.text}"</p>
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
