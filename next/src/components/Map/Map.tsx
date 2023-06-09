import dynamic from "next/dynamic";
import { SetStateAction, useMemo, Dispatch } from "react";
import { FactoryList } from "./type";

type Props = {
  features: any;
  factories: FactoryList;
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
