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

  // Project - data
  const ActiveProjectDetails = useMemo(
    () => [
      {
        avatar: "MI",
        name: "Mobile App Dev",
        members: "2 members",
        tasks: "4 tasks",
        duration: "4 weeks",
        isOnline: true,
        bgColor: "bg-emerald-500",
      },
      {
        avatar: "SP",
        name: "Crypto",
        members: "1 members",
        tasks: "5 tasks",
        duration: "3 weeks",
        isOnline: false,
        bgColor: "bg-red-500",
      },
      {
        avatar: "VJ",
        name: "Wallet App",
        members: "4 members",
        tasks: "9 tasks",
        duration: "7 days",
        isOnline: false,
        bgColor: "bg-purple-500",
      },
      {
        avatar: "RC",
        name: "App Designing",
        members: "2 members",
        tasks: "2 tasks",
        duration: "2 days",
        isOnline: true,
        bgColor: "bg-teal-500",
      },
    ],
    []
  );

  // Chat - data

  const rawChartData = [
    {
      id: 1,
      taskWeight: 20,
      month: "Jan",
    },
    {
      id: 2,
      taskWeight: 17,
      month: "Feb",
    },
    {
      id: 3,
      taskWeight: 25,
      month: "March",
    },
    {
      id: 4,
      taskWeight: 6,
      month: "April",
    },
    {
      id: 5,
      taskWeight: 28,
      month: "May",
    },
  ];

  const chartData = {
    labels: rawChartData.map((data) => data.month),
    datasets: [
      {
        label: "Task Weight",
        data: rawChartData.map((data) => data.taskWeight),

        backgroundColor: ["#f4fff2"],
        borderColor: "#a4e16d",
        borderWidth: 2,
        fill: true,
        
      },
    ],
  };

  // Region - data
  const RegionData = useMemo(
    () => [
      {
        regionName: "India",
        count: 10,
        bagdeColor: "#32a852",
      },
      {
        regionName: "Japan",
        count: 4,
        bagdeColor: "#eba415",
      },
      {
        regionName: "Europe",
        count: 3,
        bagdeColor: "#3296a8",
      },
      {
        regionName: "United States",
        count: 5,
        bagdeColor: "#b520ba",
      },
    ],
    []
  );

  // Recent Client - data
  const RecentClientData = useMemo(
    () => [
      {
        clientName: "Alice",
        projectName: "AI chat using chatGPT and React",
        status: "Done",
        tagColor: "success",
      },
      {
        clientName: "Robert",
        projectName: "Website design and development - React and Figma",
        status: "waiting",
        tagColor: "warning",
      },
      {
        clientName: "Charles",
        projectName: "App development - Food delivery app: Flutter & Firebase",
        status: "In progress",
        tagColor: "processing",
      },
      {
        clientName: "Billy",
        projectName: "UI/UX design for crypto mobile app",
        status: "Done",
        tagColor: "success",
      },
      {
        clientName: "Bobby",
        projectName: "Android app development: design & development",
        status: "Done",
        tagColor: "success",
      },
    ],
    []
  );

  return {
    DashBrdAnytData,
    ActiveProjectDetails,
    chartData,
    RegionData,
    RecentClientData,
  };
};

export default DashboardService;
