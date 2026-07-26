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
  screenType: 'splash' | 'home' | 'setup' | 'live' | 'settings' | 'account';
  tags: string[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  category: string;
  status: 'released' | 'in-progress' | 'planned';
  votes: number;
  iconName: string;
  description: string;
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
