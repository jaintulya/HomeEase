import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import StepProgress from '../components/StepProgress';
import Button from '../components/Button';
import { BASE_PRICES, URGENCY_FEE, TRANSPORT_FEE } from '../components/PriceCard';

const EmergencySuccess = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('emergency_result');
    if (!raw) { navigate('/emergency'); return; }
    setResult(JSON.parse(raw));
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [navigate]);

  const handleBackToDashboard = () => {
    localStorage.removeItem('emergency_result');
    navigate('/user-dashboard');
  };

  const handleBookAgain = () => {
    localStorage.removeItem('emergency_result');
    navigate('/emergency');
  };

  if (!result) return null;

  const { service, workType, workSize, address, worker, usedTransport } = result;
  const base  = BASE_PRICES[workSize] ?? 0;
  const total = base + URGENCY_FEE + (usedTransport ? TRANSPORT_FEE : 0);
  const bookingId = `EMG-${Date.now().toString(36).toUpperCase()}`;

  return (
    <DashboardLayout activeRoute="booking">
      <StepProgress currentStep={4} />

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
        {/* Success Banner */}
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
            <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-on-surface font-headline mb-2">Booking Confirmed!</h1>
          <p className="text-on-surface-variant text-lg">Your emergency worker is on the way.</p>
          <div className="inline-flex items-center gap-2 mt-3 bg-surface-container px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">confirmation_number</span>
            <span className="text-sm font-bold text-on-surface">{bookingId}</span>
          </div>
        </div>

        {/* Details Card */}
        <div className={`bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Worker Banner */}
          {worker && (
            <div className="bg-error-container/15 px-8 py-6 flex items-center gap-5 border-b border-outline-variant/20">
              <img src={worker.avatar} alt={worker.name} className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-container" />
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Your Worker</p>
                <p className="text-xl font-extrabold text-on-surface">{worker.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold">{worker.rating}</span>
                  <span className="text-xs text-on-surface-variant">· {worker.experience} yrs exp.</span>
                  <span className="text-xs text-on-surface-variant">· ETA: {worker.eta}</span>
                </div>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs font-bold text-on-surface-variant">Total Paid</p>
                <p className="text-xl font-extrabold text-primary">₹{total}</p>
              </div>
            </div>
          )}

          {/* Booking Details */}
          <div className="p-8 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {[
              { icon: 'bolt',           label: 'Service',   value: service   },
              { icon: 'build',          label: 'Work Type', value: workType  },
              { icon: 'home',           label: 'Work Size', value: workSize ? workSize.charAt(0).toUpperCase() + workSize.slice(1) : '—' },
              { icon: 'location_on',    label: 'Address',   value: address   },
              { icon: 'location_on',    label: 'Distance',  value: worker ? `${worker.distance} km` : '—'  },
              { icon: 'schedule',       label: 'ETA',       value: worker?.eta ?? '—' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">{item.icon}</span>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{item.label}</p>
                </div>
                <p className="text-sm font-semibold text-on-surface truncate">{item.value || '—'}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Button variant="secondary" icon="grid_view" onClick={handleBackToDashboard} size="lg">
            Back to Dashboard
          </Button>
          <Button icon="bolt" iconPosition="right" onClick={handleBookAgain} size="lg">
            Book Again
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmergencySuccess;
