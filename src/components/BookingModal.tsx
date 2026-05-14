import React, { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';
import { masters } from '../pages/ArtistsPage';
import { piercingTypesData } from './PiercingViewer'; // Імпортуємо дані для списку

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
  const { isBookingOpen, closeBooking, bookingData } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fortune, setFortune] = useState('');

  const [formData, setFormData] = useState({
    service: '',
    subService: '',
    artist: '',
    datetime: '',
    name: '',
    phone: '',
    email: '',
    dob: '',
    file: null as File | null
  });

  useEffect(() => {
    if (isBookingOpen) {
      setFormData(prev => ({
        ...prev,
        service: bookingData.service || '',
        subService: bookingData.subService || '',
        artist: bookingData.artist || '',
      }));
    }
  }, [isBookingOpen, bookingData]);

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
      setIsSuccess(true);
      setTimeout(() => {
        closeBooking();
        setIsSuccess(false);
        setFormData({
          service: '', subService: '', artist: '', datetime: '',
          name: '', phone: '', email: '', dob: '', file: null
        });
      }, 7000);
    }, 1500);
  };

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
          <form onSubmit={handleSubmit} className="space-y-4 font-serif">

            {/* Вибір послуги */}
            <div className="grid grid-cols-1 gap-4">
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value, subService: '' })}
                className="w-full bg-[#f4f3ea] border-none rounded-full px-6 py-4 text-[#122110] text-base focus:ring-2 focus:ring-[#6F892E] outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled>Оберіть послугу</option>
                <option value="Татуювання">Татуювання</option>
                <option value="Пірсинг">Пірсинг</option>
                <option value="Консультація">Консультація</option>
              </select>

              {/* Вибір виду пірсингу (тільки якщо обрано Пірсинг) */}
              {formData.service === 'Пірсинг' && (
                <select
                  required
                  value={formData.subService}
                  onChange={(e) => setFormData({ ...formData, subService: e.target.value })}
                  className="w-full bg-[#f4f3ea] border-none rounded-full px-6 py-4 text-[#122110] text-base focus:ring-2 focus:ring-[#6F892E] outline-none appearance-none cursor-pointer animate-in fade-in slide-in-from-top-2"
                >
                  <option value="">Оберіть прокол</option>
                  {piercingTypesData.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Інше">Інше (уточнимо з майстром)</option>
                </select>
              )}

              <select
                required
                value={formData.artist}
                onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                className="w-full bg-[#f4f3ea] border-none rounded-full px-6 py-4 text-[#122110] text-base focus:ring-2 focus:ring-[#6F892E] outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled>Обрати майстра</option>
                {masters.map(m => (
                  <option key={m.id} value={m.name}>{m.name}</option>
                ))}
                <option value="Будь-який вільний">Будь-який вільний</option>
              </select>

              <input
                required
                type="datetime-local"
                value={formData.datetime}
                onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                className="w-full bg-[#f4f3ea] border-none rounded-full px-6 py-4 text-[#122110] text-base focus:ring-2 focus:ring-[#6F892E] outline-none cursor-pointer"
                style={{ colorScheme: 'light' }}
              />
            </div>

            <div className="space-y-4 pt-2">
              <input
                type="text" required placeholder="Ваш ПІБ"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-base focus:ring-2 focus:ring-[#6F892E] outline-none"
              />
              <input
                type="tel" required placeholder="Номер телефону"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-base focus:ring-2 focus:ring-[#6F892E] outline-none"
              />
              <input
                type="email" required placeholder="Електронна адреса"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-base focus:ring-2 focus:ring-[#6F892E] outline-none"
              />
              <input
                type="text" required
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                placeholder="Дата народження"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-base focus:ring-2 focus:ring-[#6F892E] outline-none"
                style={{ colorScheme: 'dark' }}
              />
              
              <div className="mt-2 pl-4">
                <label className="flex items-center gap-2 cursor-pointer text-[#EBEBDF] hover:text-[#6F892E] transition-colors w-fit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
                  <span className="text-sm uppercase tracking-widest">Додати фото/референс</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})}
                  />
                </label>
                {formData.file && <p className="text-xs mt-2 opacity-70 break-all">{formData.file.name}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-[#6F892E] text-[#122110] font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors mt-4"
            >
              {isSubmitting ? 'ОБРОБКА...' : 'ЗАПИСАТИСЯ'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};