

export const DiscountSection = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 -mt-12 md:-mt-24 flex flex-col space-y-[-60px] md:space-y-[-120px] relative z-10">
      {/* Блок 1: Знижки (Зірка зліва) */}
      <div className="flex flex-col md:flex-row items-center justify-start relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-16 pl-0 md:pl-12">

          {/* Контейнер зірки */}
          <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px]">
            {/* НИТКА */}
            <div className="absolute bottom-1/2 left-1/2 -translate-x-1 w-[3px] h-[2000px] bg-[#375B11]/60 z-[-1]"></div>

            {/* ВСТАВКА ЗОБРАЖЕННЯ ЗІРОК */}
            <img
              src={`${import.meta.env.BASE_URL}star.png`}
              alt="Декоративні зірки"
              className="absolute inset-0 w-full h-full object-contain rotate-[-10deg] opacity-90 mix-blend-screen"
            />

            {/* Текст поверх зірки */}
            <span className="relative z-10 text-center font-serif text-xl md:text-2xl uppercase leading-tight text-[#EBEBDF] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-8">
              ЗНИЖКИ НА<br />ДЕНЬ<br />НАРОДЖЕННЯ
            </span>
          </div>

          {/* Текст опису (Ліворуч) */}
          <div className="font-serif text-sm md:text-base max-w-sm text-center md:text-left text-[#EBEBDF]/90 mt-[-30px] md:mt-0 relative z-10">
            <h4 className="text-white text-xl mb-2 uppercase tracking-tighter">Святкуй свій день народження з нами!</h4>
            <p>Даруємо знижку у розмірі 15% на будь-яку послугу в нашій студії. Скористатись знижкою можна в день народження та за три дні ДО та ПІСЛЯ дня народження. Просто повідом нас про своє свято, та отримай подарунок від нас ♥</p>
          </div>
        </div>
      </div>

      {/* Блок 2: Сертифікат (Зірка справа) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-end relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-2 md:gap-16 pr-0 md:pr-12">

          {/* Текст опису (Праворуч) */}
          <div className="font-serif text-sm md:text-base max-w-sm text-center md:text-right text-[#EBEBDF]/90 mb-[-30px] md:mb-0 relative z-10">
            <h4 className="text-white text-xl mb-2 uppercase tracking-tighter">Хочеш подарувати щось справді особливе?</h4>
            <p>Подарунковий сертифікат на тату, пірсинг, перманент — це не просто подарунок, це можливість втілити мрію, проявити себе, залишити слід. Сума — на твій вибір.Можна отримати в електронному або друкованому вигляді.Дійсний протягом 3х місяців.Подаруй емоцію, що залишиться назавжди.</p>
          </div>

          {/* Контейнер зірки */}
          <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px]">
            {/* НИТКА */}
            <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[3px] h-[2000px] bg-[#375B11]/60 z-[-1]"></div>

            {/* ВСТАВКА ЗОБРАЖЕННЯ */}
            <img
              src={`${import.meta.env.BASE_URL}star-r.png`}
              alt="Декоративні зірки"
              className="absolute inset-0 w-full h-full object-contain rotate-[160deg] opacity-90 mix-blend-screen"
            />

            {/* Текст поверх зірки */}
            <span className="relative top-6 right-10 z-10 text-center font-serif text-xl md:text-2xl uppercase leading-tight text-[#EBEBDF] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] px-8">
              ПОДАРУНКОВИЙ<br />СЕРТИФІКАТ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
