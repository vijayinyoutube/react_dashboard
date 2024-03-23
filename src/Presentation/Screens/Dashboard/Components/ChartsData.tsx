import { Flex, Segmented, Typography } from "antd";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
const { Text } = Typography;

Chart.register(CategoryScale);

const ChartsData = ({ chartData }: { chartData: any }) => {
  const [delayed, setDelayed] = useState(false);

  return (
    <Flex className="h-auto w-full  flex-col rounded-md border md:w-2/3 ">
      <Flex className="w-full justify-between  p-3">
        <Text className="text-base font-semibold">Task Progress</Text>
        <Segmented
          className="h-fit"
          options={["Daily", "Weekly", "Monthly"]}
          onChange={(value) => {
            console.log(value); // string
          }}
        />
      </Flex>

      <Flex className="h-60 p-3">
        {/* form chart-js */}
        <Line
          className="!w-fit "
          data={chartData}
          options={{
            elements: {
              point: {
                radius: 0,
              },
              line: {
                tension: 0.5,
              },
            },
            animation: {
              onComplete: () => {
                setDelayed(true);
              },
              delay: (context) => {
                let delay = 0;
                if (
                  context.type === "data" &&
                  context.mode === "default" &&
                  !delayed
                ) {
                  delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
              },
            },
            scales: {
              y: {
                min: 0,
                max: 30,
                grid: {
                  display: true,
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </Flex>
    </Flex>
  );
};

export default ChartsData;
