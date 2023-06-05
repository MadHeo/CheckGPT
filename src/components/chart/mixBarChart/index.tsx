import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MixBarChartPage = (props: any) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
      <Bar dataKey="uv" fill="#ffc658" />
    </BarChart>
  );
};

export default MixBarChartPage;
