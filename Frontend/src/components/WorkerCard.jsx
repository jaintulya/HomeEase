import React from 'react';

const WorkerCard = ({ worker, isSelected, onSelect }) => {
  return (
    <div
      className={`
        relative bg-surface-container-lowest rounded-2xl p-6 border-2 transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-lg cursor-pointer
        ${isSelected ? 'border-primary shadow-md' : 'border-outline-variant/30'}
      `}
      onClick={() => onSelect(worker)}
    >
      {isSelected && (
        <span
          className="absolute top-3 right-3 material-symbols-outlined text-primary text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
      )}

      <div className="flex items-center gap-4 mb-4">
        <img
          src={worker.avatar}
          alt={worker.name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-outline-variant/30"
        />
        <div>
          <p className="font-bold text-on-surface">{worker.name}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span
              className="material-symbols-outlined text-amber-500 text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-sm font-bold text-on-surface">{worker.rating}</span>
            <span className="text-xs text-on-surface-variant">({worker.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm mb-4">
        <div className="flex items-center gap-1.5 text-on-surface-variant">
          <span className="material-symbols-outlined text-base">work_history</span>
          <span>{worker.experience} yrs exp.</span>
        </div>
        <span className="font-extrabold text-primary text-base">₹{worker.price}/hr</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {worker.badges.map((badge) => (
          <span
            key={badge}
            className="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold"
          >
            {badge}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onSelect(worker); }}
        className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
          isSelected
            ? 'bg-primary text-on-primary'
            : 'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary'
        }`}
      >
        {isSelected ? 'Selected ✓' : 'Select Worker'}
      </button>
    </div>
  );
};

export default WorkerCard;
