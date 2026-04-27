import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col items-center gap-6 bg-[#fbf9f4] dark:bg-stone-950 border-t border-[#b2b2ab]/15">
      <div className="text-lg font-bold text-[#a33f00] font-headline">HomeEase</div>
      <div className="flex flex-wrap justify-center gap-8 font-['Be_Vietnam_Pro'] text-sm">
        <a className="text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Privacy Policy</a>
        <a className="text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Terms of Service</a>
        <a className="text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Contact Us</a>
        <a className="text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Careers</a>
      </div>
      <p className="text-[#5e605a] font-['Be_Vietnam_Pro'] text-sm text-center">
        © 2026 HomeEase. Crafted for the tactile hearth.
      </p>
      <div className="flex gap-4 mt-4">
        <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors" href="#">
          <span className="material-symbols-outlined text-primary">share</span>
        </a>
        <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors" href="#">
          <span className="material-symbols-outlined text-primary">public</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
