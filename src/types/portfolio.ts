export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  type: "mobile" | "fullstack" | "web" | "backend" | "ai" | "fintech";
  featured: boolean;
  githubRepo?: string;
  liveUrl?: string;
  image?: string;
};

export type Experience = {
  title: string;
  period: string;
  description: string;
};

export type PortfolioProfile = {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  availableForWork: boolean;
  bio: string[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: Experience[];
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
};
