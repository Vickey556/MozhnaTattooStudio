import { useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

const CRM_URL = 'https://crm.helpercrm.com/online-form-preview?id=j0wxZCyM&utm_source=ig&utm_medium=social&utm_content=link_in_bio&branch=2256';

export const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isBookingOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBooking();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeBooking]);

  if (!isBookingOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={closeBooking} />

      {/* Modal window */}
      <div className="relative z-10 w-full max-w-2xl h-[90vh] max-h-[800px] bg-[#1a2214] border border-[#73934A]/30 rounded-[32px] shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#73934A]/20 shrink-0">
          <p className="font-serif text-[#6F892E] tracking-widest uppercase text-sm">Записатися онлайн</p>
          <button
            onClick={closeBooking}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#EBEBDF]/50 hover:text-[#6F892E] hover:bg-[#6F892E]/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* CRM iframe */}
        <iframe
          src={CRM_URL}
          className="w-full flex-1 border-0"
          title="Онлайн запис"
          allow="payment"
        />
      </div>
    </div>
  );
};