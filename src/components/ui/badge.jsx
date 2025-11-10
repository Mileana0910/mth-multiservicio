// components/ui/badge.jsx
import React from 'react';

export const Badge = React.forwardRef(({ variant = 'default', className, ...props }, ref) => {
  const variants = {
    default: 'bg-brand-blue-100 text-brand-blue-800 border border-brand-blue-200',
    secondary: 'bg-gray-100 text-gray-900 border border-gray-200',
    destructive: 'bg-red-100 text-red-800 border border-red-200',
    outline: 'text-gray-950 border border-gray-300',
    success: 'bg-green-100 text-green-800 border border-green-200',
  };

  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';