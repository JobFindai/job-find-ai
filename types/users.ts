import { signupSchema } from "@/app/(main)/(auth)/signup/page";
import { User } from "lucide-react";
import z, { string } from "zod";

export type SignupSchemaType = z.infer<typeof signupSchema>;

export type UserType =
  | "STUDENT"
  | "EARLY_CAREER"
  | "MID_CAREER"
  | "EXPERIENCED_PROFESSIONAL"
  | "CAREER_SWITCHER"
  | "ADMIN";

export type LevelType =
  | "ENTRY_LEVEL"
  | "MID_LEVEL"
  | "SENIOR_LEVEL"
  | "LEAD_MANAGER";

export type Qualification = {
  degree: string | null;
  field: string | null;
  graduationDate: string | null;
  institution: string | null;
};

export type Profile = {
  id: number;
  bio?: string;
  resumeUrl?: string;
  location?: string;

  // Parsed resume data
  skills: string[];
  experience?: JSON;
  education?: Qualification[];
  certifications?: string[];
  languages: string[];
  yearsOfExperience?: number;

  // Work authorization (critical for F-1/H-1B users)
  workAuthorization?: string;
  sponsorshipRequired: boolean;

  // External links
  linkedinUrl?: string;
  portfolioUrl?: string;
  githubUrl?: string;

  // AI-generated summary from resume parsing
  aiSummary?: string;
  resumeParsedAt?: Date;

  userId: number;

  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  clerkId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  userName: string | null;
  profile: Profile | null;
  createdAt: string;
  updatedAT: string;
  type: UserType | null;
  currentLevel: LevelType | null;
  targetLevel: LevelType | null;
  onboardingStatus: "PENDING" | "COMPLETED" | null;
};
