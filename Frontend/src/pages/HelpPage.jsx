import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Button from '../components/Button';
import Input from '../components/Input';

const FAQS = [
  {
    q: 'How do I cancel a booking?',
    a: 'Go to My Bookings, select the booking you want to cancel, and click the "Cancel" button. Cancellations are free up to 2 hours before service.',
  },
  {
    q: 'How are workers verified?',
    a: 'All HomeEase workers go through a background check, ID verification, and skill assessment before being listed on the platform.',
  },
  {
    q: 'What if I am unhappy with the service?',
    a: 'You can raise a query below or call our support line. We offer a satisfaction guarantee and will re-dispatch a worker if needed.',
  },
  {
    q: 'When will the worker arrive?',
    a: 'For standard bookings the worker arrives at your scheduled time. For emergency bookings, the ETA is shown on the confirmation screen.',
  },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-outline-variant/20 rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-surface-container-lowest hover:bg-surface-container transition-colors text-left"
      >
        <span className="font-semibold text-sm text-on-surface">{q}</span>
        <span className={`material-symbols-outlined text-on-surface-variant text-base transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-surface-container/40 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
          {a}
        </div>
      )}
    </div>
  );
};

const ISSUE_TYPES = ['Booking Issue', 'Worker Complaint', 'Payment Issue', 'Cancellation', 'Other'];

const HelpPage = () => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!issueType) errs.issueType = 'Please select an issue type';
    if (!description.trim() || description.trim().length < 10) errs.description = 'Please describe your issue (min 10 characters)';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    setIssueType('');
    setDescription('');
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <DashboardLayout activeRoute="help">
      <div className="max-w-5xl mx-auto px-4 py-8 animate-page-fade-in space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">Help Center</h1>
          <p className="text-on-surface-variant text-sm mt-1">We're here to help — reach out anytime</p>
        </div>

        {/* Section 1: Customer Support */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            <h2 className="font-extrabold text-on-surface">Customer Support</h2>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-2xl font-extrabold text-on-surface tracking-wide">+91 9876543210</p>
              <p className="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                Available 9 AM – 8 PM, Mon–Sat
              </p>
            </div>
            <Button
              icon="call"
              onClick={() => window.open('tel:+919876543210')}
            >
              Call Now
            </Button>
          </div>
        </div>

        {/* Section 2: Raise a Query */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>contact_support</span>
            <h2 className="font-extrabold text-on-surface">Raise a Query</h2>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center animate-page-fade-in">
              <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <p className="font-extrabold text-on-surface text-lg">Query Submitted!</p>
              <p className="text-sm text-on-surface-variant">Our team will reach out within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-on-surface">Issue Type</label>
                <select
                  value={issueType}
                  onChange={(e) => { setIssueType(e.target.value); setErrors(p => ({ ...p, issueType: undefined })); }}
                  className={`w-full bg-surface-container-low border rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.issueType ? 'border-error' : 'border-outline-variant/40'}`}
                >
                  <option value="">Select issue type</option>
                  {ISSUE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.issueType && <p className="text-xs text-error font-medium">{errors.issueType}</p>}
              </div>
              <Input
                id="help-description"
                label="Description"
                as="textarea"
                rows={4}
                placeholder="Describe your issue in detail..."
                value={description}
                onChange={(e) => { setDescription(e.target.value); setErrors(p => ({ ...p, description: undefined })); }}
                error={errors.description}
              />
              <div className="flex justify-end">
                <Button type="submit" icon="send">Submit Query</Button>
              </div>
            </form>
          )}
        </div>

        {/* Section 3: FAQ */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>quiz</span>
            <h2 className="font-extrabold text-on-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FaqItem key={i} {...faq} />)}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpPage;
