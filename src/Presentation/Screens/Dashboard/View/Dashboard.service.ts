import { useMemo } from "react";

const DashboardService = () => {
  const DashBrdAnytData = useMemo(
    () => [
      {
        icon: 0,
        title: "32,890",
        subTitle: "Revenue",
        stat: "+12.1%",
        metric: "green",
      },
      {
        icon: 1,
        title: "4",
        subTitle: "Active Projects",
        stat: "+43.3%",
        metric: "green",
      },
      {
        icon: 2,
        title: "320",
        subTitle: "Hours Worked",
        stat: "-1.6%",
        metric: "red",
      },
      {
        icon: 3,
        title: "27",
        subTitle: "Proposals",
        stat: "+2.3%",
        metric: "green",
      },
    ],
    []
  );

  return { DashBrdAnytData };
};

export default DashboardService;
