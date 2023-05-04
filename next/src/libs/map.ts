import { FactoryStruct } from "@/components/Map/type";
import fs from "fs";
import path from "path";

export const getMapFeatures = () => {
  const geoJsonFilePath = path.join(process.cwd(), "/data/mapData.json");
  const geoJsonData = fs.readFileSync(geoJsonFilePath, "utf8");
  const { features } = JSON.parse(geoJsonData);
  return features;
};

// 焼却施設
export const getIncinerationFactories = (): FactoryStruct[] => {
  const factoryFilePath = path.join(
    process.cwd(),
    "/data/incineration_facility.json"
  );
  const fileData = fs.readFileSync(factoryFilePath, "utf8");
  const jsonData = JSON.parse(fileData);
  const factories: FactoryStruct[] = jsonData.map((item: any) => {
    return {
      factoryType: item.factory_type,
      name: item.name,
      coordinates: [item.coordinates[1], item.coordinates[0]], // 緯度・軽度の順番
      address: item.address,
      local_government: item.local_government,
      annual_throughput: item.annual_throughput ?? "",
      industrial_waste: item.industrial_waste ?? "",
      remarks: item.remarks ?? "",
      resource_recovery: item.resource_recovery ?? "",
      waste_for_processing: item.waste_for_processing ?? "",
      processing_method: item.processing_method ?? "",
      facility_changes: item.facility_changes ?? "",
      reuse_and_repair_features: item.reuse_and_repair_features ?? "",
    };
  });

  return factories;
};

// 粗大ゴミ施設
export const getBulkyWasteFactories = (): FactoryStruct[] => {
  const factoryFilePath = path.join(process.cwd(), "/data/bulky_waste.json");
  const fileData = fs.readFileSync(factoryFilePath, "utf8");
  const jsonData = JSON.parse(fileData);
  const factories: FactoryStruct[] = jsonData.map((item: any) => {
    return {
      factoryType: "bulky_waste",
      name: item.name,
      coordinates: [item.coordinates[1], item.coordinates[0]],
      address: item.address,
      local_government: item.local_government,
      annual_throughput: item.annual_throughput ?? "",
      industrial_waste: item.industrial_waste ?? "",
      remarks: item.remarks ?? "",
      resource_recovery: item.resource_recovery ?? "",
      waste_for_processing: item.waste_for_processing ?? "",
      processing_method: item.processing_method ?? "",
      facility_changes: item.facility_changes ?? "",
      reuse_and_repair_features: item.reuse_and_repair_features ?? "",
    };
  });

  return factories;
};
