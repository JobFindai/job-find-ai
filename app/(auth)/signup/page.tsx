"use client";
import { Slide } from "@/components/animation/Slide";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye } from "lucide-react";
import { z } from "zod";
import { SignupSchemaType } from "@/types/users";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Zod Schema

export const signupSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email({ message: "Please enter a valid email" }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100)
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
});

export default function SignUp({ goStep }: { goStep: (step: number) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  });
  const router = useRouter();
  return (
    <Slide
      direction="right"
      className=" w-3/5 h-3/4 flex gap-10   flex-col items-center"
    >
      <header className=" w-full space-y-2">
        <h2 className="text-3xl font-semibold text-gray-800">
          Create your free account
        </h2>
        <span className="text-sm">Create your account for free with us</span>
      </header>
      <form
        onSubmit={handleSubmit((values) => {
          router.push("/onboarding");
        })}
        className=" flex flex-col gap-5 w-full"
      >
        <div className="flex flex-col gap-3">
          <Label className="text-gray-600">Email address</Label>
          <Input
            {...register("email")}
            className="h-11"
            placeholder="example@gmail.com"
          />
          {errors.email && (
            <span className="text-red-600  text-sm">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="space-y-3">
          <Label className="text-gray-600">Password</Label>
          <InputGroup className="h-11">
            <InputGroupInput
              {...register("password")}
              placeholder="********"
              type="password"
            />
            <InputGroupAddon align="inline-end">
              <Eye />
            </InputGroupAddon>
          </InputGroup>
          {errors.email && (
            <span className="text-red-600  text-sm">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mt-5 ">
          <Checkbox id="agree" className="size-6" />
          <Label htmlFor="agree" className="text-base font-normal">
            I agree with AI personalization of my experience
          </Label>
        </div>
        <div className="mt-5">
          <Button className="h-11 text-sm! bg-primary w-full">Continue</Button>
        </div>

        <div className="items-center flex flex-col w-full gap-3">
          <div className="flex items-center justify-center gap-7  w-full">
            <Separator className="w-1/3! h-0.5!" />
            <span>or</span>
            <Separator className="w-1/3! h-0.5!" />
          </div>
          <Button className="bg-gray-100 text-gray-700 w-full flex items-center  h-11 hover:bg-gray-200">
            <div className="size-5">
              <Image
                src="/google.png"
                alt="google"
                width={500}
                height={500}
                className="size-full"
              />
            </div>
            <span>Sign in with Google</span>
          </Button>
          <span className="text-sm">
            Already have an account? <b className="text-primary">Login</b>
          </span>
        </div>
      </form>
    </Slide>
  );
}
