import { signupSchema } from "@/components/auth/signup/StepOne";
import z from "zod";

export type SignupSchemaType = z.infer<typeof signupSchema>;
