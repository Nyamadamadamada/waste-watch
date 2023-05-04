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
import { getTotalIncomingAmount } from "./libs/dataProcessing";
import CustomizedLabel from "./libs/CustomizedLabel";
import CategoricalLabel from "./libs/CategoricalLabel";

const COLORS = [
  "#808080",
  "#00C49F",
  "#FFBB28",
  "#8884d8",
  "#0088FE",
  "#FF8042",
];

type Props = {
  garbageClass: GarbageClass;
  prefectures: string;
  data: GraphValue[];
};

const CategoricalGraph = ({ garbageClass, prefectures, data }: Props) => {
  return (
    <div className="p-4">
      <p className="text-gray-700 my-2 text-center text-lg">
        {garbageClass}ごみの割合
        <br />
        <span className="text-gray-500 text-base">{prefectures}</span>
      </p>
      <ResponsiveContainer
        width="100%"
        height={400}
        className={"bg-white mt-4"}
      >
        <PieChart width={450} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="65%"
            label={CategoricalLabel}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            labelLine={false}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <text
            x="50%"
            y="66%"
            textAnchor="middle"
            fontSize={16}
            fill={garbageClass === "事業系" ? "#78cdf4" : "#F49F78"}
          >
            {garbageClass + "ごみ"}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CategoricalGraph;
