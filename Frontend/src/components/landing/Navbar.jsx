import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-stone-100/50 dark:bg-stone-900/50 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-[#a33f00] dark:text-[#ffae89] font-headline tracking-tight">HomeEase</div>
        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-semibold">
          <a className="text-[#a33f00] border-b-4 border-[#a33f00] pb-1 hover:text-[#a33f00] transition-colors" href="#">Find Help</a>
          <a className="text-[#5e605a] dark:text-stone-400 hover:text-[#a33f00] transition-colors" href="#">How it Works</a>
          <a className="text-[#5e605a] dark:text-stone-400 hover:text-[#a33f00] transition-colors" href="#">Become a Helper</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[#5e605a] font-semibold hover:text-[#a33f00] transition-colors">Sign In</button>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">Book Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
