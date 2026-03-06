import { User } from "@/types/users";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getUser(token: string | null) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/`,
      {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!res.ok) throw Error("User was not fetched successfully");
    const user = (await res.json()) as {
      status: string;
      message: string;
      data: User;
    };

    return user.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
