import { useContext, useEffect, useState } from "react";
import {
  getBusinessClassification,
  getHouseholdClassification,
  getTotalIncomingAmount,
  getWasteDetail,
} from "../libs/dataProcessing";
import { PrefContext } from "@/components/layout/Layout";

function useGraphData(): {
  name: string;
  totalData: GraphValue[];
  householdData: GraphValue[];
  businessData: GraphValue[];
  wasteDate: WasteDetail;
} {
  const { pref } = useContext(PrefContext);

  const [name, setName] = useState<string>("");
  const [totalData, setTotalData] = useState<GraphValue[]>([]);
  const [householdData, setHouseholdData] = useState<GraphValue[]>([]);
  const [businessData, setBusinessData] = useState<GraphValue[]>([]);
  const [wasteDate, setWasteData] = useState<WasteDetail>({
    dailyText: "",
    businessText: "",
    rank_total: 0,
    rank_day: 0,
    rank_recycling: 0,
  });

  useEffect(() => {
    if (typeof pref === "string") {
      setName("");
      return;
    }
    const totalIncomingAmount = getTotalIncomingAmount(pref);
    const householdClassification = getHouseholdClassification(pref);
    const businessClassification = getBusinessClassification(pref);
    const pickedWasteDetail = getWasteDetail(pref);
    setTotalData(totalIncomingAmount.data);
    setHouseholdData(householdClassification.data);
    setBusinessData(businessClassification.data);
    setWasteData(pickedWasteDetail);
    try {
      if (householdClassification.name !== businessClassification.name) {
        throw new Error("都道府県が一致しない");
      }
      setName(householdClassification.name);
    } catch (e) {
      console.error(e);
      setName("");
    }
  }, [pref]);

  return { name, totalData, householdData, businessData, wasteDate };
}
export default useGraphData;
