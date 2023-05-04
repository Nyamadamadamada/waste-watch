import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Factories, FactoryStruct } from "./type";

type Props = {
  features: any;
  factories: Factories;
};

function Map({ features, factories }: Props) {
  const DynamicMap = useMemo(
    () =>
      dynamic(() => import("./DynamicMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <DynamicMap features={features} factories={factories} />;
}

export default Map;
