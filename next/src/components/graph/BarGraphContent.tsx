import Image from "next/image";
import BarGraphDynamic from "@/components/graph/BarGraphDynamic";
import { OperationContext } from "../layout/Layout";
import { useContext } from "react";

const BarGraphContent = () => {
  const { handleClickWidthModal } = useContext(OperationContext);
  return (
    <div className="absolute top-0  bg-white w-[calc(100vw-400px)] h-screen overflow-y-scroll">
      <div className="w-full h-full p-4 m-auto">
        <h3 className="text-xl pb-4 text-gray-700">
          最終処分場の埋立割合（令和３年）
        </h3>
        <BarGraphDynamic />
      </div>
      <div
        className="absolute top-0 right-0 cursor-pointer"
        onClick={() => handleClickWidthModal(false)}
      >
        <Image
          src="/image/common/batu.svg"
          className={"m-2 z-20"}
          alt="icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
export default BarGraphContent;
