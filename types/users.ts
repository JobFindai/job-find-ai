import { signupSchema } from "@/components/auth/onboarding/StepOne";
import z from "zod";

export type SignupSchemaType = z.infer<typeof signupSchema>;
