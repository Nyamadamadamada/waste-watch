import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Graph from "./CategoricalGraph";
import AttachedModal from "@/components/attachedModal";
import { useContext, useEffect, useState } from "react";
import Slide from "@/components/slide";
import TotalIncomingGraph from "./TotalIncomingGraph";
import classNames from "classnames";
import CategoricalGraph from "./CategoricalGraph";

import TextGraph from "./TestGraph";
import { PrefContext } from "../layout/Layout";
import useClassificationData from "./hooks/useClassificationData";

const GraphContent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { name, totalData, householdData, businessData } =
    useClassificationData();

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
      {open ? (
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
      ) : (
        <p className="mt-20 px-auto">都道府県をクリックしてください。</p>
      )}
    </div>
  );
};
export default GraphContent;
