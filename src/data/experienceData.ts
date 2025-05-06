export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Game Designer",
    company: "Gamelab Indonesia",
    dates: "07/2022 - 9/2022",
    description: [
      "Developed interactive Power BI dashboards to analyze business performance and customer trends.",
      "Automated ETL processes using Python and SQL to improve data processing efficiency by 40%.",
      "Collaborated with stakeholders to identify key performance metrics and optimize reporting strategies.",
      "Designed predictive models to forecast revenue and customer churn, providing actionable insights.",
      "Managed data extraction from multiple sources, including APIs, databases, and cloud storage.",
      "Presented analytical findings to executive teams, leading to data-driven decision-making."
    ]
  },
]