import AuthHeader from "@/components/auth/AuthHeader";
import AuthTestimoniesSlider from "@/components/auth/AuthTestimoniesSlider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex ">
      <div className="w-2/5 h-full flex flex-col  justify-evenly py-10 gap-5 bg-primary">
        <div className="px-10">
          <AuthHeader />
        </div>
        <AuthTestimoniesSlider />
      </div>
      {children}
    </div>
  );
}
