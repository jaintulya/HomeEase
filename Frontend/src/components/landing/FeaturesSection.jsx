import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight">Trust Built on Reliability</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg italic">We focus on the human element of home services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-surface-container-highest transition-all group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary-container rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
            </div>
            <h3 className="text-2xl font-bold font-headline mb-4">Vetted Expertise</h3>
            <p className="text-on-surface-variant leading-relaxed">Every helper undergoes a rigorous 5-step background check and skill assessment. Only 5% of applicants make the cut.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-surface-container-highest transition-all group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-secondary-container rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>speed</span>
            </div>
            <h3 className="text-2xl font-bold font-headline mb-4">60-Min Response</h3>
            <p className="text-on-surface-variant leading-relaxed">Our local network ensures that most emergency requests are fulfilled within an hour of booking. Speed without compromise.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:bg-surface-container-highest transition-all group flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-tertiary-container rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
            </div>
            <h3 className="text-2xl font-bold font-headline mb-4">Quality Guaranteed</h3>
            <p className="text-on-surface-variant leading-relaxed">If you're not absolutely delighted with the service, we'll make it right. Our 100% Satisfaction Guarantee is non-negotiable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
