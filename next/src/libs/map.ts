import { FactoryList, FactoryStruct } from "@/components/Map/type";
import fs from "fs";
import path from "path";
const DATA_PATH = "data/map/";

export const getMapFeatures = () => {
  const geoJsonFilePath = path.join(process.cwd(), "/data/mapData.json");
  const geoJsonData = fs.readFileSync(geoJsonFilePath, "utf8");
  const { features } = JSON.parse(geoJsonData);
  return features;
};

export const getFactories = (facilityFile: string): FactoryList => {
  const factoryFilePath = path.join(process.cwd(), DATA_PATH, facilityFile);
  const fileData = fs.readFileSync(factoryFilePath, "utf8");
  const jsonData = JSON.parse(fileData);
  const factories: FactoryList = jsonData.map((item: any) => {
    return {
      name: item.name,
      coordinates: [item.coordinates[1], item.coordinates[0]], // 緯度・軽度の順番
      is_cluster: item.is_cluster,
      facilities: item.facilities ?? [],
      local_government: item.local_government ?? "",
      fill_rate: item.fill_rate ?? "",
      landfill_site: item.landfill_site ?? "",
      waste_type: item.waste_type ?? "",
      total_volume: item.total_volume ?? "",
      facility_status: item.facility_status ?? "",
      title: item.title,
    };
  });

  return factories;
};
