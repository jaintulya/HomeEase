import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import Button from '../components/Button';

const MessagesPage = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout activeRoute="messages">
      <div className="max-w-5xl mx-auto px-4 py-8 animate-page-fade-in">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">Messages</h1>
          <p className="text-on-surface-variant text-sm mt-1">Stay updated on your bookings and workers</p>
        </div>

        {/* Empty State */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-16 flex flex-col items-center justify-center text-center gap-5">
          <div className="w-20 h-20 bg-primary-container/30 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-primary/60">chat_bubble</span>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-on-surface mb-2">No Messages Yet</h2>
            <p className="text-sm text-on-surface-variant max-w-xs">
              You'll see updates here once you book a service. Workers will reach out through this inbox.
            </p>
          </div>
          <Button icon="add" onClick={() => navigate('/booking')} className="mt-2">
            Book a Service
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;
