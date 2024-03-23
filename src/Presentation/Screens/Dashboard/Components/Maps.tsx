import { Badge, Flex, Typography } from "antd";
import map from "../../../../assets/DashboardImages/map.png";
const { Text } = Typography;

const Maps = ({ RegionData }: { RegionData: any[] }) => {
  return (
    <Flex className="h-auto w-full rounded-md border md:w-1/2">
      <Flex className="w-full flex-row  justify-between ">
        <Flex className="flex-col p-3">
          <Text className="mb-5 text-base font-semibold">Region</Text>

          <Flex className="flex-row justify-between">
            <Flex className="flex-col gap-4">
              {RegionData.map((regionData) => {
                return (
                  <Flex className="ml-1 gap-3">
                    <Badge status="processing" color={regionData.bagdeColor} />
                    <Flex className="flex-col">
                      <Text className="text-md font-semibold">
                        {regionData.regionName}
                      </Text>
                      <Text className="text-sm text-oldSilver">
                        {regionData.count} Employees
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <img src={map} className="" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Maps;
