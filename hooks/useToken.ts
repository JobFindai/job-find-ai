import { useAuth } from "@clerk/nextjs";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useToken() {
  const { getToken, isLoaded } = useAuth();
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(null);

  isLoaded &&
    getToken().then((data) => {
      setToken(data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    });

  return { token, isLoaded };
}
