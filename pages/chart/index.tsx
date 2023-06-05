import styled from "@emotion/styled";
import {
  simpleAreaData,
  radarData,
  lineData,
  mixBarData,
} from "../../src/data/data";
import LineChartPage from "../../src/components/chart/lineChart";
import PieChartPage from "../../src/components/chart/pieChart";
import RadarChartPage from "../../src/components/chart/radarChart";
import SimpleAreaChart from "../../src/components/chart/simpleAreaChart";
import MixBarChartPage from "../../src/components/chart/mixBarChart";

const MainBox = styled.div`
  width: 100%;
  padding: 5%;
  gap: 2.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChartBox = styled.div`
  height: 100%;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 20px;
  }
`;

export default function ChartPage() {
  return (
    <MainBox>
      <ChartBox>
        <h1>Usage</h1>
        <RadarChartPage data={radarData} />
      </ChartBox>
      <ChartBox>
        <h1>Days</h1>
        <LineChartPage data={lineData} />
      </ChartBox>
      <ChartBox>
        <h1>Dependence</h1>
        <PieChartPage />
      </ChartBox>
      <ChartBox>
        <h1>Interest</h1>
        <SimpleAreaChart data={simpleAreaData} />
      </ChartBox>
      <ChartBox>
        <h1>Trouble</h1>
        <MixBarChartPage data={mixBarData} />
      </ChartBox>
    </MainBox>
  );
}
