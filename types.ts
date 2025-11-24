
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  // Detailed fields for modal
  longDescription?: string;
  gallery?: string[];
  features?: string[];
  role?: string;
  timeline?: string;
  client?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string; // Lucide icon name or simple string identifier
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    happyClients: number;
  };
}

export interface AppData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
}
