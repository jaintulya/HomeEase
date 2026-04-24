import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-error-container text-on-error-container organic-blob px-6 py-2 font-bold text-sm">
            <span className="material-symbols-outlined text-sm">bolt</span>
            Immediate Help Available
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold font-headline leading-[1.1] text-on-surface tracking-tight">
            When home life <br/> gets <span className="text-primary italic">hectic</span>, we step in.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Emergency housekeeping, childcare, and repair services verified by professionals. Because your sanctuary shouldn't be a source of stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-primary-dim transition-all">Book Help Now</button>
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-fixed transition-all">View Services</button>
          </div>
          <div className="flex items-center gap-4 pt-6">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-background object-cover" alt="smiling woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBibsdFTruZDnP-wBh04C-W6NMCVsF6adwHFB8mDbG_SdOTkMY52PRDb9spcCHiQywuLQeuzFP2QDCRr7l-UFKbk5v2oxqW-oq5e0_54PX7JCI4PFw-X93jDVDOsGlPtPcPXue1wslL5xYOnu-oZJI2tRVYNjnHDkT4EtEmfx4h6rrlhDUdz2IpPABS8VgSZ5YUXU43QChzlIJ0bCMzn2eADPqbrHqAItT_l5LdHDFncKXCdKzhfHqEm5FTlezzQCB0KI1B1Iz1PqM"/>
              <img className="w-10 h-10 rounded-full border-2 border-background object-cover" alt="friendly man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-2xUwxyzCHO_Kp3ps-VZqNX-AyksZwPVzVp2EcEgeSOxzFvDJ5Wbm6ks-KvWuIuoMJKkj-SRdnbs9QBo5mUmwER9tPxKdlehVXu5HA2xFix4cpri8roXhixursBpaDDgrifUWJs-6ZHN-XEir6QrsSrIrXlqEYejV6ag2pRoeuKdbZFwchMR1kGoB8vQXKaBq24M2u6XJKtiIOWQPEYAfG5yrPYMn_Czf1GQcBGbzsIM4P7Vc8B7UGN2IS91WQx1J-62aXs-YdrY"/>
              <img className="w-10 h-10 rounded-full border-2 border-background object-cover" alt="young professional woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV8plRKilwfdNQOS9GbIRjqLIKdhR11tSOLFgHq2WPzCVVpDGYJ9j1dumdeHCF5IzvmQGvwhXPJ4-BId3Csxiwe6JpYdyg09gimAx0ks3hFTecg8rGFI0nw_Fo1iDhH0Krboe_M88LfNNRIu4PxK4Ohu_eXO7xc2i5OtTSI2trGpexNu4CCT-DAl_bR2uywfXhh-ftp5T5DNQhtCnLsZGeWi_bYRS97Ob0jYSuphUfOsYe2uOpQSMngc-0pKXkfn9fx97tbR_UpxE"/>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">Joined by <span className="text-primary font-bold">1,200+</span> verified local helpers</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/20 organic-blob -z-10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-secondary-container/30 organic-blob -z-10 blur-2xl"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img alt="Happy family" className="w-full h-full object-cover aspect-[4/5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRaRPh9YzlWdJDclQJgsBTBKcmb8HWypEkOsv5nFsJKuFnXaV_Vpobb6oqpwo5Vxng8YXrf-d3mNmsgmmOg-a2xJKzgzV_WIOR-ryXTBuof8sTbnFSoBujvfieBUITM7YPO-NPDLVeNKUbmgrZ4iJxw74u2yIGm-HYpDirhJ7vXknnOH4tg5PoREBfxvJLKiYg9ALw2u-5SwFYxrNcaBCCYYAxued9S7pZYLh6a3GBt704hR33QMSaemcTWOIZCc2NEB2EOsdjBoc"/>
            <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg">
              <p className="font-headline font-bold text-primary italic">"HomeEase saved our weekend when the pipes burst. Help arrived in 40 minutes!"</p>
              <p className="text-sm mt-2 text-on-surface-variant">— The Miller Family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
