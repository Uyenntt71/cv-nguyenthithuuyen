import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import styles from "./index.module/css";
import "./index.css";

export default function Map() {
  const maps = {
    base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    center: [21.044606971498773, 105.74954265797669],
  };

  return (
    // <div id="map">
    <MapContainer
      className="markercluster-map"
      center={[21.044606971498773, 105.74954265797669]}
      scrollWheelZoom={true}
      zoom={15}
      maxZoom={20}
      minZoom={5}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={maps.base}
      />
      <Marker position={[21.044606971498773, 105.74954265797669]}>
        <Popup>My Address</Popup>
      </Marker>
    </MapContainer>
    // </div>
  );
}
