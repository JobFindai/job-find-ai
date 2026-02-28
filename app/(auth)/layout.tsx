"use client";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthTestimoniesSlider from "@/components/auth/AuthTestimoniesSlider";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutRoutes = ["/onboarding", "/login"];

  const shouldHideLayout = hideLayoutRoutes.some((route) =>
    pathname.startsWith(route),
  );

  return (
    <div className=" flex min-h-screen bg-gray-100">
      {!shouldHideLayout && (
        <div className="w-2/5 min-h-full flex flex-col border-r-primary border-r  justify-evenly py-10 gap-5 bg-primary">
          <div className="px-10">
            <AuthHeader />
          </div>
          <AuthTestimoniesSlider />
        </div>
      )}
      <div className=" w-full flex justify-center  items-center">
        <Logo />
        {children}
      </div>
    </div>
  );
}
