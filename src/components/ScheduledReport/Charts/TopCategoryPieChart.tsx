"use client";

import { Cell, Legend, Pie, PieChart } from "recharts";

export interface TopCategoryPieChartProps {
  xDataKey: string;
  seriesDataKey: string;
  data: any[];
  seriesColors?: string[];
  layout?: "horizontal" | "vertical";
}

export type TopCategoryPieChartModel = TopCategoryPieChartProps;

const TopCategoryPieChart: React.FC<TopCategoryPieChartModel> = ({
  xDataKey,
  seriesDataKey,
  data,
}) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={1}
        dataKey={seriesDataKey}
        nameKey={xDataKey}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend layout="vertical" align="center" verticalAlign="bottom" />
    </PieChart>
  );
};

export default TopCategoryPieChart;
