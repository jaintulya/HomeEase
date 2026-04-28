import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import Button from '../components/Button';

const WorkerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const [requestIndex, setRequestIndex] = useState(0);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) return null;

  const requests = [
    { id: 1, type: "AC Repair", client: "Vikram S.", location: "Hiranandani, Powai", time: "Tomorrow, 11:00 AM", price: "₹850", dist: "2.4 km" },
    { id: 2, type: "Full House Plumbing", client: "Meera K.", location: "Andheri West", time: "Friday, 02:00 PM", price: "₹2,100", dist: "4.8 km" },
    { id: 3, type: "Sofa Dry Cleaning", client: "Arjun P.", location: "Juhu Scheme", time: "Sat, 10:00 AM", price: "₹1,200", dist: "3.1 km" }
  ];

  const currentRequest = requests[requestIndex];

  const nextRequest = () => {
    setRequestIndex((prev) => (prev + 1) % requests.length);
  };

  return (
    <DashboardLayout activeRoute="dashboard" role="worker">
      {/* Header Section */}
      <header className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tight text-on-surface font-headline italic">Hello, {user.name || 'Professional'}.</h1>
          <p className="text-on-surface-variant text-lg">Your expertise is making homes better today.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 bg-surface-container-low p-2 pr-6 rounded-full border border-outline-variant/10 shadow-sm">
            <div className={`w-3 h-3 rounded-full ml-4 ${isOnline ? 'bg-success animate-pulse' : 'bg-outline-variant'}`}></div>
            <span className="text-sm font-bold text-on-surface">{isOnline ? 'Online' : 'Offline'}</span>
            <button 
              onClick={() => setIsOnline(!isOnline)}
              className={`w-12 h-6 rounded-full transition-all relative ${isOnline ? 'bg-primary' : 'bg-outline-variant'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isOnline ? 'left-7' : 'left-1'}`}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Today's Earnings", value: "₹2,450", icon: "payments", color: "text-primary" },
          { label: "Jobs Completed", value: "12", icon: "task_alt", color: "text-secondary" },
          { label: "Avg Rating", value: "4.9", icon: "star", color: "text-amber-500" },
          { label: "Active Jobs", value: "1", icon: "schedule", color: "text-tertiary" }
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className={`material-symbols-outlined ${stat.color} text-3xl`}>{stat.icon}</span>
              <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest font-headline italic">LIVE</span>
            </div>
            <p className="text-3xl font-black text-on-surface mb-1 font-headline tracking-tight">{stat.value}</p>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Active Job Card */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-[3rem] p-10 relative overflow-hidden h-[500px] shadow-sm border border-outline-variant/10 group">
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <span className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Active Job • In Progress</span>
              <div className="flex items-center gap-2 text-primary font-black">
                <span className="material-symbols-outlined text-sm animate-spin-slow">pending</span>
                <span className="text-sm">45m left</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-5xl font-black mb-4 font-headline leading-none text-on-surface">Deep Kitchen Sanitization</h2>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-base">person</span>
                <span className="font-bold">Priya Sharma</span>
                <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                <span className="material-symbols-outlined text-base">location_on</span>
                <span className="font-bold">Bandra West, Mumbai</span>
              </div>
            </div>

            <div className="mt-auto flex items-center gap-4">
              <Button icon="directions" className="!rounded-2xl !px-8">Navigate</Button>
              <Button icon="chat" variant="secondary" className="!rounded-2xl !px-8">Contact</Button>
              <div className="ml-auto flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-2xl border border-outline-variant/20">
                <span className="text-xs font-bold text-on-surface-variant">Payout</span>
                <span className="text-lg font-black text-on-surface">₹1,200</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-stone-200/50 rounded-l-[5rem] overflow-hidden opacity-40 group-hover:opacity-60 transition-opacity">
            <img alt="Kitchen" src="https://images.unsplash.com/photo-1556911220-e15224bbbe39?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale" />
          </div>
        </div>

        {/* New Requests & Upcoming Section */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* New Request Single Card */}
          <div className="bg-surface-container-highest rounded-[2.5rem] p-6 border border-outline-variant/10 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
                <h3 className="text-lg font-black font-headline text-on-surface">New Request</h3>
              </div>
              <button 
                onClick={nextRequest}
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm active:scale-90"
              >
                <span className="material-symbols-outlined text-xl">navigate_next</span>
              </button>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 mb-2 animate-page-fade-in relative z-10" key={currentRequest.id}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-black font-headline text-primary">{currentRequest.type}</h4>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{currentRequest.client} • {currentRequest.dist}</p>
                </div>
                <div className="bg-primary-container px-3 py-1 rounded-full">
                  <span className="text-xs font-black text-on-primary-container">{currentRequest.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-6">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span className="font-medium">{currentRequest.time}</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-primary text-on-primary py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">Accept Job</button>
                <button className="flex-1 bg-surface-container-high text-on-surface-variant py-3 rounded-2xl font-bold text-sm hover:bg-outline-variant/20 transition-colors">Ignore</button>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {requests.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === requestIndex ? 'bg-primary w-4' : 'bg-outline-variant/40'}`}></div>
              ))}
            </div>
          </div>

          {/* Upcoming Work Card */}
          <div className="bg-tertiary-container rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-sm group cursor-pointer hover:bg-tertiary-fixed-dim transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>event_upcoming</span>
              <h3 className="text-lg font-black font-headline text-on-tertiary-container">Upcoming Work</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-on-tertiary-container">Sofa Dry Cleaning</p>
                  <p className="text-[10px] font-bold text-on-tertiary-container/60 uppercase">Today • 04:30 PM</p>
                </div>
                <span className="material-symbols-outlined text-on-tertiary-container/40 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
              <div className="h-[1px] bg-on-tertiary-container/10"></div>
              <div className="flex items-center justify-between opacity-60">
                <div>
                  <p className="text-sm font-black text-on-tertiary-container">Full House Plumbing</p>
                  <p className="text-[10px] font-bold text-on-tertiary-container/60 uppercase">Tomorrow • 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Earnings visualization */}
      <div className="mt-12 bg-surface-container-low p-8 rounded-[2.5rem] shadow-sm border border-outline-variant/10">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black font-headline text-on-surface">Weekly Performance</h2>
            <div className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant flex items-center gap-2">
               <span className="w-2 h-2 bg-primary rounded-full"></span> This Week Trends
            </div>
         </div>
         <div className="flex items-end justify-between h-48 gap-4 px-4">
            {[45, 75, 55, 90, 100, 65, 30].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                <div className="relative w-full h-full flex items-end">
                   <div className="w-full bg-primary/10 rounded-t-xl transition-all group-hover:bg-primary/20" style={{ height: '100%' }}></div>
                   <div className="absolute w-full bg-primary rounded-t-xl transition-all group-hover:scale-y-105 origin-bottom shadow-sm" style={{ height: `${height}%` }}>
                     <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[10px] font-bold py-1 px-2 rounded-md transition-opacity whitespace-nowrap">
                        ₹{(height * 20).toLocaleString()}
                     </div>
                   </div>
                </div>
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-tighter">
                   {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
         </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black font-headline text-on-surface">Recent Feedback</h2>
          <div className="flex items-center gap-2 text-amber-500 font-bold bg-amber-500/10 px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-sm">star</span>
            <span className="text-sm">4.9 / 5.0</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Rahul V.", date: "2 days ago", rating: 5, comment: "Excellent work! Rahul was very professional and left the kitchen spotless.", service: "Deep Cleaning" },
            { name: "Sanya M.", date: "1 week ago", rating: 4, comment: "Punctual and efficient. The AC is working perfectly now.", service: "AC Repair" }
          ].map((rev, i) => (
            <div key={i} className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">
                    {rev.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">{rev.name}</p>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase">{rev.service}</p>
                  </div>
                </div>
                <div className="flex text-amber-500">
                  {[...Array(rev.rating)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-on-surface-variant italic">"{rev.comment}"</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-lg font-black text-primary mb-1">HomeEase Professional</p>
          <p className="text-sm text-on-surface-variant">© 2026 HomeEase. Crafting better homes together.</p>
        </div>
        <nav className="flex gap-8">
          <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
          <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Payouts</a>
          <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
        </nav>
      </footer>
    </DashboardLayout>
  );
};

export default WorkerDashboard;
