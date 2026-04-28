import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const SERVICE_CATEGORIES = [
  {
    id: 'home',
    label: 'Home Services',
    icon: 'home',
    services: [
      { id: 'cleaning', title: 'Cleaning', icon: 'cleaning_services', description: 'Professional home deep cleaning' },
      { id: 'cooking', title: 'Cooking', icon: 'restaurant', description: 'Home chef for daily meals' },
      { id: 'babysitting', title: 'Babysitting', icon: 'child_care', description: 'Trusted childcare at home' },
      { id: 'gardening', title: 'Gardening', icon: 'eco', description: 'Lawn care & garden upkeep' },
    ],
  },
  {
    id: 'repair',
    label: 'Repair & Maintenance',
    icon: 'construction',
    services: [
      { id: 'plumbing', title: 'Plumbing', icon: 'plumbing', description: 'Pipe, drain & fixture fixes' },
      { id: 'electrician', title: 'Electrician', icon: 'electrical_services', description: 'Wiring, fuses & fittings' },
      { id: 'ac_repair', title: 'AC Repair', icon: 'ac_unit', description: 'AC servicing & diagnostics' },
      { id: 'appliance_repair', title: 'Appliance Repair', icon: 'home_repair_service', description: 'All appliance fixes' },
    ],
  },
];

const ServiceSelector = ({ selected, onSelect }) => {
  const [activeTab, setActiveTab] = useState('home');

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex gap-2 bg-surface-container p-1 rounded-xl w-fit">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
              activeTab === cat.id
                ? 'bg-surface-container-lowest text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-base">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-page-fade-in">
        {activeCategory.services.map((svc) => (
          <ServiceCard
            key={svc.id}
            service={svc}
            isSelected={selected?.id === svc.id}
            onSelect={onSelect}
          />
        ))}
      </div>

      {selected && (
        <div className="flex items-center gap-2 text-sm text-secondary font-semibold animate-page-fade-in">
          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <span>{selected.title} selected</span>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
