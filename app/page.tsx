import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import HomeNav from "@/components/home/HomeNav";
import HowItWorks from "@/components/home/HowItWorks";
import Partners from "@/components/home/Partners";
import SmartFeatures from "@/components/home/SmartFeatures";
import UniversityDashboard from "@/components/home/UniversityDashboard";
import WhyDifferent from "@/components/home/WhyDifferent";

export default function page() {
  return (
    <div>
      <HomeNav />
      <Hero />
      <Partners />
      <HowItWorks />
      <SmartFeatures />
      <WhyDifferent />
      <UniversityDashboard />
      <AboutUs />
    </div>
  );
}
