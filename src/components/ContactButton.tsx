import React from 'react';

interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  href = '#contact',
  onClick,
  className = '',
}) => {
  const baseClass = 'contact-btn-bg contact-btn-outline rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-flex items-center justify-center transition-transform hover:scale-105';

  if (onClick) {
    return (
      <button onClick={onClick} className={`${baseClass} ${className}`}>
        {label}
      </button>
    );
  }

  return (
    <a href={href} className={`${baseClass} ${className}`}>
      {label}
    </a>
  );
};

export default ContactButton;