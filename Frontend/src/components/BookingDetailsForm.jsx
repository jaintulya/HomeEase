import React, { useState, useEffect } from 'react';
import Input from './Input';

const TIME_SLOTS = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM', 'Custom',
];

const DYNAMIC_FIELDS = {
  cleaning: [
    { key: 'houseSize', label: 'House Size', type: 'select', options: ['1BHK', '2BHK', '3BHK', '4BHK+'] },
    { key: 'cleaningType', label: 'Cleaning Type', type: 'select', options: ['Full Home', 'Kitchen Only', 'Bathroom Only'] },
  ],
  cooking: [
    { key: 'mealType', label: 'Meal Type', type: 'select', options: ['Breakfast', 'Lunch', 'Dinner', 'All Meals'] },
    { key: 'duration', label: 'Duration (hours)', type: 'select', options: ['1', '2', '3', '4', '5'] },
  ],
  babysitting: [
    { key: 'hours', label: 'Hours Required', type: 'select', options: ['2', '4', '6', '8', '10', '12'] },
    { key: 'ageGroup', label: 'Child Age Group', type: 'select', options: ['0–2 years', '3–5 years', '6–10 years', '11+ years'] },
  ],
  gardening: [
    { key: 'areaSize', label: 'Garden Area', type: 'select', options: ['Small (< 200 sqft)', 'Medium (200–500 sqft)', 'Large (500+ sqft)'] },
    { key: 'toolsRequired', label: 'Tools Required?', type: 'select', options: ['Yes, bring tools', 'No, I have tools'] },
  ],
  plumbing: [
    { key: 'issueType', label: 'Issue Type', type: 'select', options: ['Leak', 'Blockage', 'Installation', 'Other'] },
    { key: 'urgency', label: 'Urgency Level', type: 'select', options: ['Standard', 'Urgent', 'Emergency'] },
  ],
  electrician: [
    { key: 'problemType', label: 'Problem Type', type: 'select', options: ['Wiring', 'Short Circuit', 'Fan/Light Install', 'Other'] },
    { key: 'fixtures', label: 'Number of Fixtures', type: 'select', options: ['1', '2–5', '5–10', '10+'] },
  ],
  ac_repair: [
    { key: 'acType', label: 'AC Type', type: 'select', options: ['Split AC', 'Window AC', 'Central AC', 'Portable AC'] },
    { key: 'acIssue', label: 'Issue Type', type: 'select', options: ['Not Cooling', 'Noise', 'Leaking', 'Not Starting', 'Service'] },
  ],
  appliance_repair: [
    { key: 'applianceType', label: 'Appliance Type', type: 'select', options: ['Washing Machine', 'Refrigerator', 'Microwave', 'TV', 'Other'] },
    { key: 'issueDesc', label: 'Issue Description', type: 'textarea' },
  ],
};

const BookingDetailsForm = ({ serviceId, initialData, onChange, errors }) => {
  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    setFormData(initialData || {});
  }, [serviceId]);

  const handleChange = (key, value) => {
    const updated = { ...formData, [key]: value };
    setFormData(updated);
    onChange(updated);
  };

  const dynamicFields = DYNAMIC_FIELDS[serviceId] || [];

  return (
    <div className="space-y-8">
      {/* Common Fields */}
      <section>
        <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
          Schedule
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="booking-date"
            label="Date"
            type="date"
            icon="calendar_today"
            value={formData.date || ''}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => handleChange('date', e.target.value)}
            error={errors?.date}
          />
          <Input
            id="booking-address"
            label="Service Address"
            icon="location_on"
            placeholder="Enter your full address"
            value={formData.address || ''}
            onChange={(e) => handleChange('address', e.target.value)}
            error={errors?.address}
          />
        </div>
      </section>

      {/* Time Slots */}
      <section>
        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">
          Preferred Time Slot
        </p>
        <div className="flex flex-wrap gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => {
                if (slot === 'Custom') {
                  handleChange('timeSlot', 'Custom');
                  setFormData(prev => ({ ...prev, isCustomTime: true }));
                } else {
                  setFormData(prev => ({ ...prev, timeSlot: slot, isCustomTime: false }));
                  onChange({ ...formData, timeSlot: slot, isCustomTime: false });
                }
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all duration-150 ${
                formData.timeSlot === slot || (slot === 'Custom' && formData.isCustomTime)
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-surface-container-lowest border-outline-variant/40 text-on-surface hover:border-primary/50'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        
        {formData.isCustomTime && (
          <div className="mt-4 animate-page-fade-in max-w-xs">
            <Input
              id="custom-time"
              label="Specify Time"
              type="time"
              icon="schedule"
              value={formData.customTimeValue || ''}
              onChange={(e) => {
                const time = e.target.value;
                const [hours, minutes] = time.split(':');
                const period = hours >= 12 ? 'PM' : 'AM';
                const displayHours = hours % 12 || 12;
                const formatted = `${String(displayHours).padStart(2, '0')}:${minutes} ${period}`;
                setFormData(prev => ({ ...prev, customTimeValue: time, timeSlot: formatted, isCustomTime: true }));
                onChange({ ...formData, customTimeValue: time, timeSlot: formatted, isCustomTime: true });
              }}
              error={errors?.timeSlot}
            />
          </div>
        )}

        {errors?.timeSlot && !formData.isCustomTime && (
          <p className="text-xs text-error font-medium mt-1">{errors.timeSlot}</p>
        )}
      </section>

      {/* Dynamic Service-Specific Fields */}
      {dynamicFields.length > 0 && (
        <section>
          <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            Service Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dynamicFields.map((field) => {
              if (field.type === 'select') {
                return (
                  <div key={field.key} className="flex flex-col gap-1.5">
                    <label htmlFor={field.key} className="text-sm font-semibold text-on-surface">
                      {field.label}
                    </label>
                    <select
                      id={field.key}
                      value={formData[field.key] || ''}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className={`w-full bg-surface-container-low border rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${
                        errors?.[field.key] ? 'border-error' : 'border-outline-variant/40'
                      }`}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors?.[field.key] && (
                      <p className="text-xs text-error font-medium">{errors[field.key]}</p>
                    )}
                  </div>
                );
              }
              if (field.type === 'textarea') {
                return (
                  <Input
                    key={field.key}
                    id={field.key}
                    label={field.label}
                    as="textarea"
                    rows={3}
                    placeholder="Describe the issue..."
                    value={formData[field.key] || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    error={errors?.[field.key]}
                    className="md:col-span-2"
                  />
                );
              }
              return null;
            })}
          </div>
        </section>
      )}

      {/* Notes */}
      <section>
        <Input
          id="booking-notes"
          label="Additional Notes (optional)"
          as="textarea"
          rows={3}
          placeholder="Any special instructions or preferences..."
          value={formData.notes || ''}
          onChange={(e) => handleChange('notes', e.target.value)}
        />
      </section>
    </div>
  );
};

export default BookingDetailsForm;
