import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    <div className="space-y-3 py-2 ">
      {/* Basic info section */}
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="bg-gray-300 h-3.5 w-20" />
          <div className="flex items-center gap-2">
            <Skeleton className="bg-gray-300 h-6 w-12 rounded" />
            <Skeleton className="bg-gray-300 h-3 w-3" />
          </div>
        </div>
        <div className="border-t px-4 py-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Skeleton className="bg-gray-300 h-2.5 w-16" />
              <Skeleton className="bg-gray-300 h-4 w-32" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="bg-gray-300 h-2.5 w-28" />
              <Skeleton className="bg-gray-300 h-4 w-10" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Skeleton className="bg-gray-300 h-2.5 w-8" />
            <Skeleton className="bg-gray-300 h-4 w-48" />
          </div>
          <div className="space-y-1.5">
            <Skeleton className="bg-gray-300 h-2.5 w-28" />
            <Skeleton className="bg-gray-300 h-4 w-36" />
          </div>
          <div className="space-y-1.5">
            <Skeleton className="bg-gray-300 h-2.5 w-32" />
            <Skeleton className="bg-gray-300 h-5 w-10 rounded" />
          </div>
        </div>
      </div>

      {/* AI summary section */}
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="bg-gray-300 h-3.5 w-24" />
          <div className="flex items-center gap-2">
            <Skeleton className="bg-gray-300 h-6 w-12 rounded" />
            <Skeleton className="bg-gray-300 h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="bg-gray-300 h-3.5 w-12" />
          <div className="flex items-center gap-2">
            <Skeleton className="bg-gray-300 h-6 w-12 rounded" />
            <Skeleton className="bg-gray-300 h-3 w-3" />
          </div>
        </div>
        <div className="border-t px-4 py-4 space-y-4">
          <div className="space-y-1.5">
            <Skeleton className="bg-gray-300 h-2.5 w-24" />
            <div className="flex flex-wrap gap-2">
              {[80, 64, 88, 56, 52, 72, 96, 60, 56, 80, 68, 76, 56, 52].map(
                (w, i) => (
                  <Skeleton
                    bg-gray-300
                    key={i}
                    className="h-6 rounded-full"
                    style={{ width: w }}
                  />
                ),
              )}
            </div>
          </div>
          <div className="space-y-1.5">
            <Skeleton className="bg-gray-300 h-2.5 w-20" />
            <div className="flex flex-wrap gap-2">
              {[88, 104, 96, 120, 80].map((w, i) => (
                <Skeleton
                  bg-gray-300
                  key={i}
                  className="h-6 rounded-full"
                  style={{ width: w }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience section */}
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="bg-gray-300 h-3.5 w-20" />
          <div className="flex items-center gap-2">
            <Skeleton className="bg-gray-300 h-6 w-12 rounded" />
            <Skeleton className="bg-gray-300 h-3 w-3" />
          </div>
        </div>
        <div className="border-t px-4 py-4 space-y-2">
          <Skeleton className="bg-gray-300 h-3 w-full" />
          <Skeleton className="bg-gray-300 h-3 w-5/6" />
          <Skeleton className="bg-gray-300 h-3 w-full" />
          <Skeleton className="bg-gray-300 h-3 w-4/5" />
          <Skeleton className="bg-gray-300 h-3 w-full" />
          <Skeleton className="bg-gray-300 h-3 w-3/4" />
        </div>
      </div>

      {/* Education section */}
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="bg-gray-300 h-3.5 w-20" />
          <div className="flex items-center gap-2">
            <Skeleton className="bg-gray-300 h-6 w-12 rounded" />
            <Skeleton className="bg-gray-300 h-3 w-3" />
          </div>
        </div>
        <div className="border-t px-4 py-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Skeleton className="bg-gray-300 h-2.5 w-20" />
              <Skeleton className="bg-gray-300 h-4 w-36" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="bg-gray-300 h-2.5 w-16" />
              <Skeleton className="bg-gray-300 h-4 w-28" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Skeleton className="bg-gray-300 h-2.5 w-24" />
              <Skeleton className="bg-gray-300 h-4 w-32" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="bg-gray-300 h-2.5 w-28" />
              <Skeleton className="bg-gray-300 h-4 w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Links & resume section */}
      <div className="border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="bg-gray-300 h-3.5 w-28" />
          <div className="flex items-center gap-2">
            <Skeleton className="bg-gray-300 h-6 w-12 rounded" />
            <Skeleton className="bg-gray-300 h-3 w-3" />
          </div>
        </div>
        <div className="border-t px-4 py-4 space-y-3">
          {["LinkedIn", "GitHub", "Portfolio", "Resume"].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="bg-gray-300 h-3 w-16 shrink-0" />
              <Skeleton className="bg-gray-300 h-3 w-40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
