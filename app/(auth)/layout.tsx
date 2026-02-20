"use client";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthTestimoniesSlider from "@/components/auth/AuthTestimoniesSlider";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutRoutes = ["/onboarding"];

  const shouldHideLayout = hideLayoutRoutes.some((route) =>
    pathname.startsWith(route),
  );

  return (
    <div className="min-h-screen flex py-10 pb-20 bg-gray-100">
      {!shouldHideLayout && (
        <div className="w-2/5 h-full flex flex-col border-r-primary border-r  justify-evenly py-10 gap-5 bg-primary">
          <div className="px-10">
            <AuthHeader />
          </div>
          <AuthTestimoniesSlider />
        </div>
      )}
      <div className=" w-full flex justify-center items-center">{children}</div>
    </div>
  );
}
