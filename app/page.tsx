import Hero from "@/components/home/Hero";
import HomeNav from "@/components/home/HomeNav";
import HowItWorks from "@/components/home/HowItWorks";
import Partners from "@/components/home/Partners";
import SmartFeatures from "@/components/home/SmartFeatures";

export default function page() {
  return (
    <div>
      <HomeNav />
      <Hero />
      <Partners />
      <HowItWorks />
      <SmartFeatures />
    </div>
  );
}
