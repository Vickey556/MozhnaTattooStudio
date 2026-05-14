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

  const openBooking = (data?: BookingData) => {
    if (data) setBookingData(data);
    else setBookingData({});

    // Фіксуємо, що користувач ініціював запис
    setWasFormOpened(true);

    window.postMessage({ widgetOpened: true }, '*');
    window.postMessage('open-main-form', '*');
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    // Скидаємо прапорець після закриття Fortune modal, 
    // щоб при переході по сторінках воно не з'явилося знову
    setWasFormOpened(false);
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
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [wasFormOpened]); // Додаємо залежність, щоб useEffect бачив актуальний стан

  return (
    <BookingContext.Provider value={{ isBookingOpen, bookingData, openBooking, closeBooking }}>
      {children}
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
