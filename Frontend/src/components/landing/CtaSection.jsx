import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto bg-primary-fixed rounded-xl p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 organic-blob translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black font-headline text-on-primary-fixed tracking-tight">Your Home is <br/> Calling for Calm.</h2>
          <p className="text-on-primary-fixed-variant text-xl max-w-xl mx-auto">Get verified help in under an hour. No subscriptions, just help when you need it.</p>
          <button className="bg-primary text-on-primary px-12 py-6 rounded-full font-black text-2xl shadow-2xl hover:bg-primary-dim transition-all">Book Your First Helper</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
