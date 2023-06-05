import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#9341ff", "#ff49b6", "#d61fff", "#5537ff"];
const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function PieChartPage() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={150}
        cy={130}
        innerRadius={50}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
