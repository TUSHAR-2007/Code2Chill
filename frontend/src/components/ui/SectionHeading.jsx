import React from 'react';

export default function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`text-3xl font-bold font-['Barlow_Condensed'] text-[#F1F3E9] mb-4 ${className}`}>
      {children}
    </h2>
  );
}
