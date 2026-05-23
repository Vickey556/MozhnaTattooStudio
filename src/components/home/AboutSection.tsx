import React from 'react';

export const AboutSection = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section id="about" className="pt-12 md:pt-24 pb-12 md:pb-[0px] px-4 md:px-12 lg:px-24 w-full flex justify-center noise-bg">
      <div className="flex flex-col gap-6 md:gap-12 max-w-[1600px] w-full items-center lg:items-start justify-center">
        
        {/* Mobile Heading */}
        <h2 className="about-heading self-start lg:hidden mb-0">ПРО НАШУ СТУДІЮ</h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 w-full items-center lg:items-start">
          <div className="about-snake-img lg:-mt-10 shrink-0"></div>

          <div className="w-full flex flex-col items-start gap-6 md:gap-12 max-w-[1080px]">
            {/* Desktop Heading */}
            <h2 className="about-heading self-start hidden lg:block">ПРО НАШУ СТУДІЮ</h2>

            <div className="about-text flex flex-col gap-4 md:gap-6 text-left">
              <div>
                <p className="mb-4">
                  Вітаємо у місці, де креативна ідея оживає, а смілива мрія стає частиною вашого образу.
                  Тату-студія «МОЖНА ТАТУ» — це сучасний арт-простір у самому серці Черкас, де професіоналізм,
                  безкомпромісна стерильність та затишна атмосфера створюють ідеальні умови для перевтілення.
                </p>
                <p>
                  Ми переконані: татуювання та пірсинг — це не просто процедури. Це справжня історія на шкірі, прояв
                  характеру та маніфест внутрішньої свободи. Саме тому ми створили місце, де кожен клієнт почувається
                  спокійно, впевнено та натхненно.
                </p>
              </div>
              
              <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4 md:space-y-6`}>
                <p>
                  Ми дбаємо про кожну деталь — від чистоти робочих поверхонь до музики в залі.
                  Уся наша робота проходить в умовах повної стерильності - ми використовуємо лише одноразові витратні
                  матеріали, а інструменти проходять багаторівневе очищення і стерилізацію відповідно до медичних норм.
                </p>
                <p>
                  Ми - команда майстрів, які працюють у різних стилях, постійно розвиваються та не бояться сміливих рішень.
                  Кожен з нас вкладає душу в свою роботу та завжди допоможе знайти те тату, яке підійде саме вам.
                </p>
              </div>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="md:hidden self-start font-serif uppercase tracking-widest text-xs text-[#6F892E] hover:text-white transition-colors border-b border-[#6F892E] pb-1 mt-2"
              >
                {isExpanded ? 'Згорнути текст' : 'Читати повністю...'}
              </button>
            </div>

            {/* Signature Block */}
            <div className="flex flex-col items-start lg:items-end w-full mt-4 md:mt-8 pl-4 lg:pl-0 border-l-2 lg:border-l-0 lg:border-r-2 border-[#6F892E]/50 lg:pr-6">
              <p className="font-serif italic text-sm md:text-base opacity-90 max-w-md text-left lg:text-right leading-relaxed mb-4">
                "Приходьте до студії - ми створюємо не просто татуювання, а моменти, які залишаються з вами назавжди.
                Ми віримо: якщо дуже хочеться - значить, можна!"
              </p>
              <div className="font-serif font-bold text-[#6F892E] text-sm md:text-base tracking-wider uppercase">
                З повагою до вашого тіла<br/>і любов'ю до своєї справи.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
