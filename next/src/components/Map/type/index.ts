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

export type FactoryStruct = {
  name: string;
  coordinates: LatLngExpression;
  title: string;
  is_cluster?: boolean;
  facilities: FactoryStruct[];
  local_government?: string;
  fill_rate?: string;
  landfill_site?: string;
  waste_type?: string;
  total_volume?: string;
  facility_status?: string;
};

export type FactoryList = FactoryStruct[];
