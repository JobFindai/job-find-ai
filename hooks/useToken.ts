import { useAuth } from "@clerk/nextjs";
import { useState } from "react";

export function useToken() {
  const { getToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  getToken().then((data) => setToken(data));

  return token;
}
