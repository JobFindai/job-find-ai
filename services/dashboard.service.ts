export type DashboardStats = {
  averageFitScore: number | null;
  inReview: number;
  interviews: number;
  totalApplied: number;
};

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  fitScore: number | null;
};

type Dashboard = {
  stats: DashboardStats;
  jobs: Job[];
};

export const dashboardService = {
  async getDashboardStatsAndJobs(token: string | null) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dashboard`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    return data as Dashboard;
  },
};
