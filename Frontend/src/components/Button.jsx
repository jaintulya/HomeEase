import React from 'react';

const variants = {
  primary: 'bg-primary text-on-primary hover:bg-primary-dim disabled:bg-surface-container-high disabled:text-on-surface-variant disabled:cursor-not-allowed',
  secondary: 'bg-surface-container text-on-surface hover:bg-surface-container-high border border-outline-variant/40',
  ghost: 'bg-transparent text-on-surface-variant hover:bg-surface-container',
  danger: 'bg-error-container text-on-error-container hover:opacity-90',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 font-bold rounded-xl
        transition-all duration-200 active:scale-95 shadow-sm
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {loading && (
        <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-base">{icon}</span>
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-base">{icon}</span>
      )}
    </button>
  );
};

export default Button;
