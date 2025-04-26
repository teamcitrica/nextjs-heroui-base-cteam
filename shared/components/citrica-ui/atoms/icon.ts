import React from 'react';
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { getCSSVariable } from '@/shared/utils/general';

// Define the type for all available Lucide icons
type IconName = keyof typeof LucideIcons;

interface IconProps extends LucideProps {
  name: IconName;
  size?: number;
  strokeWidth?: number; // Optional stroke width for the icon
  color?: string; // Optional color for the icon
  fallback?: IconName; // Optional fallback icon if the requested one doesn't exist
}

// EDIT HERE
const DEFAULT_SIZE = 20;
const DEFAULT_STROKE_WIDTH = 2;
const DEFAULT_FALLBACK: IconName = 'AlertCircle';

const Icon = ({ 
    name, 
    size = DEFAULT_SIZE, 
    strokeWidth = DEFAULT_STROKE_WIDTH, 
    fallback = DEFAULT_FALLBACK,
    ...props }: IconProps): JSX.Element => {
  // Get the icon component dynamically from the imported Lucide icons
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  // Ensure IconComponent is treated as a valid React component
  if (!IconComponent) {
    throw new Error(`Icon "${name}" not found and fallback "${fallback}" is invalid.`);
  }

  // Return the icon with all props passed through
  return React.createElement(IconComponent as React.ComponentType<LucideProps>, { size, strokeWidth, ...props });
};

export default Icon;
export type { IconName };