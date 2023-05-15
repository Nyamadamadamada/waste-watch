import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";
import AttachedModal from "@/components/attachedModal";
import { useContext } from "react";
import cn from "classnames";
import { OperationContext } from "../layout/Layout";

const mapOperation: OperationStruct[] = [
  {
    key: "total",
    name: "ごみ総排出量",
    description: "人口に比例する傾向にあります",
  },
  {
    key: "day",
    name: "１人１日当たりの排出量",
    description: "ごみ総排出量÷総人口÷365",
  },
  {
    key: "recycling",
    name: "リサイクル率",
    description: "様々な要因があります",
  },
  // {
  //   key: "facility",
  //   name: "処理施設",
  //   description: "廃棄物処理施設の場所と情報",
  // },
];

const MapOperationContent = () => {
  const { operation, handleClickOperation } = useContext(OperationContext);

  return (
    <div className="relative py-8 px-4 text-gray-700 h-[calc(100vh-134px)]">
      <div className="">
        <h4 className="pb-4 border-b border-gray-400 text-gray-700">
          マップ設定
        </h4>
        <div className="flex flex-col gap-3 mt-6">
          <ul className="grid w-full gap-2 md:grid-cols-1">
            {mapOperation.map((item) => {
              return (
                <li key={item.key}>
                  <input
                    type="radio"
                    id={`mapOperation_${item.key}`}
                    name={item.name}
                    value={item.key}
                    defaultChecked={item.key === operation}
                    onClick={() => handleClickOperation(item.key)}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={`mapOperation_${item.key}`}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 peer-checked:border-green2 peer-checked:text-green2 hover:text-gray-600 hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">
                        {item.name}
                      </div>
                      <div className="w-full text-base">{item.description}</div>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 ml-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MapOperationContent;
