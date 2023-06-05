import dynamic from "next/dynamic";
const BarGraphDynamic = dynamic(() => import("./BarGraph"));
export default BarGraphDynamic;
