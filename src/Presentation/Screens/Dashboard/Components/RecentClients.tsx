import { Badge, Divider, Flex, Tag, Typography } from "antd";
const { Text } = Typography;

const RecentClients = ({ RecentClientData }: { RecentClientData: any[] }) => {
  return (
    <Flex className="h-auto w-full rounded-md border md:w-1/2 ">
      <Flex className="w-full flex-col  p-3">
        <Text className="mb-5  text-base font-semibold">Recent Clients</Text>

        <Flex className=" flex-col ">
          {RecentClientData.map((recentClient, index) => {
            return (
              <Flex className="flex-col ">
                <Flex className="flex-row justify-between">
                  <Text className="w-1/3 ">{recentClient.clientName}</Text>
                  <div className="w-1/3">
                    <Tag color={recentClient.tagColor}>
                      {recentClient.status}
                    </Tag>
                  </div>
                  <div className="w-1/2 truncate text-oldSilver">
                    <Text className="text-oldSilver">
                      {recentClient.projectName}
                    </Text>
                  </div>
                </Flex>
                {index != RecentClientData.length - 1 && (
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

export default RecentClients;
