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

  const openBooking = (data?: BookingData) => {
    if (data) setBookingData(data);
    else setBookingData({});
    // Trigger the Helper CRM widget
    window.postMessage({ widgetOpened: true }, '*');
    window.postMessage('open-main-form', '*');
  };

  const closeBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // Listen for the widget close event
      if (e.data?.widgetOpened === false) {
        setIsBookingOpen(true); // Open our Fortune modal
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
