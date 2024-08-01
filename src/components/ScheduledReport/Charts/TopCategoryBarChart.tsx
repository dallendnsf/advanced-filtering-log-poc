import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface TopCategoryBarChartProps {
  xDataKey: string;
  seriesDataKey: string;
  data: any[];
  seriesColors?: string[];
  layout?: "horizontal" | "vertical";
}

export type TopCategoryBarChartModel = TopCategoryBarChartProps;

const TopCategoryBarChart: React.FC<TopCategoryBarChartModel> = ({
  xDataKey,
  seriesDataKey,
  data,
  seriesColors,
  layout,
}) => {
  const minHeight = data.length * 48; // dynamic heigh based on the amount of data so that the charts stay legible
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minWidth={100}
      minHeight={minHeight}
    >
      <BarChart
        data={data}
        layout={layout}
        margin={{
          top: 0,
          right: 100,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {layout === "horizontal" ? (
          <>
            <XAxis dataKey={xDataKey} />
            <YAxis />
          </>
        ) : (
          <>
            <XAxis
              type="number"
              tickFormatter={(value) => `${value.toLocaleString("en-US")}`}
            />
            <YAxis
              type="category"
              dataKey={xDataKey}
              width={250}
              interval={0}
            />
          </>
        )}

        <Tooltip />

        <Bar
          dataKey={seriesDataKey}
          fill={seriesColors ? seriesColors[0] : ""}
          label={{
            fill: "black",
            fontSize: 14,
            position: "right",
            formatter: (value: any) => {
              return value.toLocaleString("en-US");
            },
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopCategoryBarChart;
