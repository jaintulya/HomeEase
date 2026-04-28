import React from 'react';

const SIZES = [
  { id: 'small',  label: 'Small',  sub: 'Light Work',    icon: 'water_drop', price: 200 },
  { id: 'medium', label: 'Medium', sub: 'Standard Work',  icon: 'home',       price: 300 },
  { id: 'large',  label: 'Large',  sub: 'Heavy Work',     icon: 'factory',    price: 450 },
];

const WorkSizeSelector = ({ value, onChange }) => (
  <div className="flex gap-3 flex-wrap">
    {SIZES.map((s) => (
      <button
        key={s.id}
        type="button"
        onClick={() => onChange(s.id)}
        className={`flex-1 min-w-[90px] flex flex-col items-center gap-2 py-4 px-3 rounded-2xl border-2 font-semibold text-sm transition-all duration-200 ${
          value === s.id
            ? 'border-primary bg-primary-container/30 text-primary shadow-sm'
            : 'border-outline-variant/30 bg-surface-container-lowest text-on-surface hover:border-primary/40'
        }`}
      >
        <span className={`material-symbols-outlined text-2xl ${value === s.id ? 'text-primary' : 'text-on-surface-variant'}`}>
          {s.icon}
        </span>
        <span className="font-bold">{s.label}</span>
        <span className="text-xs text-on-surface-variant">{s.sub}</span>
        <span className={`text-xs font-bold ${value === s.id ? 'text-primary' : 'text-on-surface-variant'}`}>₹{s.price}</span>
      </button>
    ))}
  </div>
);

export default WorkSizeSelector;
