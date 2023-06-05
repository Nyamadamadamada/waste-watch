import dynamic from "next/dynamic";
const GraphContentDynamic = dynamic(() => import("./GraphContent"));
export default GraphContentDynamic;
