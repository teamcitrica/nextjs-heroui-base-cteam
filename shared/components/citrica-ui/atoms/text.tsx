import React from 'react';
import { TextProps } from '@/shared/types/components/text.type';

const Text: React.FC<TextProps> = ({ children, variant, color, weight = 'normal', textColor='color-text-black'}) => {

  const colorStyle = color ? { color } : { color: `var(--${textColor})`  };

  switch (weight) {
    case 'light':
      var classWeight = ` text-${variant}-light`;
      break;
    case 'normal':    
      var classWeight = '';
      break;
    case 'bold':
      var classWeight = ` text-${variant}-bold`;
      break;
    default: 
      var classWeight = '';
      break;
  } 
  return (
    <span 
      className={`text-${variant}${classWeight}`}
      style={{
        ...colorStyle,
      }}
      >
    {children}
    </span>
  )
};

export default Text;