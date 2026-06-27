export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  codeSnippet: string;
  previewUrl?: string;
  githubUrl?: string;
  demoLogs: string[];
  imageUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // matches lucide-react names
  technologies: string[];
  command: string;
  codeOutput: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number; icon: string }[];
}

export interface Profile {
  name: string;
  role: string;
  alias: string;
  bio: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  experience: {
    period: string;
    role: string;
    company: string;
    description: string;
    tags: string[];
  }[];
  education: {
    period: string;
    degree: string;
    institution: string;
  }[];
}

export interface ConsoleLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
  timestamp: string;
}
