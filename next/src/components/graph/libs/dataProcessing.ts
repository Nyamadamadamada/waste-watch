import TotalIncomingAmountJson from "@/assets/data/total_incoming_amount.json";
import HouseholdClassificationJson from "@/assets/data/household_classification.json";
import BusinessClassificationJson from "@/assets/data/business_classification.json";

export const getTotalIncomingAmount = (
  key: number
): { name: string; data: GraphValue[] } => {
  const totalIncomingAmount = TotalIncomingAmountJson.find(
    (data) => data.key === key
  );
  if (typeof totalIncomingAmount === "undefined") {
    return { name: "", data: [] };
  }
  let data = [];
  data.push({
    name: "事業系ごみ",
    value: totalIncomingAmount.data["businessWaste"],
  });
  data.push({
    name: "生活系ごみ",
    value: totalIncomingAmount.data["lifeWaste"],
  });
  return { name: totalIncomingAmount.data.name, data };
};

export const getHouseholdClassification = (
  key: number
): { name: string; data: GraphValue[] } => {
  const householdClassification = HouseholdClassificationJson.find(
    (data) => data.key === key
  );
  if (typeof householdClassification === "undefined") {
    return { name: "", data: [] };
  }
  let data = [];

  data.push({
    name: "混合ごみ",
    value: householdClassification.data["mixed_garbage"],
  });
  data.push({
    name: "その他ごみ",
    value: householdClassification.data["other_garbage"],
  });
  data.push({
    name: "粗大ごみ",
    value: householdClassification.data["oversized_garbage"],
  });
  data.push({
    name: "資源ごみ",
    value: householdClassification.data["recyclable_garbage"],
  });
  data.push({
    name: "不燃ごみ",
    value: householdClassification.data["non_burnable_garbage"],
  });
  data.push({
    name: "可燃ごみ",
    value: householdClassification.data["burnable_garbage"],
  });
  return { name: householdClassification.data.name, data: data };
};

export const getBusinessClassification = (
  key: number
): { name: string; data: GraphValue[] } => {
  const businessClassification = BusinessClassificationJson.find(
    (data) => data.key === key
  );
  if (typeof businessClassification === "undefined") {
    return { name: "", data: [] };
  }
  let data = [];

  data.push({
    name: "混合ごみ",
    value: businessClassification.data["mixed_garbage"],
  });
  data.push({
    name: "その他ごみ",
    value: businessClassification.data["other_garbage"],
  });
  data.push({
    name: "粗大ごみ",
    value: businessClassification.data["oversized_garbage"],
  });
  data.push({
    name: "資源ごみ",
    value: businessClassification.data["recyclable_garbage"],
  });
  data.push({
    name: "不燃ごみ",
    value: businessClassification.data["non_burnable_garbage"],
  });
  data.push({
    name: "可燃ごみ",
    value: businessClassification.data["burnable_garbage"],
  });
  return { name: businessClassification.data.name, data: data };
};
