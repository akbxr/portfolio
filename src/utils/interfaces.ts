export interface UserObject {
  success: boolean;
  user: User;
}

export interface User {
  about: About;
  username: string;
  email: string;
  role: string;
  timeline: Timeline[];
  skills: Skill[];
  social_handles: SocialHandle[];
  createdAt: string;
  updatedAt: string;
  refreshToken: string;
}

export interface About {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote: string;
  exp_year: string;
  address: string;
  some_total: string;
  phoneNumber: string;
  avatar: Avatar;
  alternateAvatars: any[];
}

export interface Avatar {
  url: string;
}

export interface Skill {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: Avatar;
  category: 'language' | 'framework' | 'tool';
  _id: string;
}

export interface Image {
  public_id: string;
  url: string;
}

export interface SocialHandle {
  platform: string;
  url: string;
  image: Image;
  enabled: boolean;
  _id: string;
}

export interface Timeline {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}
