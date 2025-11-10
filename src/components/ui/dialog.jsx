// components/ui/dialog.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DialogContext = React.createContext();

export const Dialog = ({ children, open, onOpenChange }) => {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
};

export const DialogTrigger = React.forwardRef(({ children, ...props }, ref) => {
  return React.cloneElement(children, {
    ref,
    onClick: () => {
      props.onClick?.();
    },
    ...props,
  });
});

DialogTrigger.displayName = 'DialogTrigger';

export const DialogContent = React.forwardRef(({ children, className, ...props }, ref) => {
  const { open, onOpenChange } = React.useContext(DialogContext);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              ref={ref}
              className={`grid w-full max-w-lg gap-4 border border-gray-200 bg-white p-6 shadow-lg rounded-2xl ${className}`}
              {...props}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
});

DialogContent.displayName = 'DialogContent';

export const DialogHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
);

export const DialogFooter = ({ className, ...props }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
);

export const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2 ref={ref} className={`text-lg font-semibold leading-none tracking-tight text-gray-900 ${className}`} {...props} />
));

DialogTitle.displayName = 'DialogTitle';

export const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={`text-sm text-gray-600 ${className}`} {...props} />
));

DialogDescription.displayName = 'DialogDescription';

export const DialogClose = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 ${className}`}
    onClick={() => React.useContext(DialogContext).onOpenChange?.(false)}
    {...props}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </button>
));

DialogClose.displayName = 'DialogClose';