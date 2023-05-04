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
const chartCountryAllocations = [
  { value: 0.6454, name: "あ" },
  { value: 0.0444, name: "い" },
  { value: 0.0438, name: "う" },
  { value: 0.0412, name: "え" },
  { value: 0.0406, name: "お" },
  { value: 0.0394, name: "か" },
  { value: 0.0251, name: "け" },
  { value: 0.0054, name: "こ" },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
  fontSize,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(RADIAN * midAngle);
  const cos = Math.cos(RADIAN * midAngle);
  const startX = cx + outerRadius * cos;
  const startY = cy + outerRadius * -sin;
  const middleY = cy + (outerRadius + 80 * Math.abs(sin)) * -sin;
  let endX = startX + (cos >= 0 ? 1 : -1) * 90;
  let textAnchor = cos >= 0 ? "start" : "end";
  const mirrorNeeded =
    midAngle > -270 && midAngle < -210 && percent < 0.04 && index % 2 === 1;
  if (mirrorNeeded) {
    endX = startX + outerRadius * -cos * 2 + 10;
    textAnchor = "start";
  }
  console.log(name + ":" + mirrorNeeded);

  return (
    <g>
      <path
        d={`M${startX},${startY}L${startX},${middleY}L${endX},${middleY}`}
        fill="none"
        stroke="#000"
        strokeWidth={1}
      />
      <text
        x={endX + (cos >= 0 || mirrorNeeded ? 1 : -1) * 12}
        y={middleY + fontSize / 2}
        textAnchor={textAnchor}
        fontSize={fontSize}
      >{`${name || ""} ${(percent * 100).toFixed(2)}%`}</text>
    </g>
  );
};

const TextGraph = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={300} height={300}>
      <Pie
        data={chartCountryAllocations}
        cx="50%"
        cy="90%"
        startAngle={90}
        endAngle={-270}
        labelLine={false}
        dataKey="value"
        fontSize={14}
        isAnimationActive={false}
        label={renderCustomizedLabel}
      >
        {chartCountryAllocations.map((allo, idx) => (
          <Cell key={idx} fill="#51A760" />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);
export default TextGraph;
