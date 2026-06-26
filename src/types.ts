export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  category: "core" | "frontend" | "backend" | "tools" | "specialized";
  level: string;
  isMecApproved?: boolean;
  tags: string[];
  imageUrl?: string;
  verifyUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;

  category:
    | "frontend"
    | "backend"
    | "fullstack"
    | "mobile";

  tags: string[];
  year: string;
  role: string;
  client: string;

  stats?: {
    label: string;
    value: string;
  }[];

  previewType:
    | "legal"
    | "burger"
    | "testing"
    | "dashboard"
    | "finance"
    | "weather";

  images?: string[];  // caminhos das imagens reais em /public/projects/
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    percentage: number;
    icon: string;
  }[];
}