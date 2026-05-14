import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface BookingData {
  service?: string;
  subService?: string;
  artist?: string;
}

interface BookingContextType {
  isBookingOpen: boolean;
  bookingData: BookingData;
  openBooking: (data?: BookingData) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({});

  // НОВЕ: Стан, що фіксує, чи була форма відкрита користувачем
  const [wasFormOpened, setWasFormOpened] = useState(false);
  const [isCrmOpen, setIsCrmOpen] = useState(false);

  const openBooking = (data?: BookingData) => {
    if (data) setBookingData(data);
    else setBookingData({});

    // Фіксуємо, що користувач ініціював запис
    setWasFormOpened(true);
    setIsCrmOpen(true);

    window.postMessage({ widgetOpened: true }, '*');
    window.postMessage('open-main-form', '*');
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    // Скидаємо прапорець після закриття Fortune modal, 
    // щоб при переході по сторінках воно не з'явилося знову
    setWasFormOpened(false);
  };

  const closeCrmWidget = () => {
    window.postMessage({ widgetOpened: false }, '*');
    setIsCrmOpen(false);
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // Перевіряємо ДВІ умови:
      // 1. Віджет надіслав сигнал про закриття (widgetOpened === false)
      // 2. Користувач до цього сам відкривав форму (wasFormOpened === true)
      if (e.data?.widgetOpened === false && wasFormOpened) {
        setIsBookingOpen(true);
        // Скидаємо прапорець, щоб Fortune modal відкрився лише один раз
        setWasFormOpened(false);
        setIsCrmOpen(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [wasFormOpened]); // Додаємо залежність, щоб useEffect бачив актуальний стан

  return (
    <BookingContext.Provider value={{ isBookingOpen, bookingData, openBooking, closeBooking }}>
      {children}

      {/* Кнопка закриття для віджета CRM */}
      {isCrmOpen && (
        <button
          onClick={closeCrmWidget}
          className="fixed top-6 right-6 z-[2147483647] w-12 h-12 bg-[#1a2214] border border-[#73934A]/50 rounded-full flex items-center justify-center text-[#EBEBDF] hover:bg-[#6F892E] transition-colors shadow-2xl cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
