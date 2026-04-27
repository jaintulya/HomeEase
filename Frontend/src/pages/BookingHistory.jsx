import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const BookingHistory = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);



  if (!user) return null;

  return (
    <DashboardLayout activeRoute="bookings">
      {/* Header Section */}
      <header className="mb-12 flex justify-between items-end">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold text-on-surface tracking-tight mb-4 font-headline">My Home Logs</h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">A curated history of your sanctuary's care. Review past transformations and prepare for upcoming ones.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-high rounded-full px-6 py-3 flex items-center gap-2 text-on-surface-variant cursor-pointer hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">tune</span>
              <span className="font-medium">Filter Services</span>
            </div>
          </div>
        </header>

        {/* Upcoming Sessions */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-on-surface font-headline">Upcoming Journeys</h2>
            <div className="h-[2px] flex-grow bg-surface-container-highest"></div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Large Feature Upcoming Card */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Scheduled Tomorrow</span>
                  <span className="text-primary font-bold text-lg">10:00 AM</span>
                </div>
                <div className="mb-8">
                  <h3 className="text-4xl font-black mb-2 font-headline">Deep Botanical Cleaning</h3>
                  <p className="text-on-surface-variant max-w-md">Our signature plant-based rejuvenation for your living room and kitchen areas.</p>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <img alt="Specialist" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvOq6dpB0NgP3_hXaGQdYQZXmXamSDGZor1hA2FrjzvQm0UwiFNJBVv60h66lSAX7v_yuGMWl04Un_Aa61OGd-v-Rs2yKeOdux4zynmdJlkxTlsILRfGZB9OBpnQDitIDN6P6f789YlUZNppg8xQnPIR0A73g9K0BE44u4PuYmStGhYakbuqHYUfAobmFnmw2-t7K3WpPuKRXjP0ETvNIuxLh197I3-VUb858DZg_asDU5KFJK9zt3DQuWVu1F6tjARu99BfmDi7U" />
                    <div>
                      <p className="text-sm font-bold text-on-surface">Elena Rodriguez</p>
                      <p className="text-xs text-on-surface-variant">Senior Specialist</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold shadow-sm hover:scale-105 transition-transform">Manage</button>
                    <button className="bg-surface-container-highest text-on-surface px-6 py-3 rounded-full font-bold hover:bg-surface-variant transition-colors">Details</button>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl group-hover:bg-primary-container/30 transition-colors"></div>
              <div className="absolute right-8 top-12 opacity-10">
                <span className="material-symbols-outlined text-[120px]">eco</span>
              </div>
            </div>

            {/* Small Upcoming Card */}
            <div className="col-span-12 lg:col-span-4 bg-tertiary-container rounded-xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">plumbing</span>
                <h3 className="text-2xl font-bold text-on-tertiary-container mb-2 font-headline">Kitchen Repair</h3>
                <p className="text-on-tertiary-container/70 text-sm">Fixture maintenance and leak inspection in the pantry area.</p>
              </div>
              <div className="mt-8">
                <p className="font-bold text-on-tertiary-container mb-4">Friday, Oct 24</p>
                <button className="w-full bg-on-tertiary-container text-tertiary-container py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">Reschedule</button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Logs (Service Tiles) */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-on-surface font-headline">Past Transformations</h2>
            <div className="h-[2px] flex-grow bg-surface-container-highest"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Service Tile 1 */}
            <div className="bg-surface-container-low rounded-xl p-6 transition-all hover:bg-surface-container-highest hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">mop</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase text-on-surface-variant/40 tracking-widest mb-1">Completed</span>
                  <span className="text-sm font-bold">Oct 12, 2024</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">Standard Refresh</h3>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Whole house vacuuming, dusting, and bathroom sanitation. Focus on high-traffic areas.</p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/15">
                <div className="flex -space-x-3">
                  <img alt="Specialist" className="w-8 h-8 rounded-full border-2 border-surface-container-low object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG0lpObHLv0tjT9AXh17gYMvXxOZfRcNcl4zbH-XFVad1bFhI_s6ATsp-abys5bUWi6HBIlO3hCugDDjEcBtKWgfTmYsELBbiY6Myga4sSYsWXH7oeYWOm6aV6aCS2GkcM2RKWByXtoguSILFNitLmhb2JMOmx4R-4Eme2N-kq4ZlG70O2v2O0Uwe3bpSLwGVf3MqnMwjAzD5txjXbmfWjPpLjwUi5tczZiEEhFd62uXOrdJUkhMocYZVKt6EX6exNoY7eyWNinbw" />
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container text-[10px] flex items-center justify-center font-bold border-2 border-surface-container-low">+1</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-primary text-sm font-bold hover:underline underline-offset-4 decoration-4">Rebook</button>
                  <span className="text-outline-variant">|</span>
                  <button className="text-on-surface-variant text-sm font-bold hover:text-on-surface">Rate</button>
                </div>
              </div>
            </div>

            {/* Service Tile 2 */}
            <div className="bg-surface-container-low rounded-xl p-6 transition-all hover:bg-surface-container-highest hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">grass</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase text-on-surface-variant/40 tracking-widest mb-1">Completed</span>
                  <span className="text-sm font-bold">Sep 28, 2024</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">Garden Grooming</h3>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Lawn mowing, hedge trimming, and seasonal flowerbed preparation for autumn.</p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/15">
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-primary text-sm font-bold hover:underline underline-offset-4 decoration-4">Rebook</button>
                  <span className="text-outline-variant">|</span>
                  <button className="text-on-surface-variant text-sm font-bold hover:text-on-surface">Invoice</button>
                </div>
              </div>
            </div>

            {/* Service Tile 3 */}
            <div className="bg-surface-container-low rounded-xl p-6 transition-all hover:bg-surface-container-highest hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-highest rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">local_laundry_service</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black uppercase text-on-surface-variant/40 tracking-widest mb-1">Completed</span>
                  <span className="text-sm font-bold">Sep 15, 2024</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">Laundry & Folding</h3>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Three loads of delicate linens, washed, dried, and organized by color profile.</p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/15">
                <div className="bg-secondary-container/50 px-3 py-1 rounded-full text-[10px] font-bold text-on-secondary-container">RECURRING</div>
                <div className="flex gap-2">
                  <button className="text-primary text-sm font-bold hover:underline underline-offset-4 decoration-4">Schedule</button>
                  <span className="text-outline-variant">|</span>
                  <button className="text-on-surface-variant text-sm font-bold hover:text-on-surface">Details</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Load Older Records
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-primary mb-1">HomeEase</p>
            <p className="text-sm text-on-surface-variant">© 2026 HomeEase. Crafted for the tactile hearth.</p>
          </div>
          <nav className="flex gap-8">
            <Link className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" to="#">Privacy Policy</Link>
            <Link className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" to="#">Terms of Service</Link>
            <Link className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" to="#">Contact Us</Link>
            <Link className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" to="#">Careers</Link>
          </nav>
        </footer>
    </DashboardLayout>
  );
};

export default BookingHistory;
