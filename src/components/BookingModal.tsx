import { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

const fortunes = [
  "Твій наступний ескіз стане початком чогось більшого, ніж просто малюнок...",
  "Скоро ти наважишся на прокол, про який давно мріяв!",
  "Цей запис змінить твій стиль на краще.",
  "Наступне тату принесе тобі удачу!",
  "Час для нових змін! Ти на правильному шляху.",
  "Ідеальне розташування для твого нового тату вже обрано долею.",
  "Твоє тіло — це полотно, і наступний шедевр буде вражаючим."
];

export const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();
  const [isSuccess, setIsSuccess] = useState(false);
  const [fortune, setFortune] = useState('');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // The CRM sends { message: 'registered-user', data: ... }
      if (event.data?.message === 'registered-user') {
        setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
        setIsSuccess(true);
        setTimeout(() => {
          closeBooking();
          setIsSuccess(false);
        }, 7000);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [closeBooking]);

  if (!isBookingOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Клік по фону закриває вікно */}
      <div className="absolute inset-0" onClick={closeBooking}></div>

      {/* Компактне віконце */}
      <div className="w-full max-w-xl bg-[#1a2214] border border-[#73934A]/30 rounded-[40px] p-6 md:p-10 shadow-2xl relative z-10 overflow-y-auto max-h-[90vh] hide-scrollbar">

        <button
          onClick={closeBooking}
          className="absolute top-6 right-6 text-[#EBEBDF]/50 hover:text-[#6F892E] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="font-serif text-2xl md:text-3xl uppercase mb-8 text-center text-[#EBEBDF] tracking-widest">
          Онлайн запис
        </h2>

        {isSuccess ? (
          <div className="py-10 text-center animate-in zoom-in-95 duration-300">
            <h3 className="font-serif text-2xl text-[#6F892E] mb-4 uppercase">Успішно!</h3>
            <p className="text-[#EBEBDF] opacity-90 mb-6">Ми зв'яжемося з вами найближчим часом на вказаний email або телефон.</p>
            <div className="bg-[#122110] p-6 rounded-3xl border border-[#73934A]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#6F892E] blur-[40px] opacity-20 pointer-events-none"></div>
              <p className="text-[#6F892E] text-xs tracking-widest uppercase mb-2">Твоє передбачення</p>
              <p className="font-serif text-xl md:text-2xl italic text-[#EBEBDF]">"{fortune}"</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-[600px] rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <span className="text-[#EBEBDF]/50 font-serif tracking-widest uppercase">Завантаження форми...</span>
            </div>
            <iframe 
              src="https://crm.helpercrm.com/widgetJS?id=EDa7d4Qk&current-lang=uk-UA"
              className="w-full h-full border-none bg-transparent"
              title="Online Booking Form"
              allow="geolocation; otp-credentials"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};