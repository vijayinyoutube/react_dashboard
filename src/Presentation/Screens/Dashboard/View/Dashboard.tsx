import { Avatar, Flex, Segmented } from "antd";
import { Typography } from "antd";
import { MdOutlineAttachMoney, MdWork, MdTimelapse } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import DashboardService from "./Dashboard.service";
import ChartsData from "../Components/ChartsData";
import ActiveProjects from "../Components/ActiveProjects";
import Maps from "../Components/Maps";
import RecentClients from "../Components/RecentClients";

const { Text } = Typography;

const DashboardScreen = () => {
  const { DashBrdAnytData, ActiveProjectDetails, chartData, RegionData,RecentClientData } =
    DashboardService();

  const statIconList = [
    <MdOutlineAttachMoney color="black" />,
    <MdWork color="black" />,
    <MdTimelapse color="black" />,
    <IoPaperPlane color="black" />,
  ];

  return (
    <div className="h-full">
      <Flex className="grid grid-flow-col grid-rows-2 gap-3 lg:grid-rows-1 lg:gap-5">
        {/* Stats Cards */}
        {DashBrdAnytData.map((item) => {
          return (
            <Flex className="h-20 w-full items-center justify-start rounded-md border p-2 lg:!p-3">
              <Flex>
                <Avatar
                  size={42}
                  icon={statIconList[item.icon]}
                  className=" bg-mediumSpringBud/50 "
                />
              </Flex>
              <Flex vertical className="ml-3 w-full gap-1">
                <Flex className="justify-between">
                  <Text className="text-xl font-semibold leading-none">
                    {item.title}
                  </Text>
                  <Text
                    className={` lg:text-normal text-xs  ${item.metric == "green" ? "text-green-500" : "text-red-500"}`}
                  >
                    {item.stat}
                  </Text>
                </Flex>
                <Text className="text-xs font-light leading-none text-oldSilver">
                  {item.subTitle}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex className="mt-5 flex-col gap-3 md:flex-row lg:gap-5">
        <ChartsData chartData={chartData} />
        <ActiveProjects data={ActiveProjectDetails} />
      </Flex>
      <Flex className="mt-5 flex-col gap-3 md:flex-row lg:gap-5 ">
        <Maps RegionData={RegionData} />
        <RecentClients RecentClientData={RecentClientData} />
      </Flex>
    </div>
  );
};

export default DashboardScreen;
