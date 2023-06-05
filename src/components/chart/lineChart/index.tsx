import { useEffect, useRef, useState } from "react";
import { CartesianGrid, Line, XAxis, YAxis, LineChart } from "recharts";

const LineChartPage = ({ data }: any) => {
  const buttonNames = ["One Day", "One Week", "One Month"];
  const dataNames = ["uv", "pv", "amt"];
  const [buttonIndex, setButtonIndex] = useState(0);

  const onClickButton = () => {
    setButtonIndex((buttonIndex + 1) % 3);
  };

  return (
    <>
      <LineChart width={400} height={300} data={data}>
        <Line
          type="monotone"
          dataKey={dataNames[buttonIndex]}
          stroke="#8884d8"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={onClickButton}>{buttonNames[buttonIndex]}</button>
        <p>클릭!</p>
      </div>
    </>
  );
};

export default LineChartPage;
