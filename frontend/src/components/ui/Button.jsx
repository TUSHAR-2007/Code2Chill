import React from 'react';

export default function Button({children, onClick, type = 'button', className = ''}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded transition-colors duration-200 bg-[#FF6B35] text-[#090B0D] hover:bg-[#FF7A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D9E8] ${className}`}
    >
      {children}
    </button>
  );
}
