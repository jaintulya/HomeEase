import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="bg-surface-variant aspect-square organic-blob overflow-hidden shadow-xl">
            <img alt="Home service" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5nc877QlMHYErbqCEw5ddCWQhFHLsBMzNucQfJ0V9LVQqxe2cZvi5Hb_o1RkXqtDRa3zqYNxKau7sRKZwa8bLIWmIf_kBsu1NDrOTgryQGsyMkORbON40l1VG2iJ2lE7d8-0WRn0zx0yYS9f-PLJBuatOQr8V8fG9R30r20UGe-Xi82JlAKBDfx_cduYrPi5yULHHZmwkSCZFACSHe0jvuJKLe74PTnVBm68iw-xB9sBihfiJz7LHCfnXME5c1HgXx3omB-TLOgo"/>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-12">
          <h2 className="text-4xl font-extrabold font-headline">From Chaos to Calm <br/> in 3 Steps</h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-black text-xl">1</div>
              <div>
                <h4 className="text-xl font-bold font-headline mb-2">Select Your Need</h4>
                <p className="text-on-surface-variant">Choose from cleaning, repairs, or emergency support. Tell us what's wrong and how soon you need help.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-black text-xl">2</div>
              <div>
                <h4 className="text-xl font-bold font-headline mb-2">Book Instantly</h4>
                <p className="text-on-surface-variant">We match you with the nearest top-rated pro. Secure transparent pricing—no hidden "emergency" fees.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-black text-xl">3</div>
              <div>
                <h4 className="text-xl font-bold font-headline mb-2">Relax & Restore</h4>
                <p className="text-on-surface-variant">Your helper arrives and handles the heavy lifting while you get back to what matters most.</p>
              </div>
            </div>
          </div>
          <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-black text-xl shadow-lg hover:shadow-2xl transition-all">Start My Request</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
