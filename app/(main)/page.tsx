"use client";
import { Slide } from "@/components/animation/Slide";
import Navbar from "@/components/onboarding/Navbar";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId, isLoaded } = useAuth();
  if (!userId && isLoaded) {
    return redirect("/onboarding");
  }
  return (
    <Slide direction="up">
      <Navbar />
    </Slide>
  );
}
