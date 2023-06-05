import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

export default function RadarChartPage(props: any) {
  return (
    <RadarChart
      cx={200}
      cy={140}
      outerRadius={120}
      width={400}
      height={330}
      data={props.data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 160]} />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Lily"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
