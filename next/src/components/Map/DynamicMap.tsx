import {
  MapContainer,
  GeoJSON,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";

import L, { Layer, LayerOptions, PathOptions } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Legend from "./Legend";
import { OperationContext } from "@/components/layout/Layout";
import useLayerFeature from "./hooks/useLayerFeature";
import Markers from "./LayersControl";
import { legendList } from "./constant";
import { FactoryList, FactoryStruct, LegendDictionaryStruct } from "./type";

// ピンアイコンが表示されないため、画像を上書き
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const mapStyle = {
  height: "100vh",
  width: "100%",
  margin: "0 auto",
};

const geoStyle = {
  fillColor: "white",
  weight: 1,
  opacity: 1,
  color: "white",
  dashArray: "3",
  fillOpacity: 1,
};

type Props = {
  features: any;
  factories: FactoryList;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DynamicMap = ({ features, factories, setOpen }: Props) => {
  const { operation } = useContext(OperationContext);
  const { onEachFeatureTotal, onEachFeatureDay, onEachFeatureRecycling } =
    useLayerFeature();

  // Style URL format in XYZ PNG format; see our documentation for more options
  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/" target="_blank" rel="noopener noreferrer">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank" rel="noopener noreferrer">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  );

  return (
    <div className="w-[calc(100vw-400px)] relative z-0">
      <MapContainer
        style={mapStyle}
        zoom={8}
        minZoom={5}
        maxZoom={10}
        scrollWheelZoom={true}
        center={[36.286389, 138.817223]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {features && operation === "total" && (
          <GeoJSON
            data={features}
            style={geoStyle}
            onEachFeature={onEachFeatureTotal}
          />
        )}
        {features && operation === "day" && (
          <GeoJSON
            data={features}
            style={geoStyle}
            onEachFeature={onEachFeatureRecycling}
          />
        )}
        {features && operation === "recycling" && (
          <GeoJSON
            data={features}
            style={geoStyle}
            onEachFeature={onEachFeatureDay}
          />
        )}
        {operation && operation !== "facility" && (
          <Legend legend={legendList[operation]} />
        )}
        {operation && operation === "facility" && (
          <button
            className="legend bg-white px-4 py-2 text-xl"
            onClick={() => {
              setOpen(true);
            }}
          >
            数字でみる
          </button>
        )}
        {features && operation === "facility" && (
          <Markers factories={factories} />
        )}
      </MapContainer>
    </div>
  );
};

export default DynamicMap;
