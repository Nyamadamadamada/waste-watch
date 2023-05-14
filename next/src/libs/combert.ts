import json from "@/assets/deviation_value.json";

// は生活系ごみではｘｘと、の割合がが高く、xx の割合が低いです。
// また事業系ごみではｘｘの割合が高く、xx の割合が低いです。
//   "生活系ごみ_混合ごみ": "普通",
// "生活系ごみ_可燃ごみ": "少し低い",
// "生活系ごみ_不燃ごみ": "高い",
// "生活系ごみ_資源ごみ": "普通",
// "生活系ごみ_その他のごみ": "高い",
// "生活系ごみ_粗大ごみ": "高い",

// １都道府県のテキスト情報を返す
// dailyText:生活系
// businessText:事業系

const getText = (
  valueList: { name: string; value: string }[],
  category: "生活系ごみ" | "事業系ごみ"
): string => {
  let aLittleLowRate: string[] = [];
  let lowRate: string[] = [];
  let aLittleHigher: string[] = [];
  let higher: string[] = [];
  let highText = "";
  let lowText = "";

  valueList.forEach((item) => {
    if (item.value === "少し低い") {
      aLittleLowRate.push(`<b>${item.name}</b>`);
    }
    if (item.value === "低い") {
      lowRate.push(`<b>${item.name}</b>`);
    }
    if (item.value === "少し高い") {
      aLittleHigher.push(`<b>${item.name}</b>`);
    }
    if (item.value === "高い") {
      higher.push(`<b>${item.name}</b>`);
    }
  });

  // 高いがあれば高いごみ種別のみ
  if (higher.length > 0) {
    highText = `${higher.join("と")}の割合が高く、`;
  } else {
    // 高いがない場合、少し高い
    if (aLittleHigher.length > 0) {
      highText = `${aLittleHigher.join("と")}の割合が少し高く、`;
    }
  }

  if (lowRate.length > 0) {
    lowText = `${lowRate.join("と")}の割合が低いです。`;
  } else {
    if (aLittleLowRate.length > 0) {
      lowText = `${aLittleLowRate.join("と")}の割合が少し低いです。`;
    }
  }

  if (highText && lowText) {
    return `${highText}${lowText}`;
  }

  if (highText) {
    // 例：可燃ゴミの割合が高いです。
    return `${highText.replace("く、", "いです。")}`;
  }

  if (lowText) {
    return lowText;
  }

  if (
    lowRate.length === 0 &&
    aLittleLowRate.length === 0 &&
    higher.length === 0 &&
    aLittleHigher.length === 0
  ) {
    return `割合は全体的に標準です`;
  }

  return "";
};

export const aaa = json.map((data, index) => {
  const businessText = getText(
    [
      {
        name: "可燃ごみ",
        value: data["事業系ごみ_可燃ごみ"],
      },
      {
        name: "不燃ごみ",
        value: data["事業系ごみ_不燃ごみ"],
      },
      {
        name: "資源ごみ",
        value: data["事業系ごみ_資源ごみ"],
      },
      {
        name: "粗大ごみ",
        value: data["事業系ごみ_粗大ごみ"],
      },
      {
        name: "その他ごみ",
        value: data["事業系ごみ_その他のごみ"],
      },
      {
        name: "混合ごみ",
        value: data["事業系ごみ_混合ごみ"],
      },
    ],
    "事業系ごみ"
  );
  const dailyText = getText(
    [
      {
        name: "可燃ごみ",
        value: data["生活系ごみ_可燃ごみ"],
      },
      {
        name: "不燃ごみ",
        value: data["生活系ごみ_不燃ごみ"],
      },
      {
        name: "資源ごみ",
        value: data["生活系ごみ_資源ごみ"],
      },
      {
        name: "粗大ごみ",
        value: data["生活系ごみ_粗大ごみ"],
      },
      {
        name: "その他ごみ",
        value: data["生活系ごみ_その他のごみ"],
      },
      {
        name: "混合ごみ",
        value: data["生活系ごみ_混合ごみ"],
      },
    ],
    "生活系ごみ"
  );
  const obj = {
    dailyText,
    businessText,
    rank_total: data["総量"],
    rank_day: data["一日あたり"],
    rank_recycling: data["リサイクル率"],
  };
  return { key: ++index, data: obj };
});

// JSONと都道府県CSVからmapDataのpropertiesに値を追加する
// const a = features.map((item) => {
//   const j = jjj.find((jItem) => jItem.name === item.properties.name);
//   console.log(j);
//   item.properties.recyclingRate = j?.value;
//   return item;
// });
// console.log(JSON.stringify(a));
