"use client";
import AboutUs from "@/components/home/AboutUs";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HomeNav from "@/components/home/HomeNav";
import HowItWorks from "@/components/home/HowItWorks";
import Partners from "@/components/home/Partners";
import SmartFeatures from "@/components/home/SmartFeatures";
import UniversityDashboard from "@/components/home/UniversityDashboard";
import Waitlist from "@/components/home/Waitlist";
import WhyDifferent from "@/components/home/WhyDifferent";

export default function page() {
  return (
    <div className="overflow-hidden">
      <HomeNav />
      <Hero />
      <Partners />
      <HowItWorks />
      <SmartFeatures />
      <WhyDifferent />
      <UniversityDashboard />
      <AboutUs />
      <Waitlist />
      <FAQ />
      <Footer />
    </div>
  );
}
