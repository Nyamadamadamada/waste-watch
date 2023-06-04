export type InfoStruct = "" | "map" | "detail" | "facility";

export type InfoTextStruct = {
  key: InfoStruct;
  title: string;
  description: string;
  image: string;
};
