import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children, activeRoute, role: propRole }) => {
  const navigate = useNavigate();
  
  // Detect role from localStorage or prop
  const userData = localStorage.getItem('user');
  let role = 'user';
  if (propRole) {
    role = propRole;
  } else if (userData) {
    try {
      const parsed = JSON.parse(userData);
      role = parsed.role === 'worker' ? 'worker' : 'user';
    } catch (e) {
      console.error("Error parsing user data", e);
    }
  }

  const [isMinimized, setIsMinimized] = useState(() => {
    return localStorage.getItem('sidebarMinimized') === 'true';
  });

  const toggleMinimize = () => {
    const newState = !isMinimized;
    setIsMinimized(newState);
    localStorage.setItem('sidebarMinimized', newState.toString());
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navLinks = role === 'worker' ? [
    { id: 'dashboard', label: 'Dashboard', icon: 'grid_view', to: '/worker-dashboard' },
    { id: 'requests',  label: 'Job Requests', icon: 'pending_actions', to: '#' },
    { id: 'earnings',  label: 'My Earnings', icon: 'payments', to: '#' },
    { id: 'messages',  label: 'Messages', icon: 'chat_bubble', to: '#' },
    { id: 'profile',   label: 'Profile', icon: 'account_circle', to: '#' },
  ] : [
    { id: 'dashboard', label: 'Dashboard', icon: 'grid_view', to: '/user-dashboard' },
    { id: 'bookings',  label: 'Bookings', icon: 'calendar_today', to: '/bookings' },
    { id: 'messages',  label: 'Messages', icon: 'chat_bubble', to: '/messages' },
    { id: 'profile',   label: 'Profile', icon: 'account_circle', to: '/profile' },
  ];

  return (
    <div className="bg-background text-on-background min-h-screen flex font-body">
      {/* SideNavBar Component */}
      <aside 
        className={`fixed left-0 top-0 flex flex-col py-8 bg-stone-100 h-screen transition-all duration-300 rounded-r-[3rem] shadow-[20px_0_40px_rgba(73,24,0,0.03)] z-50 ${isMinimized ? 'w-24' : 'w-64'}`}
      >
        <div className={`px-8 mb-10 flex items-center ${isMinimized ? 'justify-center' : 'justify-between'}`}>
          {!isMinimized && <span className="text-xl font-black text-[#a33f00] truncate">HomeEase</span>}
          {isMinimized && <span className="text-xl font-black text-[#a33f00]">H</span>}
          
          <button 
            onClick={toggleMinimize}
            className={`text-[#a33f00] hover:bg-stone-200 rounded-full p-2 flex items-center justify-center transition-colors ${isMinimized ? 'absolute -right-4 bg-white shadow-md border border-stone-200' : ''}`}
          >
            <span className="material-symbols-outlined">{isMinimized ? 'chevron_right' : 'menu_open'}</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-2 overflow-y-auto no-scrollbar">
          {navLinks.map(link => (
            <Link 
              key={link.id}
              className={`rounded-full mx-2 px-4 py-3 flex items-center ${isMinimized ? 'justify-center' : 'gap-3'} transition-transform hover:translate-x-1 ${activeRoute === link.id ? 'bg-[#ffae89] text-[#a33f00] font-bold' : 'text-[#5e605a] hover:bg-stone-200'}`} 
              to={link.to}
              title={link.label}
            >
              <span className="material-symbols-outlined" style={activeRoute === link.id ? { fontVariationSettings: "'FILL' 1" } : {}}>{link.icon}</span>
              {!isMinimized && <span className="text-sm truncate">{link.label}</span>}
            </Link>
          ))}
        </div>

        {role === 'user' && (
          <div className={`px-6 mb-8 mt-auto flex justify-center`}>
            <button 
              onClick={() => navigate('/booking')}
              className={`py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-full font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-95 transition-transform ${isMinimized ? 'w-12 h-12 p-0' : 'w-full'}`}
              title="Book New Service"
            >
              <span className="material-symbols-outlined">add</span>
              {!isMinimized && <span>Book New</span>}
            </button>
          </div>
        )}

        <div className={`border-t border-outline-variant/15 pt-6 flex flex-col gap-2 ${role === 'worker' ? 'mt-auto' : ''}`}>
          <Link 
            className={`rounded-full mx-2 px-4 py-3 flex items-center ${isMinimized ? 'justify-center' : 'gap-3'} transition-transform hover:translate-x-1 ${activeRoute === 'help' ? 'bg-[#ffae89] text-[#a33f00] font-bold' : 'text-[#5e605a] hover:bg-stone-200'}`} 
            to={role === 'worker' ? '#' : "/help"}
            title="Help Center"
          >
            <span className="material-symbols-outlined" style={activeRoute === 'help' ? { fontVariationSettings: "'FILL' 1" } : {}}>help</span>
            {!isMinimized && <span className="text-sm truncate">Help Center</span>}
          </Link>
          <button 
            onClick={handleLogout} 
            className={`rounded-full mx-2 px-4 py-3 flex items-center ${isMinimized ? 'justify-center' : 'gap-3 text-left w-full'} transition-transform hover:translate-x-1 text-[#5e605a] hover:bg-stone-200`}
            title="Logout"
          >
            <span className="material-symbols-outlined">logout</span>
            {!isMinimized && <span className="text-sm truncate">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className={`flex-1 p-12 w-full transition-all duration-300 animate-page-fade-in ${isMinimized ? 'ml-24' : 'ml-64'}`}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
