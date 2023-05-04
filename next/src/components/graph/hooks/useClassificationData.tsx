import { useContext, useEffect, useState } from "react";
import {
  getBusinessClassification,
  getHouseholdClassification,
  getTotalIncomingAmount,
} from "../libs/dataProcessing";
import { PrefContext } from "@/components/layout/Layout";

function useClassificationData(): {
  name: string;
  totalData: GraphValue[];
  householdData: GraphValue[];
  businessData: GraphValue[];
} {
  const { pref } = useContext(PrefContext);

  const [name, setName] = useState<string>("");
  const [totalData, setTotalData] = useState<GraphValue[]>([]);
  const [householdData, setHouseholdData] = useState<GraphValue[]>([]);
  const [businessData, setBusinessData] = useState<GraphValue[]>([]);

  useEffect(() => {
    if (typeof pref === "string") {
      setName("");
      return;
    }
    const totalIncomingAmount = getTotalIncomingAmount(pref);
    const householdClassification = getHouseholdClassification(pref);
    const businessClassification = getBusinessClassification(pref);
    setTotalData(totalIncomingAmount.data);
    setHouseholdData(householdClassification.data);
    setBusinessData(businessClassification.data);
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

  return { name, totalData, householdData, businessData };
}
export default useClassificationData;
