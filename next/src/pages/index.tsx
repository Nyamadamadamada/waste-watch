import { GetStaticProps } from "next";
import Script from "next/script";

import Map from "@/components/Map";
import { getFactories, getMapFeatures } from "@/libs/map";
import { FactoryList } from "@/components/Map/type";
import FactoryModal from "@/components/factoryModal";
import { useState } from "react";
import Image from "next/image";
import BarGraphContent from "@/components/graph/BarGraphContent";

type Params = {
  features: [];
  factories: FactoryList;
};

export default function Home({ features, factories }: Params) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="">
      <main className="">
        <Map features={features} factories={factories} setOpen={setOpen} />
        <FactoryModal />
        {open && <BarGraphContent setOpen={setOpen} />}
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
