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
  const [fortune, setFortune] = useState('');

  useEffect(() => {
    if (isBookingOpen) {
      // Pick a random fortune when the modal opens
      setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);

      // Auto-close after 7 seconds
      const timer = setTimeout(() => {
        closeBooking();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isBookingOpen, closeBooking]);

  if (!isBookingOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Клік по фону закриває вікно */}
      <div className="absolute inset-0" onClick={closeBooking}></div>

      {/* Компактне віконце */}
      <div className="w-full max-w-xl bg-[#1a2214] border border-[#73934A]/30 rounded-[40px] p-6 md:p-10 shadow-2xl relative z-10 overflow-hidden hide-scrollbar">

        <button
          onClick={closeBooking}
          className="absolute top-6 right-6 text-[#EBEBDF]/50 hover:text-[#6F892E] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="py-10 text-center animate-in zoom-in-95 duration-300">
          <div className="bg-[#122110] p-8 rounded-3xl border border-[#73934A]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6F892E] blur-[50px] opacity-20 pointer-events-none"></div>
            <p className="text-[#6F892E] text-sm tracking-widest uppercase mb-4">Твоє передбачення</p>
            <p className="font-serif text-2xl md:text-3xl italic text-[#EBEBDF]">"{fortune}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};