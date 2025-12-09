import { LucideIcon } from "lucide-react";

// Service types
export interface Service {
  id: string;
  icon: string; // Icon name as string (e.g., "Facebook", "Instagram")
  title: string;
  description: string;
  features: string[];
}

// Case Study types
export interface CaseStudy {
  id: string;
  clientType: string;
  industry: string;
  goal: string;
  strategy: string;
  results: string[];
  conclusion: string;
}

// Form Submission types
export interface FormSubmission {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website?: string;
  budget: string;
  message: string;
  submittedAt: string; // ISO date string
  status: "new" | "contacted" | "converted" | "archived";
}

// Database configuration
export interface DatabaseConfig {
  useLocalStorage: boolean;
  mongoUrl?: string;
}

// Auth types
export interface AuthState {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}
