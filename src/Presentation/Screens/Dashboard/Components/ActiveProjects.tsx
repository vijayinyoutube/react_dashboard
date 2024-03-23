import { Avatar, Badge, Divider, Flex, Typography } from "antd";
const { Text } = Typography;
import { RiTimerLine } from "react-icons/ri";

const ActiveProjects = ({ data }: { data: any[] }) => {
  return (
    <Flex className=" h-auto w-full rounded-md border md:w-1/3 ">
      <Flex className="w-full flex-col justify-between p-3">
        <Flex className="mb-5 w-full justify-between ">
          <Text className="text-base font-semibold">Active Projects</Text>
          <Text className="cursor-pointer text-sky-600">See all</Text>
        </Flex>

        <Flex className="mb-3 flex-col">
          {data.map((activeProjects, index) => {
            return (
              <Flex className="flex-col">
                <Flex className=" w-full flex-row items-start justify-between md:flex-col xl:flex-row xl:items-center">
                  <Flex className="items-center">
                    <Badge
                      dot
                      color={`${activeProjects.isOnline ? "green" : "red"}`}
                    >
                      <Avatar
                        shape="square"
                        className={`${activeProjects.bgColor}`}
                      >
                        {" "}
                        {activeProjects.avatar}
                      </Avatar>
                    </Badge>
                    <Flex className="ml-3 flex-col">
                      <Text className="font-semibold">Mobile app dev</Text>
                      <Text className="leading-none text-oldSilver">
                        {activeProjects.members} | {activeProjects.tasks}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex className="ml-0 items-center md:ml-10" gap={3}>
                    <RiTimerLine className="text-oldSilver" />
                    <Text className=" text-oldSilver">
                      {activeProjects.duration}
                    </Text>
                  </Flex>
                </Flex>
                {index != data.length - 1 && (
                  <Divider className="!m-3 !p-0" />
                )}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ActiveProjects;
