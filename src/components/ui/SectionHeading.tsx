import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeading = ({ children, as = 'h2', className = '', align = 'left' }: SectionHeadingProps) => {
  const Tag = as;
  
  const alignClass = {
    left: 'text-left md:text-left',
    center: 'text-center',
    right: 'text-right md:text-right'
  }[align];

  return (
    <Tag className={`font-serif text-3xl md:text-4xl uppercase tracking-wider text-[#EBEBDF] ${alignClass} ${className}`}>
      {children}
    </Tag>
  );
};
