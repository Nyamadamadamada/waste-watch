import { useContext, useEffect } from "react";
import L, { Layer, LayerOptions, PathOptions } from "leaflet";

import {
  MenuContext,
  OperationContext,
  PrefContext,
} from "@/components/layout/Layout";
const geoStyle = {
  fillColor: "white",
  weight: 1,
  opacity: 1,
  color: "white",
  dashArray: "3",
  fillOpacity: 1,
};

const getColor = (d: number): string => {
  if (d > 3000000) {
    return "#9b0006";
  }
  if (d > 1000000) {
    return "#de2d26";
  }
  if (d > 500000) {
    return "#fc9272";
  }
  if (d > 300000) {
    return "#FBD166";
  }
  return "#fee5d9";
};

const getColor1 = (d: number): string => {
  if (d > 23) {
    return "#052e16";
  }
  if (d > 20) {
    return "#166534";
  }
  if (d > 18) {
    return "#16a34a";
  }
  if (d > 15) {
    return "#bbf7d0";
  }
  return "#f0fdf4";
};

const getColor2 = (d: number): string => {
  if (d > 1000) {
    return "#de2d26";
  }
  if (d > 900) {
    return "#fc9272";
  }
  if (d > 800) {
    return "#FBD166";
  }
  return "#fee5d9";
};
type layerEx = Layer & {
  options: PathOptions;
};

function useLayerFeature() {
  const { handleClickPref } = useContext(PrefContext);
  const { handleClickMenu } = useContext(MenuContext);

  // 分布の項目・色付け・イベントの設定
  const onEachFeatureTotal = (feature: any, layer: layerEx) => {
    layer.options.fillColor = getColor(feature.properties.totalEmissions);
    const name = feature.properties.name;
    const totalEmissions = feature.properties.totalEmissions;
    const tooltipText = `[${name}]ごみ総排出量:${totalEmissions}t`;
    layer.bindTooltip(tooltipText);
    layer.on("click", () => {
      handleClickPref(feature.properties.pref);
      handleClickMenu("graph");
    });
  };

  const onEachFeatureDay = (feature: any, layer: layerEx) => {
    layer.options.fillColor = getColor1(feature.properties.recyclingRate);
    const name = feature.properties.name;
    const recyclingRate = feature.properties.recyclingRate;
    const tooltipText = `[${name}]リサイクル率:${recyclingRate}%`;
    layer.bindTooltip(tooltipText);
    layer.on("click", () => {
      handleClickPref(feature.properties.pref);
      handleClickMenu("graph");
    });
  };

  const onEachFeatureRecycling = (feature: any, layer: layerEx) => {
    layer.options.fillColor = getColor2(feature.properties.dailyEmissions);
    const name = feature.properties.name;
    const dailyEmissions = feature.properties.dailyEmissions;
    const tooltipText = `[${name}]１人１日当たりの排出量:${dailyEmissions}g`;
    layer.bindTooltip(tooltipText);
    layer.on("click", () => {
      handleClickPref(feature.properties.pref);
      handleClickMenu("graph");
    });
  };

  return {
    onEachFeatureTotal,
    onEachFeatureDay,
    onEachFeatureRecycling,
  };
}

export default useLayerFeature;
