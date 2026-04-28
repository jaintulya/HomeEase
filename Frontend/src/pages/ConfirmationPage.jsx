import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import StepProgress from '../components/StepProgress';
import Button from '../components/Button';
import { useBooking } from '../context/BookingContext';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { booking, resetBooking } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const { service, details, selectedWorker } = booking;

  if (!service || !selectedWorker) {
    navigate('/booking');
    return null;
  }

  const bookingId = `HE-${Date.now().toString(36).toUpperCase()}`;

  const handleBackToDashboard = () => {
    resetBooking();
    navigate('/user-dashboard');
  };

  const handleBookAnother = () => {
    resetBooking();
    navigate('/booking');
  };

  return (
    <DashboardLayout activeRoute="booking">
      <StepProgress currentStep={5} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Success Banner */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
            <span
              className="material-symbols-outlined text-4xl text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-on-surface font-headline mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-on-surface-variant text-lg">
            Your {service.title} service has been scheduled successfully.
          </p>
          <div className="inline-flex items-center gap-2 mt-3 bg-surface-container px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">confirmation_number</span>
            <span className="text-sm font-bold text-on-surface">{bookingId}</span>
          </div>
        </div>

        {/* Details Card */}
        <div
          className={`bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden mb-6 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Worker Banner */}
          <div className="bg-primary-container/40 px-8 py-6 flex items-center gap-5 border-b border-outline-variant/20">
            <img
              src={selectedWorker.avatar}
              alt={selectedWorker.name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-container"
            />
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Your Worker</p>
              <p className="text-xl font-extrabold text-on-surface">{selectedWorker.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-sm font-bold">{selectedWorker.rating}</span>
                <span className="text-xs text-on-surface-variant">· {selectedWorker.experience} yrs exp.</span>
              </div>
            </div>
            <div className="ml-auto text-right">
              <p className="text-xs font-bold text-on-surface-variant">Rate</p>
              <p className="text-xl font-extrabold text-primary">₹{selectedWorker.price}/hr</p>
            </div>
          </div>

          {/* Booking Details Grid */}
          <div className="p-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              { icon: 'home_repair_service', label: 'Service', value: service.title },
              { icon: 'calendar_today', label: 'Date', value: details.date },
              { icon: 'schedule', label: 'Time', value: details.timeSlot },
              { icon: 'location_on', label: 'Address', value: details.address },
              details.houseSize && { icon: 'home', label: 'House Size', value: details.houseSize },
              details.cleaningType && { icon: 'cleaning_services', label: 'Cleaning Type', value: details.cleaningType },
              details.mealType && { icon: 'restaurant', label: 'Meal Type', value: details.mealType },
              details.issueType && { icon: 'report_problem', label: 'Issue', value: details.issueType },
              details.acType && { icon: 'ac_unit', label: 'AC Type', value: details.acType },
              details.applianceType && { icon: 'home_repair_service', label: 'Appliance', value: details.applianceType },
            ]
              .filter(Boolean)
              .map((item, i) => (
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
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Button variant="secondary" icon="grid_view" onClick={handleBackToDashboard} size="lg">
            Back to Dashboard
          </Button>
          <Button icon="add_circle" iconPosition="right" onClick={handleBookAnother} size="lg">
            Book Another Service
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConfirmationPage;
