import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SimpleAreaChart(props: any) {
  return (
    <AreaChart
      width={400}
      height={280}
      data={props.data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
