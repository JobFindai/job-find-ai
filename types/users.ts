import { signupSchema } from "@/app/(auth)/signup/page";
import z from "zod";

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

export type User = {
  id: string;
  clerkId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  userName: string | null;
  createdAt: string;
  updatedAT: string;
  type: UserType | null;
  currentLevel: LevelType | null;
  targetLevel: LevelType | null;
  onboardingStatus: "PENDING" | "COMPLETED" | null;
};
