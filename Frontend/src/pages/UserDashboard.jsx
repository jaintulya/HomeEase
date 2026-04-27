import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const UserDashboard = () => {
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
    <DashboardLayout activeRoute="dashboard">
      {/* Header Section */}
      <header className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight text-on-surface font-headline">Welcome back, {user.name || 'User'}.</h1>
            <p className="text-on-surface-variant text-lg">Your home is managed, your peace is preserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-error-container text-on-error-container px-8 py-4 rounded-xl flex items-center gap-3 font-bold hover:shadow-xl transition-all border-none relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              Emergency Book
            </button>
            <div className="flex items-center gap-4 bg-surface-container-low p-2 pr-6 rounded-full">
              <img alt="User Profile" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcjVfVARVnv0xToNqjwMh2_40z25UOlT1FmowQ87Xo13UK9rZH48AFk8WTnPjUB0d5BBpsy7jFG6OnDs5xcKSVGNPIvVy_m23UbhjtoCqVDEbqhLyRFWiWSKd0Y3eOiiw2AltyklfyEAyFCWEAbUxBkA2_PLmPNHOVjlLj_QGr-j7gf5_Kmnj3fZNSJvdSn9LzlgyY9l9F8hspnBgCBiG7C1A1t7kAl8J5tjoDQg4obyOUsgKwFKy5FJDXAVLC6UJ_8K-Wv3Sdzl0" />
              <div className="leading-tight">
                <p className="font-bold text-on-surface">{user.name || 'Alex Rivers'}</p>
                <p className="text-xs text-on-surface-variant">Member</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Bento Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Active Booking Large Tile */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between relative overflow-hidden h-[400px]">
            <div className="relative z-10">
              <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold mb-4">IN PROGRESS</span>
              <h2 className="text-4xl font-bold mb-2 font-headline">Deep Kitchen Sanitization</h2>
              <p className="text-on-surface-variant max-w-md">Helper: Sarah Jenkins is currently cleaning your cooking space with organic citrus agents.</p>
            </div>
            <div className="mt-8 flex gap-12 relative z-10">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Arrival</span>
                <span className="text-2xl font-bold text-primary">09:15 AM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Est. Completion</span>
                <span className="text-2xl font-bold text-on-surface">12:30 PM</span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-1/2 rounded-l-[4rem] overflow-hidden opacity-90">
              <img alt="Kitchen cleaning" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCft4ikfcSYsjCBLutcc5cKN6uN__LJzH-dYgqhSuXaaY6K93eySmP6XtQFgrqGxdj2yTznl9Ea54T7lH2N5UipZ1pFjUJr987HxNH4rh0LAVdgG3HD5I_Ax6RIyVaMwWrPutqQwPmyEdAx_YpamrJU87WC35i6iV8ZGvOrdE447V-d5uLygW4Ej2LAMm4EoHwE0STPHhVwHRT4C0v2dI30Lrq0KMeeGJwXksJDH7_ukHfkSWEMzDLny7DSz-cDz1aWI3owI-bDjys" />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent"></div>
            </div>
          </div>

          {/* Quick Actions / Stats */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-surface-container-highest rounded-xl p-8 flex items-center justify-between group cursor-pointer hover:bg-primary-container/20 transition-colors">
              <div>
                <p className="text-on-surface-variant font-medium">Home Status</p>
                <h3 className="text-2xl font-bold text-secondary font-headline">All Secure</h3>
              </div>
              <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div className="bg-tertiary-container rounded-xl p-8 flex items-center justify-between group cursor-pointer hover:bg-tertiary-fixed-dim transition-colors">
              <div>
                <p className="text-on-tertiary-container font-medium">Next Scheduled</p>
                <h3 className="text-2xl font-bold text-on-tertiary-container font-headline">Garden Care</h3>
                <p className="text-sm text-tertiary">Friday, 10:00 AM</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-tertiary">eco</span>
            </div>
          </div>

          {/* History Section - Asymmetric Layout */}
          <div className="col-span-12 mt-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight font-headline">Recent History</h2>
              <Link to="/bookings" className="text-primary font-bold flex items-center gap-2 group">
                View All Activity
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* History Tile 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/10 group hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">pest_control</span>
                </div>
                <p className="text-xs font-bold text-on-surface-variant mb-1">MAY 14, 2024</p>
                <h4 className="text-xl font-bold mb-4 font-headline">Pest Inspection</h4>
                <p className="text-on-surface-variant text-sm mb-6">Completed by EcoShield Solutions. All clear certificate issued.</p>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-on-surface">5.0</span>
                </div>
              </div>
              {/* History Tile 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/10 group hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">plumbing</span>
                </div>
                <p className="text-xs font-bold text-on-surface-variant mb-1">MAY 11, 2024</p>
                <h4 className="text-xl font-bold mb-4 font-headline">Pipe Maintenance</h4>
                <p className="text-on-surface-variant text-sm mb-6">Faucets tightened and drainage checked in guest wing.</p>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-on-surface">4.8</span>
                </div>
              </div>
              {/* History Tile 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/10 group hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">delivery_dining</span>
                </div>
                <p className="text-xs font-bold text-on-surface-variant mb-1">MAY 08, 2024</p>
                <h4 className="text-xl font-bold mb-4 font-headline">Grocery Stocking</h4>
                <p className="text-on-surface-variant text-sm mb-6">Pantry replenishment and fridge organization completed.</p>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-on-surface">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Segment */}
        <footer className="mt-24 pt-12 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-primary mb-1">HomeEase</p>
            <p className="text-sm text-on-surface-variant">© 2026 HomeEase. Crafted for the tactile hearth.</p>
          </div>
          <nav className="flex gap-8">
            <a className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Terms of Service</a>
            <a className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Contact Us</a>
            <a className="text-sm text-[#5e605a] hover:text-[#a33f00] transition-colors" href="#">Careers</a>
          </nav>
        </footer>
    </DashboardLayout>
  );
};

export default UserDashboard;
