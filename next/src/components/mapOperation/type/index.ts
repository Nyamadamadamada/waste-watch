type OperationType = "total" | "day" | "recycling" | "facility";

type OperationStruct = {
  key: OperationType;
  name: string;
  description: string;
};
