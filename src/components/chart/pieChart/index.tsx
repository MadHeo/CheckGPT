import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#9341ff", "#ff49b6", "#d61fff", "#5537ff"];
const data = [
  { name: "사용 안함", value: 200 },
  { name: "조금", value: 300 },
  { name: "많이", value: 300 },
  { name: "매우 많이", value: 200 },
];

export default function PieChartPage() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={170}
        cy={130}
        innerRadius={50}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label={({ name, value }) => `${name}: ${value}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
