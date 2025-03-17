"use client";
import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'cart';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}) => {
  // Base styles
  let buttonClasses = 'flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles
  switch (variant) {
    case 'primary':
      buttonClasses += ' bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500';
      break;
    case 'secondary':
      buttonClasses += ' bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500';
      break;
    case 'danger':
      buttonClasses += ' bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
      break;
    case 'cart':
      buttonClasses += ' bg-blue-800 text-white hover:bg-blue-900 focus:ring-blue-500';
      break;
  }
  
  // Size styles
  switch (size) {
    case 'sm':
      buttonClasses += ' h-8 px-3 text-sm';
      break;
    case 'md':
      buttonClasses += ' h-10 px-4';
      break;
    case 'lg':
      buttonClasses += ' h-12 px-6 text-lg';
      break;
  }
  
  // Full width
  if (fullWidth) {
    buttonClasses += ' w-full';
  }
  
  // Combine with additional classes
  buttonClasses += ` ${className}`;
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};