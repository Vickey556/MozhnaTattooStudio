import { useEffect, useState } from 'react';
import { useBooking } from '../context/BookingContext';

const CRM_URL = 'https://crm.helpercrm.com/online-form-preview?id=j0wxZCyM';

export const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();
  const [loaded, setLoaded] = useState(false);

  // Reset loaded state each time modal opens
  useEffect(() => {
    if (isBookingOpen) {
      setLoaded(false);
    }
  }, [isBookingOpen]);

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
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={closeBooking} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl h-[90vh] max-h-[800px] bg-[#1a2214] border border-[#73934A]/30 rounded-[32px] shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#73934A]/20 shrink-0">
          <p className="font-serif text-[#6F892E] tracking-widest uppercase text-sm">Записатися онлайн</p>
          <div className="flex items-center gap-3">
            {/* Open in new tab fallback */}
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EBEBDF]/40 hover:text-[#6F892E] transition-colors text-xs font-serif tracking-wider flex items-center gap-1"
              title="Відкрити у новій вкладці"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              нова вкладка
            </a>
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
        </div>

        {/* Loading skeleton shown until iframe is ready */}
        {!loaded && (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-[#6F892E]/20" />
              <div className="absolute inset-0 rounded-full border-2 border-t-[#6F892E] animate-spin" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-serif text-[#EBEBDF]/70 text-sm tracking-wider">Завантажуємо форму...</p>
              <p className="text-[#EBEBDF]/30 text-xs">
                Якщо довго не відкривається —{' '}
                <a href={CRM_URL} target="_blank" rel="noopener noreferrer" className="text-[#6F892E] underline underline-offset-2">
                  відкрийте у новій вкладці
                </a>
              </p>
            </div>
            {/* Skeleton bars */}
            <div className="w-full max-w-sm flex flex-col gap-3 mt-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-12 rounded-xl bg-[#EBEBDF]/5 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
              <div className="h-12 rounded-xl bg-[#6F892E]/10 animate-pulse" style={{ animationDelay: '600ms' }} />
            </div>
          </div>
        )}

        {/* CRM iframe */}
        <iframe
          src={CRM_URL}
          className="w-full flex-1 border-0"
          style={{ display: loaded ? 'block' : 'none' }}
          title="Онлайн запис"
          allow="payment"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};