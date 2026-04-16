import { useQuery } from "@tanstack/react-query";
import { useToken } from "./useToken";
import { profileService } from "@/services/profile.service";

export function useUser() {
  const { token, isLoaded } = useToken();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    enabled: isLoaded,
    queryFn: async () => await profileService.getUser(token),
  });

  return { user, isLoading };
}
