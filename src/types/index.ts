export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  image: string;
  level: string;
}

export interface QualificationItem {
  name: string;
  institution: string;
  year: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}