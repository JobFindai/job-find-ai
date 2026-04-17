import { Profile } from "@/types/users";
import { useEffect, useState } from "react";

export function useSubProfile(profile: Profile, neededFields: string[]) {
  const [subProfile, setSubProfile] = useState<Profile>();

  useEffect(() => {
    pickNeededFields(profile, neededFields, (state) => setSubProfile(state));
  }, []);

  function pickNeededFields(
    obj: Profile,
    keys: string[],
    updateState: (state: Profile) => void,
  ) {
    const pickedFields = Object.fromEntries(
      keys.map((key) => [key, obj[key as keyof Profile]]),
    );
    updateState(pickedFields as Profile);
  }

  return { subProfile, setSubProfile };
}
