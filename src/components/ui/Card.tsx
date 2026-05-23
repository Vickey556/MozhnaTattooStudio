import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'solid' | 'glass';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card = ({ children, variant = 'solid', className = '', onClick, hoverable = true }: CardProps) => {
  const baseStyles = 'overflow-hidden transition-all duration-300';
  
  const variants = {
    solid: 'bg-[#122110] border border-[#73934A]/30 shadow-lg rounded-3xl',
    glass: 'bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl',
  };
  
  const hoverStyles = hoverable ? (variant === 'glass' ? 'hover:border-[#6F892E]/50' : 'hover:border-[#6F892E]/50 hover:shadow-xl') : '';
  const cursorStyle = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${cursorStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <div className={`p-6 md:p-8 ${className}`}>{children}</div>;
};

export const CardImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  return (
    <div className={`aspect-square overflow-hidden bg-black/50 ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
  );
};
