import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

export const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'tattoo',
    comment: ''
  });

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Імітація запиту
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Автоматичне закриття після успіху
      setTimeout(() => {
        closeBooking();
        setIsSuccess(false);
        setFormData({ name: '', phone: '', service: 'tattoo', comment: '' });
      }, 4000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0a1208]/80 backdrop-blur-sm transition-opacity"
        onClick={closeBooking}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#122110] border border-[#73934A]/50 w-full max-w-md rounded-[32px] shadow-[0_0_50px_rgba(182,255,64,0.15)] overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6F892E] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        
        <button 
          onClick={closeBooking}
          className="absolute top-6 right-6 text-[#EBEBDF]/50 hover:text-[#6F892E] transition-colors z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="p-8 md:p-10">
          <h2 className="font-serif text-3xl uppercase mb-2 text-[#EBEBDF]">Запис на сеанс</h2>
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-[#6F892E]/20 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#6F892E]" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#6F892E] mb-3 uppercase">Запит прийнято!</h3>
              <p className="opacity-80 font-serif">
                Ваша заявка успішно надіслана. Наш адміністратор зв'яжеться з вами протягом найближчих 15 хвилин для уточнення деталей.
              </p>
            </div>
          ) : (
            <>
              <p className="opacity-70 font-serif text-sm mb-8">Залиште свої дані, і ми зв'яжемося з вами для обговорення деталей та вибору зручного часу.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-serif">
                <div>
                  <label className="block text-sm opacity-80 mb-2 pl-2">Ваше ім'я</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#0a1208] border border-[#73934A]/30 rounded-full px-6 py-3 text-[#EBEBDF] focus:outline-none focus:border-[#6F892E] transition-colors"
                    placeholder="Ім'я"
                  />
                </div>
                
                <div>
                  <label className="block text-sm opacity-80 mb-2 pl-2">Номер телефону</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#0a1208] border border-[#73934A]/30 rounded-full px-6 py-3 text-[#EBEBDF] focus:outline-none focus:border-[#6F892E] transition-colors"
                    placeholder="+38 (0XX) XXX-XX-XX"
                  />
                </div>

                <div>
                  <label className="block text-sm opacity-80 mb-2 pl-2">Послуга</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-[#0a1208] border border-[#73934A]/30 rounded-full px-6 py-3 text-[#EBEBDF] focus:outline-none focus:border-[#6F892E] transition-colors appearance-none"
                  >
                    <option value="tattoo">Татуювання</option>
                    <option value="piercing">Пірсинг</option>
                    <option value="consultation">Консультація</option>
                    <option value="other">Інше</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm opacity-80 mb-2 pl-2">Коментар (необов'язково)</label>
                  <textarea 
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full bg-[#0a1208] border border-[#73934A]/30 rounded-[24px] px-6 py-4 text-[#EBEBDF] focus:outline-none focus:border-[#6F892E] transition-colors resize-none h-24"
                    placeholder="Ваші побажання або запитання..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-[#6F892E] text-[#122110] font-bold tracking-widest uppercase py-4 rounded-full hover:bg-white transition-all disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#122110] border-t-transparent rounded-full animate-spin"></div>
                      Обробка...
                    </>
                  ) : (
                    'Відправити заявку'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
