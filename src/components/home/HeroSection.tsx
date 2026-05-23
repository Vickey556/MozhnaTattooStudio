import { Link } from "react-router-dom";
import { useBooking } from '../../context/BookingContext';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-4 text-center overflow-hidden -mt-[100px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src={`${import.meta.env.BASE_URL}bgvideo.mp4`} type="video/mp4" />
      </video>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#122110]/50 z-0 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <p className="font-serif text-xl md:text-2xl mb-4 opacity-90">Студія татуювання та пірсингу</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-[75px] xl:text-[100px] mb-6 tracking-wider leading-none">
          «МОЖНА ТАТУ»
        </h1>
        <p className="font-serif italic text-xl md:text-2xl mb-16 opacity-80">
          Можна. Бо ми знаємо, як.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-24 items-center justify-center">
          <Button onClick={() => openBooking()}>
          Записатися онлайн
        </Button>
          <Link to="/portfolio" className="hero-btn text-white font-serif tracking-widest text-sm uppercase px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Переглянути портфоліо
          </Link>
        </div>

        <p className="text-sm font-serif tracking-wider opacity-60">
          Працюємо за попереднім записом · 18+
        </p>
      </div>

      {/* Background radial gradient to mimic the light spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2B451A] rounded-full blur-[150px] opacity-40 z-0 pointer-events-none"></div>
    </section>
  );
};
