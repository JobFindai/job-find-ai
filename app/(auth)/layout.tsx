"use client";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthTestimoniesSlider from "@/components/auth/AuthTestimoniesSlider";
import Image from "next/image";
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
        <div className="absolute top-10 lg:top-7 lg:h-14 h-12 min-w-20 lg:left-12 left-5">
          <Image
            className="object-cover size-full"
            src="/logo.png"
            alt="logo"
            width={700}
            height={700}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
