import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogoTextProps {
  asLink?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LogoText({ 
  asLink = true, 
  className, 
  size = 'md' 
}: LogoTextProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const logoContent = (
    <motion.span
      className={cn(
        "font-extrabold tracking-tighter text-2xl",
        sizeClasses[size],
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Nave <span className="text-primary">Mãe</span>
    </motion.span>
  );

  if (asLink) {
    return (
      <Link href="/" className="flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}