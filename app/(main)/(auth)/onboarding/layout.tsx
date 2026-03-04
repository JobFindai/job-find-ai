import Loader from "@/components/Loader";
import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <div className=" py-10 pb-20 w-full">{children}</div>
    </Suspense>
  );
}
