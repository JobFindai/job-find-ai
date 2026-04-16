import { Job } from "@/services/dashboard.service";
import { jobsService } from "@/services/jobs.service";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

export function useJobMatches() {
  const { getToken } = useAuth();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["match-jobs"],
    queryFn: async () => {
      const token = await getToken();
      const jobs = await jobsService.getJobsMatched(token);

      return (jobs.data as Array<Job>) ?? [];
    },
  });
  return { data, refetch: () => refetch(), isLoading };
}
