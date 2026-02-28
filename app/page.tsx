"use client";
import { Slide } from "@/components/animation/Slide";
import Navbar from "@/components/dashboard/Navbar";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return redirect("/onboarding");
  }
  return (
    <Slide direction="up">
      <Navbar />
    </Slide>
  );
}
