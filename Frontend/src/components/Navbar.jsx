import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-md py-2' : 'bg-background/80 py-4'} backdrop-blur-md`}>
      <nav className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto">
        <Link to="/" className="relative flex items-center justify-start w-32 h-10 overflow-hidden">
          <span className={`text-2xl font-bold text-[#a33f00] font-headline tracking-tight transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-x-10 scale-75' : 'opacity-100 translate-x-0 scale-100'}`}>
            HomeEase
          </span>
          <img 
            src="/favicon.png" 
            alt="HomeEase Logo" 
            className={`absolute left-0 w-8 h-8 object-contain transition-all duration-500 ${isScrolled ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-50'}`}
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-semibold">
          <Link to="/signup?type=need_help" className={`transition-colors ${isScrolled ? 'text-on-surface' : 'text-[#5e605a]'} hover:text-[#a33f00]`}>Find Help</Link>
          <Link to="/signup?type=want_to_help" className={`transition-colors ${isScrolled ? 'text-on-surface' : 'text-[#5e605a]'} hover:text-[#a33f00]`}>Become a Helper</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className={`hidden sm:block font-semibold transition-colors ${isScrolled ? 'text-on-surface' : 'text-[#5e605a]'} hover:text-[#a33f00]`}>Sign In</Link>
          <Link to="/signup" className={`bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all ${isScrolled ? 'scale-90' : 'scale-100'}`}>Book Now</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
