import React from 'react';

const Input = ({
  label,
  id,
  error,
  icon,
  type = 'text',
  className = '',
  as: Tag = 'input',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-on-surface">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg pointer-events-none">
            {icon}
          </span>
        )}
        <Tag
          id={id}
          type={type}
          className={`
            w-full bg-surface-container-low border rounded-xl px-4 py-3 text-sm text-on-surface
            placeholder:text-on-surface-variant/60
            focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
            transition-all duration-200
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-error ring-1 ring-error/30' : 'border-outline-variant/40'}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-error font-medium">{error}</p>}
    </div>
  );
};

export default Input;
