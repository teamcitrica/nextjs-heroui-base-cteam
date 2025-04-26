export interface TextProps {
  children: React.ReactNode;
  variant: 'display' | 'headline' | 'title' | 'subtitle' | 'body' | 'label' |'headlinecustom';
  weight?: 'light' | 'normal' | 'bold';
  color?: string;
  // size?: string;
  textColor?: string;
}