import { useState } from 'react';

export const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#EBEBDF]/30 py-4 md:py-6">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none hover:text-[#EBEBDF]/70 transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-lg md:text-xl uppercase tracking-widest text-[#EBEBDF]">{question}</span>
        <div className="flex items-center justify-center text-[#EBEBDF] opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="text-4xl font-light leading-none -mt-1">{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="font-serif text-base opacity-70 leading-relaxed whitespace-pre-line text-[#EBEBDF]">{answer}</p>
      </div>
    </div>
  );
};
