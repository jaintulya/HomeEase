import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import StepProgress from '../components/StepProgress';
import WorkerList from '../components/WorkerList';
import Button from '../components/Button';
import { useBooking } from '../context/BookingContext';

const DetailRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <span className="material-symbols-outlined text-on-surface-variant text-base mt-0.5">{icon}</span>
    <div>
      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-on-surface">{value || '—'}</p>
    </div>
  </div>
);

const WorkerSelectionPage = () => {
  const navigate = useNavigate();
  const { booking, updateBooking } = useBooking();
  const [step, setStep] = useState(3);

  const handleWorkerSelect = (worker) => {
    updateBooking({ selectedWorker: worker });
  };

  const handleStep3Continue = () => {
    if (booking.selectedWorker) setStep(4);
  };

  const handleConfirmBooking = () => {
    navigate('/confirmation');
  };

  const handleBack = () => {
    if (step === 4) setStep(3);
    else navigate('/booking');
  };

  const handleCancel = () => navigate('/user-dashboard');

  const { service, details, selectedWorker } = booking;

  if (!service || !details) {
    navigate('/booking');
    return null;
  }

  return (
    <DashboardLayout activeRoute="booking">
      <StepProgress currentStep={step} />

      <div className="max-w-5xl mx-auto px-4 py-8 animate-page-fade-in">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">
            {step === 3 ? 'Choose a Worker' : 'Review Your Booking'}
          </h1>
          <p className="text-on-surface-variant mt-1">
            {step === 3
              ? `Workers available for ${service.title} on ${details.date || 'your selected date'}`
              : 'Please review your booking details before confirming.'}
          </p>
        </div>

        {/* Step 3 */}
        {step === 3 && (
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 p-8">
            <WorkerList
              serviceId={service.id}
              selected={selectedWorker}
              onSelect={handleWorkerSelect}
            />
          </div>
        )}

        {/* Step 4 — Confirmation Preview */}
        {step === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* LEFT: Booking Summary */}
            <div className="lg:col-span-3 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-8 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-4">
                  <span className="material-symbols-outlined text-sm">receipt_long</span>
                  Booking Summary
                </span>
                <h2 className="text-2xl font-extrabold text-on-surface font-headline">{service.title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <DetailRow icon="calendar_today" label="Date" value={details.date} />
                <DetailRow icon="schedule" label="Time" value={details.timeSlot} />
                <DetailRow icon="location_on" label="Address" value={details.address} />
                {details.houseSize && <DetailRow icon="home" label="House Size" value={details.houseSize} />}
                {details.cleaningType && <DetailRow icon="cleaning_services" label="Cleaning Type" value={details.cleaningType} />}
                {details.mealType && <DetailRow icon="restaurant" label="Meal Type" value={details.mealType} />}
                {details.issueType && <DetailRow icon="report_problem" label="Issue Type" value={details.issueType} />}
                {details.acType && <DetailRow icon="ac_unit" label="AC Type" value={details.acType} />}
                {details.applianceType && <DetailRow icon="home_repair_service" label="Appliance" value={details.applianceType} />}
                {details.notes && <DetailRow icon="sticky_note_2" label="Notes" value={details.notes} />}
              </div>

              <div className="pt-4 border-t border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-on-surface-variant font-medium">Estimated Total</p>
                  <p className="text-2xl font-extrabold text-primary">
                    ₹{selectedWorker ? selectedWorker.price * 2 : '—'}
                  </p>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">Based on 2 hours × ₹{selectedWorker?.price}/hr</p>
              </div>
            </div>

            {/* RIGHT: Worker Profile */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-8 flex flex-col items-center text-center gap-4">
              <img
                src={selectedWorker.avatar}
                alt={selectedWorker.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-primary-container"
              />
              <div>
                <p className="text-xl font-extrabold text-on-surface">{selectedWorker.name}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-amber-500 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-on-surface">{selectedWorker.rating}</span>
                  <span className="text-xs text-on-surface-variant">({selectedWorker.reviews} reviews)</span>
                </div>
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between text-sm bg-surface-container p-3 rounded-xl">
                  <span className="text-on-surface-variant font-medium">Experience</span>
                  <span className="font-bold text-on-surface">{selectedWorker.experience} years</span>
                </div>
                <div className="flex justify-between text-sm bg-surface-container p-3 rounded-xl">
                  <span className="text-on-surface-variant font-medium">Rate</span>
                  <span className="font-bold text-primary">₹{selectedWorker.price}/hr</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {selectedWorker.badges.map((b) => (
                  <span key={b} className="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            <Button variant="secondary" icon="arrow_back" onClick={handleBack}>
              Back
            </Button>
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
          </div>

          {step === 3 && (
            <Button
              icon="arrow_forward"
              iconPosition="right"
              disabled={!selectedWorker}
              onClick={handleStep3Continue}
            >
              Review Booking
            </Button>
          )}

          {step === 4 && (
            <Button
              icon="check_circle"
              iconPosition="right"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </Button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WorkerSelectionPage;
