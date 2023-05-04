import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Text,
  ResponsiveContainer,
  PieLabel,
  Tooltip,
} from "recharts";
import CustomizedLabel from "./libs/CustomizedLabel";
import { TOTAL_INCOMING_GRAPH_COLORS as COLORS } from "./config";

type Props = {
  name: string;
  data: GraphValue[];
};

const TotalIncomingGraph = ({ name, data }: Props) => {
  return (
    <div className="p-4">
      <p className="text-gray-700 my-2 text-center text-lg">
        ごみ搬入量の割合
        <br />
        <span className="text-gray-500 text-base">{name}</span>
      </p>
      <ResponsiveContainer
        width="100%"
        height={400}
        className={"bg-white mt-4"}
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label={CustomizedLabel}
            outerRadius={80}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default TotalIncomingGraph;
