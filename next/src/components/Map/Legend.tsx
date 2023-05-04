import { LegendDataStruct } from "./type";

type Props = {
  legend: LegendDataStruct;
};

const Legend = ({ legend }: Props) => {
  return (
    <div className="legend bg-white px-4 py-2">
      <p className="mb-1">{legend.name}</p>
      <ul className="w-full text-sm">
        {legend.list.map((item, index) => {
          return (
            <li key={index} className="flex justify-between">
              <div
                className="w-5 h-5 mr-2"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Legend;
