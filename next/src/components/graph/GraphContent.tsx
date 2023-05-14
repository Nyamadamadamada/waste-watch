import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Graph from "./CategoricalGraph";
import AttachedModal from "@/components/attachedModal";
import { useContext, useEffect, useState } from "react";
import Slide from "@/components/slide";
import TotalIncomingGraph from "./TotalIncomingGraph";
import classNames from "classnames";
import CategoricalGraph from "./CategoricalGraph";

import { PrefContext } from "../layout/Layout";
import useGraphData from "./hooks/useGraphData";
import WasteDetail from "./WasteDetail";

const GraphContent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { name, totalData, householdData, businessData, wasteDate } =
    useGraphData();

  const handleClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (name === "") {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [name]);

  return (
    <div className="relative py-8 px-4 text-gray-700 h-[calc(100vh-134px)]">
      {name ? (
        <div>
          <h4 className="pb-4 border-b border-gray-400 text-gray-700">
            {name}の廃棄物について
          </h4>
          <WasteDetail wasteDate={wasteDate} />
          {open && (
            <AttachedModal handleClick={handleClick}>
              <Slide
                slideItems={[
                  <TotalIncomingGraph key={1} name={name} data={totalData} />,
                  <CategoricalGraph
                    key={2}
                    garbageClass={"生活系"}
                    prefectures={name}
                    data={householdData}
                  />,
                  <CategoricalGraph
                    key={3}
                    garbageClass={"事業系"}
                    prefectures={name}
                    data={businessData}
                  />,
                ]}
              />
            </AttachedModal>
          )}
        </div>
      ) : (
        <p className="mt-20 px-auto">都道府県をクリックしてください。</p>
      )}
    </div>
  );
};
export default GraphContent;
