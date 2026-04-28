import React from 'react';
import Button from './Button';

const ConfirmModal = ({ isOpen, onCancelBooking, onFindAnother }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-page-fade-in">
      <div className="bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/20 p-8 max-w-sm w-full mx-4 space-y-5">
        <div className="text-center">
          <div className="w-14 h-14 bg-error-container/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-error-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              warning
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-on-surface font-headline mb-1">Cancel Booking?</h2>
          <p className="text-sm text-on-surface-variant">
            Are you sure you want to cancel this emergency booking?
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Button variant="danger" icon="close" className="w-full justify-center" onClick={onCancelBooking}>
            Cancel Booking
          </Button>
          <Button variant="secondary" icon="person_search" className="w-full justify-center" onClick={onFindAnother}>
            Find Another Worker
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
