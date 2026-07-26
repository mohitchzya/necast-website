export type ScreenType = 
  | 'splash' 
  | 'home' 
  | 'overlay' 
  | 'overlay-settings' 
  | 'gameplay' 
  | 'resolution' 
  | 'bitrate' 
  | 'settings';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlightColor?: 'crimson' | 'blue';
}

export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  screenType: ScreenType;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
  stat?: string;
  statLabel?: string;
}

export interface StepItem {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  screenType: 'splash' | 'account' | 'setup' | 'live';
}
