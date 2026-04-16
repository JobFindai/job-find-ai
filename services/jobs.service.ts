const jobsService = {
  async getJobsMatched(token: string | null) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs/matched`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return await res.json();
  },
};

export { jobsService };
