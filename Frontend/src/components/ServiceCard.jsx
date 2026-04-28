import React from 'react';

const ServiceCard = ({ service, isSelected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      className={`
        group relative flex flex-col items-start gap-3 p-5 rounded-2xl border-2 text-left
        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
        ${
          isSelected
            ? 'border-primary bg-primary-container/30 shadow-md'
            : 'border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40'
        }
      `}
    >
      {isSelected && (
        <span
          className="absolute top-3 right-3 material-symbols-outlined text-primary text-lg"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
      )}
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
          isSelected
            ? 'bg-primary text-on-primary'
            : 'bg-surface-container-high text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container'
        }`}
      >
        <span className="material-symbols-outlined text-xl">{service.icon}</span>
      </div>
      <div>
        <p className={`font-bold text-sm ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
          {service.title}
        </p>
        <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{service.description}</p>
      </div>
    </button>
  );
};

export default ServiceCard;
