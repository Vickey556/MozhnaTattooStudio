import { createContext, useState, useContext } from 'react';
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
    setBookingData(data ?? {});
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setBookingData({});
  };

  return (
    <BookingContext.Provider value={{ isBookingOpen, bookingData, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
