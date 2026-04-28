import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import StepProgress from '../components/StepProgress';
import PriceCard, { BASE_PRICES, URGENCY_FEE, TRANSPORT_FEE } from '../components/PriceCard';
import ConfirmModal from '../components/ConfirmModal';
import Button from '../components/Button';

const WORKERS = [
  { id: 'w1', name: 'Ravi Sharma',   rating: 4.9, experience: 6, distance: 1.2, eta: '15 min', avatar: 'https://i.pravatar.cc/150?img=12', isNearby: true  },
  { id: 'w2', name: 'Meena Pillai',  rating: 4.8, experience: 4, distance: 2.8, eta: '20 min', avatar: 'https://i.pravatar.cc/150?img=47', isNearby: true  },
  { id: 'w3', name: 'Suresh Naidu',  rating: 4.7, experience: 7, distance: 3.9, eta: '25 min', avatar: 'https://i.pravatar.cc/150?img=15', isNearby: true  },
  { id: 'w4', name: 'Anita Singh',   rating: 4.6, experience: 5, distance: 6.5, eta: '35 min', avatar: 'https://i.pravatar.cc/150?img=32', isNearby: false },
  { id: 'w5', name: 'Deepak Rao',    rating: 4.5, experience: 9, distance: 8.1, eta: '40 min', avatar: 'https://i.pravatar.cc/150?img=53', isNearby: false },
  { id: 'w6', name: 'Priya Menon',   rating: 4.8, experience: 3, distance: 11,  eta: '50 min', avatar: 'https://i.pravatar.cc/150?img=45', isNearby: false },
];

const assignWorker = (exclude = []) => {
  const nearby = WORKERS.filter(w => w.isNearby && !exclude.includes(w.id));
  if (nearby.length) return nearby.sort((a, b) => a.distance - b.distance)[0];
  const far = WORKERS.filter(w => !exclude.includes(w.id));
  return far.sort((a, b) => a.distance - b.distance)[0] ?? null;
};

const EmergencyWorkerPage = () => {
  const navigate  = useNavigate();
  const [booking, setBooking]       = useState(null);
  const [worker,  setWorker]        = useState(null);
  const [loading, setLoading]       = useState(true);
  const [showModal, setShowModal]   = useState(false);
  const excludeRef = useRef([]);

  useEffect(() => {
    const raw = localStorage.getItem('emergency_booking');
    if (!raw) { navigate('/emergency'); return; }
    setBooking(JSON.parse(raw));
    const timer = setTimeout(() => {
      const assigned = assignWorker(excludeRef.current);
      setWorker(assigned);
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleFindAnother = () => {
    setShowModal(false);
    if (!worker) return;
    excludeRef.current = [...excludeRef.current, worker.id];
    setWorker(null);
    setLoading(true);
    setTimeout(() => {
      const next = assignWorker(excludeRef.current);
      setWorker(next);
      setLoading(false);
    }, 1800);
  };

  const handleCancelBooking = () => {
    localStorage.removeItem('emergency_booking');
    navigate('/user-dashboard');
  };

  const handleConfirm = () => {
    const final = { ...booking, worker, usedTransport: !worker?.isNearby };
    localStorage.setItem('emergency_result', JSON.stringify(final));
    localStorage.removeItem('emergency_booking');
    navigate('/emergency-success');
  };

  const isNearby       = worker?.isNearby ?? true;
  const base           = BASE_PRICES[booking?.workSize] ?? 0;
  const totalPrice     = base + URGENCY_FEE + (isNearby ? 0 : TRANSPORT_FEE);

  return (
    <DashboardLayout activeRoute="booking">
      <StepProgress currentStep={3} />
      <ConfirmModal isOpen={showModal} onCancelBooking={handleCancelBooking} onFindAnother={handleFindAnother} />

      <div className="max-w-3xl mx-auto px-4 py-8 animate-page-fade-in space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 bg-error-container/20 border border-error-container/40 rounded-2xl px-6 py-4">
          <span className="material-symbols-outlined text-error-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          <div>
            <h1 className="text-2xl font-extrabold text-on-surface font-headline">Worker Assignment</h1>
            <p className="text-sm text-on-surface-variant">Finding the nearest available worker for you</p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-12 min-h-[400px] flex flex-col items-center justify-center gap-6 animate-page-fade-in">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <div className="text-center">
                <p className="text-xl font-extrabold text-on-surface">Finding nearest available worker...</p>
                <p className="text-sm text-on-surface-variant mt-1.5">Checking workers within 5 km radius</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
            </div>
          </div>
        )}

        {/* Assigned Worker */}
        {!loading && worker && (
          <div className="space-y-5 animate-page-fade-in">
            {/* ... Worker Profile Card ... */}
            <div className="bg-surface-container-lowest rounded-2xl border-2 border-primary/30 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Worker Assigned</p>
              </div>

              <div className="flex items-center gap-5 mb-5">
                <img src={worker.avatar} alt={worker.name} className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-container" />
                <div className="flex-1">
                  <p className="text-xl font-extrabold text-on-surface">{worker.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-on-surface">{worker.rating}</span>
                    <span className="text-xs text-on-surface-variant">· {worker.experience} yrs exp.</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${worker.isNearby ? 'bg-secondary-container text-on-secondary-container' : 'bg-tertiary-container text-on-tertiary-container'}`}>
                  {worker.isNearby ? 'Nearby' : 'Far'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 bg-surface-container p-3 rounded-xl">
                  <span className="material-symbols-outlined text-on-surface-variant text-base">location_on</span>
                  <div>
                    <p className="text-xs text-on-surface-variant">Distance</p>
                    <p className="text-sm font-bold text-on-surface">{worker.distance} km</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-surface-container p-3 rounded-xl">
                  <span className="material-symbols-outlined text-on-surface-variant text-base">schedule</span>
                  <div>
                    <p className="text-xs text-on-surface-variant">Estimated ETA</p>
                    <p className="text-sm font-bold text-on-surface">{worker.eta}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <PriceCard
              service={booking?.service}
              workType={booking?.workType}
              workSize={booking?.workSize}
              showTransport={!worker.isNearby}
              hideNote={true}
            />

            {/* Actions */}
            <div className="flex gap-3 justify-end pt-2">
              <Button variant="secondary" onClick={() => setShowModal(true)} icon="close">
                Cancel
              </Button>
              <Button icon="check_circle" iconPosition="right" onClick={handleConfirm}>
                Confirm Booking  ·  ₹{totalPrice}
              </Button>
            </div>
          </div>
        )}

        {/* No worker found */}
        {!loading && !worker && (
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-10 text-center space-y-3">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant">person_off</span>
            <p className="font-bold text-on-surface">No workers available right now</p>
            <Button variant="secondary" onClick={handleCancelBooking}>Back to Dashboard</Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EmergencyWorkerPage;
