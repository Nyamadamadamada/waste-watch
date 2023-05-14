import { LatLngExpression } from "leaflet";

export type LegendDataStruct = {
  name: string;
  list: {
    text: string;
    color: string;
  }[];
};

export type LegendDictionaryStruct = {
  [key in OperationType]: LegendDataStruct;
};

export type FactoryType = "incinerationFacility" | "bulkyWaste";

export type Factories = { [key in FactoryType]: FactoryStruct[] };

export type FactoryTypeList = { key: FactoryType; name: string }[];

export type FactoryStruct = {
  factoryType: FactoryType | "";
  name: string;
  coordinates: LatLngExpression;
  local_government: string;
  annual_throughput: string;
  industrial_waste: string;
  remarks: string;
  title: string;
  resource_recovery?: string;
  waste_for_processing?: string;
  processing_method?: string;
  facility_changes?: string;
  reuse_and_repair_features?: string;
};
