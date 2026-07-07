import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});

export default function FindStore() {
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);
  const [distance, setDistance] = useState([]);




  useEffect(() => {
    const query = `
    [out:json];
    node["name"~"Domino"](13.5,100.3,14.0,100.9);
    out;
  `;
    fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query,
    })
      .then((res) => res.json())
      .then((data) => setStores(data.elements));
  }, []);

  
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-center p-3 ">Nearby store</div>
      <MapContainer
        center={[13.7563, 100.5018]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((store: any) => (
          <Marker key={store.id} position={[store.lat, store.lon]} icon={icon}>
            <Popup>{store.tags?.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="w-full p-3 flex flex-col gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="All Branches"
          className="border p-3 w-full"
        />
        {stores.map((store: any) => (
          <div
            key={store.id}
            className="flex flex-col gap-2 border-b border-gray-300 p-3"
          >
            <div className="text-xs capitalize">{store.tags?.name}</div>
            <div className="text-xs">
              <span className="text-blue-500">
                {store.lat}, {store.lon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
