import { PieLabel, PieLabelRenderProps, Text } from "recharts";

const RADIAN = Math.PI / 180;

const CustomizedLabel = ({
  name,
  cx,
  cy,
  x,
  y,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value,
}: PieLabelRenderProps) => {
  if (
    typeof innerRadius === "undefined" ||
    typeof outerRadius === "undefined" ||
    typeof cx === "undefined" ||
    typeof cy === "undefined"
  ) {
    return <></>;
  }

  const radius =
    Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.3;
  const innerX = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const innerY = Number(cy) + radius * Math.sin(-midAngle * RADIAN);
  const textAnchor = x > Number(cx) ? "start" : "end";
  return (
    <>
      <Text
        x={x}
        y={y}
        fill="#1f2937"
        textAnchor={textAnchor}
        dominantBaseline="text-after-edge"
        fontSize="120%"
      >
        {name}
      </Text>
      <Text
        x={x}
        y={y + 25}
        fill="gray"
        textAnchor={textAnchor}
        dominantBaseline="text-after-edge"
      >
        {Number(value).toLocaleString() + "(t)"}
      </Text>
      <Text
        x={innerX}
        y={innerY}
        fill="white"
        textAnchor={textAnchor}
        dominantBaseline="central"
        fontSize="120%"
      >
        {`${(Number(percent) * 100).toFixed(0)}%`}
      </Text>
    </>
  );
};

export default CustomizedLabel;
