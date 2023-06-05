import { Bar, YAxis, BarChart, XAxis, CartesianGrid, Tooltip } from "recharts";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { LANDFILL_RATE } from "./config";

const BarGraph = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth - 500, window.innerHeight - 100]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="">
      <BarChart
        width={window.innerWidth - 500}
        height={2000}
        layout="vertical"
        data={LANDFILL_RATE}
        margin={{
          top: 5,
          right: 0,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="pref" type="category" />
        <Tooltip />
        <Bar dataKey="埋立率" fill="#82ca9d" unit="%" />
      </BarChart>
    </div>
  );
};
export default BarGraph;
