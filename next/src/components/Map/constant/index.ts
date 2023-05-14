import { FactoryTypeList, LegendDictionaryStruct } from "../type";

export const legendList: LegendDictionaryStruct = {
  total: {
    name: "令和２年 ごみ総排出量",
    list: [
      {
        text: "3000000 ~ (t)",
        color: "#9b0006",
      },
      {
        text: "1000000 ~ (t)",
        color: "#de2d26",
      },
      {
        text: "500000 ~ (t)",
        color: "#fc9272",
      },
      {
        text: "300000 ~ (t)",
        color: "#FBD166",
      },
      {
        text: "0 ~ (t)",
        color: "#fee5d9",
      },
    ],
  },
  day: {
    name: "令和２年 一人あたりの1日のごみ排出量",
    list: [
      {
        text: "1000 ~ (g)",
        color: "#de2d26",
      },
      {
        text: "900 ~ (g)",
        color: "#fc9272",
      },
      {
        text: "800 ~ (g)",
        color: "#FBD166",
      },
      {
        text: "0 ~ (g)",
        color: "#fee5d9",
      },
    ],
  },
  recycling: {
    name: "令和２年 リサイクル率",
    list: [
      {
        text: "23 ~ (%)",
        color: "#052e16",
      },
      {
        text: "20 ~ (%)",
        color: "#166534",
      },
      {
        text: "18 ~ (%)",
        color: "#16a34a",
      },
      {
        text: "15 ~ (%)",
        color: "#bbf7d0",
      },
      {
        text: "0 ~ (%)",
        color: "#f0fdf4",
      },
    ],
  },
  facility: {
    name: "",
    list: [],
  },
};

export const factoryTypeList: FactoryTypeList = [
  {
    key: "incinerationFacility",
    name: "焼却施設",
  },
  {
    key: "bulkyWaste",
    name: "粗大ゴミ処理施設",
  },
];
