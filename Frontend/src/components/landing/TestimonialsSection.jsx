import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-4xl font-extrabold font-headline max-w-md">Hear from our Happy Homeowners</h2>
          <p className="text-on-surface-variant text-lg">Over 50,000 homes restored to peace of mind since 2020.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex text-primary mb-4">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            </div>
            <p className="text-lg font-medium italic mb-6">"Absolute lifesaver. Our cleaner cancelled last minute before a dinner party and HomeEase had a professional at our door within 50 minutes."</p>
            <div className="flex items-center gap-4">
              <img className="w-12 h-12 rounded-full object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEhPcaqAnrzk0_9gU61Fs1vIxjvcOzyfgbvyaswRM3rVdUZ2z3lRL2boB037vwKZubCHltR2OO5xTa0B-rCBhD8Gz_3j8CcdapJguOBsquNtuUsOwLzWUUQygM4V_B0bxIA5Ucoj27cB-ofa55EP2wWXwAnfxnYwif4MHVC35fClAquK_BOptGUufTUgqYxUdi2LDWslpc-qTrm4lnz7Frq_ZP1SKq11WnSwXx7kmhLEim82k5ehZ6omWyYky4WWhR3LyvFBgiVHI"/>
              <div>
                <p className="font-bold">Sarah Jenkins</p>
                <p className="text-sm text-on-surface-variant">Chicago, IL</p>
              </div>
            </div>
          </div>
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 scale-105 z-10 relative">
            <div className="flex text-primary mb-4">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            </div>
            <p className="text-lg font-medium italic mb-6">"As a single parent, emergency repairs are a nightmare. HomeEase fixed my dishwasher on a Sunday morning. Pricing was fair and the pro was so kind."</p>
            <div className="flex items-center gap-4">
              <img className="w-12 h-12 rounded-full object-cover" alt="David Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk0WnElaCPFJbmPU0_Yec1yjzn7AHBOnVfXFzjTUcGLN7HO54xc-T1WA7YOKkbRpjA4pxq2sT_zlyIUW_XSAcoPuCEcYPjC7SIQL_MVc6u6unwmEmILVi7ZXHXfauNjseXIzivIe0AXTSE33USSUbLoSVSbHvaRV-UnIgFd8wymBQfuVORJBQ-C6ZKpZa_K6xlPHp7jzBJ2xWZbILSJNZCRH3xG6qGpVx_RfjhcGvOBr_DfUq5ccCfkmX6uiSRKYkrUus_l22I_oo"/>
              <div>
                <p className="font-bold">David Chen</p>
                <p className="text-sm text-on-surface-variant">Austin, TX</p>
              </div>
            </div>
          </div>
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex text-primary mb-4">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            </div>
            <p className="text-lg font-medium italic mb-6">"Highly recommended for elder care support. We needed urgent help for my mother's home and the assistant was patient and incredibly thorough."</p>
            <div className="flex items-center gap-4">
              <img className="w-12 h-12 rounded-full object-cover" alt="Elena Rodriguez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXWlQFWFOC-5V7_PTSKKDXffL_wz7xhs1G9nGWMS1OpiEiEh7gKa6HeTCG-TICw-0RvyhOsMONIM_YxuaVhpS913oT9loqLtgyx3cCmIIsjksjp-YKfZmC_GG5p0yeVcKKqO076_ovfjirg_I4BL-70yZhfYZToPFCTwRUduggGghp8NVNDIkxtLMnrDP3MvSYEH1QOk7ppjBCzdtJgSemDYiOEUCc_3lft1il9tzO635i9sD5k4xvM3UAJa8IyKnznXX7-d3Tsx0"/>
              <div>
                <p className="font-bold">Elena Rodriguez</p>
                <p className="text-sm text-on-surface-variant">Miami, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
