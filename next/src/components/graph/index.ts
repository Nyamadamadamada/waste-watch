import dynamic from "next/dynamic";
const GraphContent = dynamic(() => import("./GraphContent"), { ssr: false });
export default GraphContent;
