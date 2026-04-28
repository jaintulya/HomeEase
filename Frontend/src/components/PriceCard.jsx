import React from 'react';

const BASE_PRICES = { small: 200, medium: 300, large: 450 };
const URGENCY_FEE = 150;
const TRANSPORT_FEE = 80;

const Row = ({ label, value, highlight, dim }) => (
  <div className={`flex justify-between items-center text-sm ${dim ? 'text-on-surface-variant' : ''}`}>
    <span className={dim ? '' : 'font-medium text-on-surface'}>{label}</span>
    <span className={`font-bold ${highlight ? 'text-primary text-base' : 'text-on-surface'}`}>{value}</span>
  </div>
);

const PriceCard = ({ service, workType, workSize, showTransport = false, hideNote = false }) => {
  const base = BASE_PRICES[workSize] ?? 0;
  const transport = showTransport ? TRANSPORT_FEE : 0;
  const total = base + URGENCY_FEE + transport;

  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm p-6 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-error-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
        <p className="font-extrabold text-on-surface text-base">Price Estimate</p>
      </div>

      <div className="space-y-1.5 pb-3 border-b border-outline-variant/20">
        {service   && <Row label="Service"   value={service} dim />}
        {workType  && <Row label="Work Type" value={workType} dim />}
        {workSize  && <Row label="Work Size" value={workSize.charAt(0).toUpperCase() + workSize.slice(1)} dim />}
      </div>

      <div className="space-y-2">
        <Row label="Base Price"   value={`₹${base}`} />
        <Row label="Urgency Fee"  value={`₹${URGENCY_FEE}`} />
        {showTransport && <Row label="Transport Fee" value={`₹${TRANSPORT_FEE}`} />}
        {!showTransport && !hideNote && (
          <p className="text-xs text-on-surface-variant italic leading-relaxed">
            * Transportation charges may apply if worker is far
          </p>
        )}
      </div>

      <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center">
        <span className="font-bold text-on-surface">Total</span>
        <span className="text-2xl font-extrabold text-primary">₹{total}</span>
      </div>
    </div>
  );
};

export { BASE_PRICES, URGENCY_FEE, TRANSPORT_FEE };
export default PriceCard;
