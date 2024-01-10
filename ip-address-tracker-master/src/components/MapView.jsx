import React, { useContext, useMemo, useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "/images/icon-location.svg";
import { FetchContext } from "../Context/FetchContext";

const MapView = () => {
  const { data } = useContext(FetchContext);
  if (!data) {
    return;
  }
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: "",
  });

  useEffect(() => {
    setCoordinates({
      lat: data?.location.lat,
      lng: data?.location.lng,
    });
  }, [data]);

  const markerIconInstance = new L.icon({ iconUrl: markerIcon });

  const mapKey = useMemo(() => Math.random(), [coordinates]);

  return (
    <MapContainer
      key={mapKey}
      center={[coordinates.lat, coordinates.lng]}
      zoom={16}
      className="w-full h-3/5 z-0"
    >
      <TileLayer
        attribution="'&copy; OpenStreetMap France"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[coordinates.lat, coordinates.lng]}
        icon={markerIconInstance}
      />
    </MapContainer>
  );
};

export default MapView;
