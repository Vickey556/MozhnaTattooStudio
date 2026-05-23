import { useState, useEffect } from 'react';
import { studioPhotos } from '../../data/home';

export const AtmosphereSection = () => {
  // --- ЛОГІКА КАРУСЕЛІ ФОТО ---
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const photoRotationSpeed = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % studioPhotos.length);
    }, photoRotationSpeed);
    return () => clearInterval(timer);
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 md:py-0 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto noise-bg relative">

      <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-16 items-stretch">

        {/* Ліва частина: Текст */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-[#F0F4E8] font-serif leading-relaxed text-sm md:text-base py-0">

          <div className="space-y-2 mb-0">
            <p>
              Ми знаємо, що візит до тату-майстра — це завжди поєднання хвилювання,
              очікування та легкого адреналіну. Саме тому в «МОЖНА ТАТУ» ми приділяємо
              особливу увагу не лише технічному виконанню, а й вашому емоційному
              комфорту. Для нас важливо, щоб кожен тату-сеанс у Черкасах став для вас
              приємною подією, а не просто маніпуляцією.
            </p>
            <div className="space-y-5 mb-2 italic text-xl text-[#6F892E] py-2">
              <p>Твій комфорт — наш пріоритет!</p>
            </div>
            
            <div className={`${isExpanded ? 'block' : 'hidden md:block'} space-y-4`}>
              <p>
                Ми створили простір, де немає місця стресу чи дискомфорту. Наш особливий
                вайб складається з багатьох дрібниць, які ви відчуваєте з першої хвилини.
              </p>
              <p>
                Інтер'єр студії продуманий так, щоб ви почувалися як у гостях у кращих друзів.
                М'яке світло, стильний декор та зручні ергономічні кушетки дозволяють
                розслабитися навіть під час тривалих сеансів.
              </p>
              <p>
                У залі завжди звучить якісний саунд, який задає настрій. Ми віримо, що
                правильна музика допомагає краще переносити процес і налаштовує на творчу
                хвилю.
              </p>
              <p>
                Наші майстри — це не просто професіонали, а люди, які чують ваші побажання.
                Ми завжди запропонуємо чай, каву, зробимо необхідну перерву та підтримаємо
                розмову (або навпаки — забезпечимо тишу, якщо вам так комфортніше).
              </p>
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden self-start font-serif uppercase tracking-widest text-xs text-[#6F892E] hover:text-white transition-colors border-b border-[#6F892E] pb-1 mt-4"
            >
              {isExpanded ? 'Згорнути текст' : 'Читати повністю...'}
            </button>
          </div>
        </div>

        {/* Права частина: Карусель */}
        <div className="w-full lg:w-1/2 flex-shrink-0 flex items-center justify-center">
          <div className="rounded-[32px] overflow-hidden w-full h-[400px] md:h-[600px] relative shadow-2xl border border-[#73934A]/30">
            <div
              className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out flex flex-col"
              style={{ transform: `translateY(-${activePhotoIndex * 100}%)` }}
            >
              {studioPhotos.map((photoSrc, index) => (
                <img
                  key={index}
                  src={`${import.meta.env.BASE_URL}${photoSrc}`}
                  alt={`Фото атмосфери ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#122110] to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Spotify Widget Placeholder */}
      <div id="spotify-placeholder" className="mt-20 max-w-3xl mx-auto h-[152px] w-full"></div>

    </section>
  );
};
