import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({ children, className = "", id }: SectionContainerProps) => {
  return (
    <section 
      id={id} 
      className={`max-w-4xl mx-auto px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
};
