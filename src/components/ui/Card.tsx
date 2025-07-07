import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('bg-white rounded-lg shadow-sm border border-gray-200 p-6', className)}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={clsx('mb-4', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h3 className={clsx('text-lg font-semibold text-gray-900', className)}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div className={clsx(className)}>
      {children}
    </div>
  );
};
