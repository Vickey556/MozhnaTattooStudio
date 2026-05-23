import React, { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type ButtonAsAnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = (props: ButtonProps) => {
  const { variant = 'primary', fullWidth, className = '', children, as = 'button', ...rest } = props;

  const baseStyles = 'inline-flex justify-center items-center font-serif uppercase tracking-widest rounded-full transition-all duration-300 border font-bold text-center';
  
  const variants = {
    primary: 'bg-[#6F892E] text-[#122110] hover:bg-[#EBEBDF] hover:text-[#122110] border-transparent shadow-xl hover:shadow-[0_0_20px_rgba(111,137,46,0.4)]',
    outline: 'bg-transparent text-[#EBEBDF] border-[#73934A]/50 hover:border-[#6F892E] hover:bg-[#6F892E]/10',
    ghost: 'bg-transparent text-[#6F892E] border-transparent hover:text-white',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const defaultPadding = 'px-10 py-4 md:px-12 md:py-5 text-sm md:text-base';
  
  // Якщо в className вже є відступи (px-, py-, p-), не додаємо дефолтні
  const hasPadding = className.match(/\bp[xy]?-/);
  const paddingStyle = hasPadding ? '' : defaultPadding;

  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${paddingStyle} ${className}`.trim();

  if (as === 'a') {
    return (
      <a className={combinedClassName} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
