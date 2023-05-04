import {
  MapContainer,
  GeoJSON,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  FeatureGroup,
  Rectangle,
} from "react-leaflet";
import L from "leaflet";
import { Factories, FactoryStruct } from "./type";
import { FactoryContext } from "../layout/Layout";
import { useContext } from "react";

type Props = {
  factories: Factories;
};
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];
const IncinerationIcon = L.icon({
  iconUrl: "/image/map/incineration.svg",
  iconSize: [24, 24],
});
const BulkyWasteIcon = L.icon({
  iconUrl: "/image/map/bulkyWaste.svg",
  iconSize: [24, 24],
});

const MapLayersControl = ({ factories }: Props) => {
  const { setFactory } = useContext(FactoryContext);
  const handleClick = (factory: FactoryStruct) => {
    console.log("クリック施設");
    console.log(factory);
    setFactory(factory);
  };
  return (
    <LayersControl position="topright" collapsed={false}>
      <LayersControl.Overlay checked name="焼却施設">
        <FeatureGroup pathOptions={{ color: "purple" }}>
          {factories.incinerationFacility.map((factory, index) => {
            return (
              <Marker
                key={index}
                position={factory.coordinates}
                icon={IncinerationIcon}
                eventHandlers={{
                  click: () => handleClick(factory),
                }}
              />
            );
          })}
        </FeatureGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="粗大ごみ処理施設">
        <FeatureGroup pathOptions={{ color: "purple" }}>
          {factories.bulkyWaste.map((factory, index) => {
            return (
              <Marker
                key={index}
                position={factory.coordinates}
                icon={BulkyWasteIcon}
                eventHandlers={{
                  click: () => handleClick(factory),
                }}
              />
            );
          })}
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default MapLayersControl;
