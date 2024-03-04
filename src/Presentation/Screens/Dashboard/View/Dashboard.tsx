import { Avatar, Flex } from "antd";
import { Typography } from "antd";
import { MdOutlineAttachMoney, MdWork, MdTimelapse } from "react-icons/md";
import { IoPaperPlane } from "react-icons/io5";
import DashboardService from "./Dashboard.service";

const { Text } = Typography;

const DashboardScreen = () => {
  const { DashBrdAnytData } = DashboardService();

  const statIconList = [
    <MdOutlineAttachMoney color="black" />,
    <MdWork color="black" />,
    <MdTimelapse color="black" />,
    <IoPaperPlane color="black" />,
  ];

  return (
    <div className="h-full">
      <Flex className="gap-3 lg:gap-5 grid lg:grid-rows-1 grid-rows-2 grid-flow-col">
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
                  <Text className="font-semibold leading-none text-xl">
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
    </div>
  );
};

export default DashboardScreen;
