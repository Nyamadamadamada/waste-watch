import { GetStaticProps } from "next";

import Map from "@/components/Map";
import { getFactories, getMapFeatures } from "@/libs/map";
import { FactoryList } from "@/components/Map/type";
import FactoryModal from "@/components/factoryModal";
import { useContext, useState } from "react";
import BarGraphContent from "@/components/graph/BarGraphContent";
import { OperationContext } from "@/components/layout/Layout";

type Params = {
  features: [];
  factories: FactoryList;
};

export default function Home({ features, factories }: Params) {
  const { widthModalOpen } = useContext(OperationContext);
  return (
    <div className="">
      <main className="">
        <Map features={features} factories={factories} />
        <FactoryModal />
        {widthModalOpen && <BarGraphContent />}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Params> = async () => {
  const features = getMapFeatures();
  const lastFacility = getFactories("last_facility.json");

  return {
    props: {
      features,
      factories: lastFacility,
    },
  };
};
