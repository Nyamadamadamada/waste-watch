import { GetStaticProps } from "next";
import Script from "next/script";

import Map from "@/components/Map";
import {
  getBulkyWasteFactories,
  getIncinerationFactories,
  getMapFeatures,
} from "@/libs/map";
import { Factories, FactoryStruct } from "@/components/Map/type";
import styles from "./index.module.css";
import { useState } from "react";
import cn from "classnames";
import FactoryModal from "@/components/factoryModal";

type Params = {
  features: [];
  factories: Factories;
};
export default function Home({ features, factories }: Params) {
  return (
    <div className="">
      <main className="">
        <Map features={features} factories={factories} />
      </main>
      <FactoryModal />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Params> = async () => {
  // const features = getMapFeatures();
  const incinerationFacility = getIncinerationFactories();
  const bulkyWaste = getBulkyWasteFactories();
  const factories: Factories = {
    incinerationFacility,
    bulkyWaste,
  };
  return {
    props: {
      // features,
      factories,
      features: [],
    },
  };
};
