import { UpdatePayloadType } from "@/app/(main)/(auth)/onboarding/page";
import { User } from "@/types/users";

type ApiResponse<T = undefined> = {
  status: "success" | "error";
  message: string;
  data?: T;
};

const profileService = {
  // Get User and profile
  async getUser(token: string | null) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/profile/`,
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
  },

  //   Update user
  async updateUser(token: string | null, updatePayload: UpdatePayloadType) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/profile/onboarding`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatePayload),
      },
    );

    if (!res.ok) throw Error("User was not updated successfully");

    return (await res.json()) as ApiResponse;
  },

  //   Upload user resume
  async uploadResume(token: string | null, resume: File) {
    const formData = new FormData();
    formData.append("file", resume);

    console.log([...formData.entries()]);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/profile/resume`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    );

    if (!res.ok) throw Error("Resume was not uploaded successfully");

    const data = await res.json();
    console.log(data);
  },
};

export { profileService };
