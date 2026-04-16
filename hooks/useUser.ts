import { useQuery } from "@tanstack/react-query";
import { useToken } from "./useToken";
import { profileService } from "@/services/profile.service";

export function useUser(isLoaded?: boolean) {
  const token = useToken();

  const { data: user } = useQuery({
    queryKey: ["user"],
    enabled: isLoaded ?? true,
    queryFn: async () => (token ? await profileService.getUser(token) : null),
  });

  return user;
}
