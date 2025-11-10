// components/ui/button.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const Button = React.forwardRef(({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  asChild = false,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-brand-blue-500 text-white hover:bg-brand-blue-600 shadow-lg hover:shadow-xl',
    destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-brand-blue-500 text-brand-blue-500 bg-transparent hover:bg-brand-blue-500 hover:text-white',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-lg',
    ghost: 'hover:bg-gray-100 hover:text-gray-900',
    link: 'text-brand-blue-500 underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'h-9 px-3 text-xs',
    default: 'h-11 px-6 py-2',
    lg: 'h-14 px-8 text-lg',
    icon: 'h-10 w-10',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';