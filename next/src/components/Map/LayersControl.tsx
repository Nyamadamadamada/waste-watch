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
import { FactoryList, FactoryStruct } from "./type";
import { FactoryContext } from "../layout/Layout";
import { useContext } from "react";

type Props = {
  factories: FactoryList;
};

const FactoryIcon = L.icon({
  iconUrl: "/image/map/factory.svg",
  iconSize: [20, 20],
});
const FactoryClusterIcon = L.icon({
  iconUrl: "/image/map/factory_cluster.svg",
  iconSize: [20, 20],
});

const Markers = ({ factories }: Props) => {
  const { setFactory } = useContext(FactoryContext);
  const handleClickFactory = (factory: FactoryStruct) => {
    setFactory(factory);
  };

  return (
    <div className="">
      {factories.map((factory, index) => {
        return (
          <div key={index}>
            {factory.is_cluster ? (
              <Marker
                key={index}
                position={factory.coordinates}
                icon={FactoryClusterIcon}
              >
                <Popup>
                  {factory.facilities.map((item) => {
                    return (
                      <div key={item.name} className="pb-1 cursor-pointer">
                        <div
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => handleClickFactory(item)}
                        >
                          {item.name}
                        </div>
                      </div>
                    );
                  })}
                </Popup>
              </Marker>
            ) : (
              <Marker
                key={index}
                position={factory.coordinates}
                icon={FactoryIcon}
                eventHandlers={{
                  click: () => handleClickFactory(factory),
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Markers;
