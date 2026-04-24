import React from 'react';

const FloatingActionButton = () => {
  return (
    <button className="fixed bottom-8 right-8 bg-primary text-on-primary w-16 h-16 rounded-full shadow-[0_20px_40px_rgba(73,24,0,0.15)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
      <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
    </button>
  );
};

export default FloatingActionButton;
