import { useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

export const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();

  useEffect(() => {
    if (isBookingOpen) {
      // Open CRM form in new tab immediately
      window.open('https://crm.helpercrm.com/online-form-preview?id=j0wxZCyM', '_blank', 'noopener,noreferrer');
      closeBooking();
    }
  }, [isBookingOpen, closeBooking]);

  return null;
};