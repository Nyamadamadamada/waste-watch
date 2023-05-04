import { PieLabel, PieLabelRenderProps, Text } from "recharts";

const RADIAN = Math.PI / 180;

const CategoricalLabel = ({
  name,
  cx,
  cy,
  x,
  y,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: PieLabelRenderProps) => {
  if (
    typeof innerRadius === "undefined" ||
    typeof outerRadius === "undefined" ||
    typeof cx === "undefined" ||
    typeof cy === "undefined" ||
    typeof percent === "undefined" ||
    typeof index === "undefined"
  ) {
    return <></>;
  }
  const percentInteger = Number(percent * 100);
  const percentIntegerFixed =
    percentInteger < 5
      ? Number(percentInteger.toFixed(2))
      : Number(percentInteger.toFixed(0));
  let isPolygonalLine = false;
  if (
    name === "その他ごみ" ||
    name === "混合ごみ" ||
    name === "粗大ごみ" ||
    (name === "不燃ごみ" && percentIntegerFixed < 4)
  ) {
    isPolygonalLine = true;
  }
  const textAnchor = x > Number(cx) ? "start" : "end";

  // 小さい値用のラベル
  const sin = Math.sin(RADIAN * midAngle);
  const cos = Math.cos(RADIAN * midAngle);
  const startX = Number(cx) + Number(outerRadius) * cos;
  const startY = Number(cy) + Number(outerRadius) * -sin;

  let middleY = Number(cy) + (Number(outerRadius) + 30 * Math.abs(sin)) * -sin;
  let endX = startX + (cos >= 0 ? 1 : -1) * 50;
  const mirrorNeeded = name === "混合ごみ" || name === "その他ごみ";
  const textAnchorMin = cos >= 0 || mirrorNeeded ? "start" : "end";

  if (name === "不燃ごみ") {
    endX += 0;
    middleY += 80;
  }

  if (name === "その他ごみ") {
    middleY -= 80;
  }
  if (name === "粗大ごみ") {
    middleY -= 60;
  }
  if (mirrorNeeded) {
    endX = startX + Number(outerRadius) * -cos * 2 + 10;
  }

  return (
    <>
      {isPolygonalLine ? (
        <g>
          {/*
            コマンド	値1	値2	動作
            M	20	20	(x,y)=(20,20)にペンを移動
            L	320	20	(x,y)=(320,20)まで線を描画
          */}
          <path
            d={`M${startX},${startY}L${startX},${middleY}L${endX},${middleY}`}
            fill="none"
            stroke="#000"
            strokeWidth={1}
          />
          <Text
            x={endX + (cos >= 0 || mirrorNeeded ? 1 : -1) * 5}
            y={middleY + 16 / 2}
            textAnchor={textAnchorMin}
            fill="#1f2937"
            fontSize="100%"
            dominantBaseline="text-after-edge"
          >
            {name || ""}
          </Text>
          <Text
            x={endX + (cos >= 0 || mirrorNeeded ? 1 : -1) * 5}
            y={middleY + 20 + 16 / 2}
            textAnchor={textAnchorMin}
            fill="gray"
            dominantBaseline="text-after-edge"
          >
            {`${percentIntegerFixed}%`}
          </Text>
        </g>
      ) : (
        <>
          <Text
            x={x + (name === "可燃ごみ" ? 1 : -1) * 10}
            y={y + (name === "不燃ごみ" ? 20 : 0)}
            fill="#1f2937"
            textAnchor={textAnchor}
            dominantBaseline="text-after-edge"
            fontSize="100%"
          >
            {name}
          </Text>
          <Text
            x={x + (name === "可燃ごみ" ? 1 : -1) * 10}
            y={y + (name === "不燃ごみ" ? 40 : 20)}
            fill="gray"
            textAnchor={textAnchor}
            dominantBaseline="text-after-edge"
          >
            {`${percentIntegerFixed}%`}
          </Text>
        </>
      )}
    </>
  );
};

export default CategoricalLabel;
