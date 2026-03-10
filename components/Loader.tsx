import { cn } from "@/lib/utils";
import { BounceLoader } from "react-spinners";

export default function Loader({
  loading,
  className,
}: {
  loading?: boolean;
  className?: string;
}) {
  return (
    <>
      {loading && (
        <div
          className={cn(
            " absolute inset-0 z-50 bg-black/70 grid place-items-center",
            className,
          )}
        >
          <BounceLoader color="#0ea5a4" loading={loading} />
        </div>
      )}
    </>
  );
}
