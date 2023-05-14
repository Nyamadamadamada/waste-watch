type Classification = {
  key: number;
  data: {
    name: string;
    mixed_garbage: number;
    burnable_garbage: number;
    non_burnable_garbage: number;
    recyclable_garbage: number;
    other_garbage: number;
    oversized_garbage: number;
  };
};

type GraphValue = { name: string; value: number };

type TotalIncomingAmount = {
  key: number;
  data: {
    name: string;
    total: number;
    lifeWaste: number;
    businessWaste: number;
  };
};

type WasteDetail = {
  dailyText: string;
  businessText: string;
  rank_total: number;
  rank_day: number;
  rank_recycling: number;
};

type GarbageClass = "生活系" | "事業系";
