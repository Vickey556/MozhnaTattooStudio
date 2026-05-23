import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { Button } from '../ui/Button';

interface BookingBlockProps {
  serviceName: string;
}

export const BookingBlock: React.FC<BookingBlockProps> = ({ serviceName }) => {
  const { openBooking } = useBooking();

  return (
    <section className="pt-10 pb-40 px-4 mb-32 relative overflow-visible flex justify-center">
      <div className="w-full max-w-[1000px] text-center flex flex-col items-center relative z-10">
        <h2 className="text-3xl md:text-4xl mb-4 uppercase tracking-widest text-[#EBEBDF] font-serif">ОНЛАЙН ЗАПИС ВІДКРИТО</h2>
        <p className="text-base md:text-lg opacity-90 mb-12 font-serif text-[#EBEBDF]">Встигни забронювати зручний для себе день та час!</p>

        {/* Arch image */}
        <div className="relative w-[90%] md:w-[700px] aspect-[4/3] md:aspect-[3/2] mx-auto rounded-t-full overflow-hidden shadow-2xl bg-[#1A2E16]">
          <img src={`${import.meta.env.BASE_URL}booking.png`} alt="Studio" className="w-full h-full object-cover" />
        </div>

        <Button onClick={() => openBooking({ service: serviceName })} className="mt-10">
          ЗАПИСАТИСЯ ОНЛАЙН
        </Button>
      </div>
    </section>
  );
};
