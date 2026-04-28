import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import StepProgress from '../components/StepProgress';
import ServiceSelector from '../components/ServiceSelector';
import BookingDetailsForm from '../components/BookingDetailsForm';
import Button from '../components/Button';
import { useBooking } from '../context/BookingContext';

const validateDetails = (serviceId, details) => {
  const errs = {};
  if (!details.date) errs.date = 'Please select a date';
  if (!details.timeSlot) errs.timeSlot = 'Please choose a time slot';
  if (!details.address || details.address.trim().length < 5)
    errs.address = 'Please enter a valid address';

  const requiredByService = {
    cleaning: ['houseSize', 'cleaningType'],
    cooking: ['mealType', 'duration'],
    babysitting: ['hours', 'ageGroup'],
    gardening: ['areaSize', 'toolsRequired'],
    plumbing: ['issueType', 'urgency'],
    electrician: ['problemType', 'fixtures'],
    ac_repair: ['acType', 'acIssue'],
    appliance_repair: ['applianceType'],
  };

  (requiredByService[serviceId] || []).forEach((key) => {
    if (!details[key]) errs[key] = 'This field is required';
  });

  return errs;
};

const BookingPage = () => {
  const navigate = useNavigate();
  const { booking, updateBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [detailsErrors, setDetailsErrors] = useState({});

  const handleServiceSelect = (service) => {
    updateBooking({ service, details: {} });
  };

  const handleDetailsChange = (details) => {
    updateBooking({ details });
    setDetailsErrors({});
  };

  const handleStep1Continue = () => {
    if (booking.service) setStep(2);
  };

  const handleStep2Continue = () => {
    const errs = validateDetails(booking.service?.id, booking.details || {});
    if (Object.keys(errs).length > 0) {
      setDetailsErrors(errs);
      return;
    }
    navigate('/workers');
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else navigate('/user-dashboard');
  };

  const handleCancel = () => {
    navigate('/user-dashboard');
  };

  return (
    <DashboardLayout activeRoute="booking">
      <StepProgress currentStep={step} />

      <div className="max-w-4xl mx-auto px-4 py-8 animate-page-fade-in">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">
            {step === 1 ? 'Choose a Service' : 'Service Details'}
          </h1>
          <p className="text-on-surface-variant mt-1">
            {step === 1
              ? 'Select the type of service you need at home.'
              : `Tell us more about your ${booking.service?.title} booking.`}
          </p>
        </div>

        {/* Step Content Card */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 p-8">
          {step === 1 && (
            <ServiceSelector
              selected={booking.service}
              onSelect={handleServiceSelect}
            />
          )}

          {step === 2 && (
            <BookingDetailsForm
              serviceId={booking.service?.id}
              initialData={booking.details}
              onChange={handleDetailsChange}
              errors={detailsErrors}
            />
          )}
        </div>

        {/* Navigation Row */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            <Button variant="secondary" icon="arrow_back" onClick={handleBack}>
              Back
            </Button>
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
          </div>

          {step === 1 && (
            <Button
              icon="arrow_forward"
              iconPosition="right"
              disabled={!booking.service}
              onClick={handleStep1Continue}
            >
              Continue
            </Button>
          )}

          {step === 2 && (
            <Button
              icon="arrow_forward"
              iconPosition="right"
              onClick={handleStep2Continue}
            >
              Find Workers
            </Button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookingPage;
