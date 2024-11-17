export interface SkillDev {
  id: number;
  img: string;
  name: string;
}

export interface ProjectDev {
  id: number;
  name: string;
  url: string;
}

export interface SocialDev {
  id: number;
  img: string;
  url: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  email: string;
  phone: string;
  socials: SocialDev[];
  skills: SkillDev[];
  projects: ProjectDev[];
}
