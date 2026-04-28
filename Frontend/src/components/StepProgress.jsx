import React from 'react';

const STEPS = [
  { id: 1, label: 'Service', icon: 'home_repair_service' },
  { id: 2, label: 'Details', icon: 'edit_note' },
  { id: 3, label: 'Workers', icon: 'people' },
  { id: 4, label: 'Confirm', icon: 'task_alt' },
];

const StepProgress = ({ currentStep }) => {
  return (
    <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {STEPS.map((step, idx) => {
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? 'bg-primary text-on-primary'
                        : isActive
                        ? 'bg-primary-container text-on-primary-container ring-2 ring-primary ring-offset-2'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    {isCompleted ? (
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-sm">{step.icon}</span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold transition-colors ${
                      isActive ? 'text-primary' : isCompleted ? 'text-on-surface' : 'text-on-surface-variant'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 rounded-full overflow-hidden bg-surface-container-high">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: currentStep > step.id ? '100%' : '0%' }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
