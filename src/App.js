import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import locIcon from "./location.svg";
import L from "leaflet";
import { GeoJSON } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";

import LocationMarker from "./LocationMarker";
const center = [35.715561, 37.3620302];
var myIcon = L.icon({
  iconUrl: locIcon,
  iconSize: [30, 50],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const dataGeojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [51.435585021972656, 35.713067954913896],
            [51.41704559326172, 35.71613426749111],
            [51.416015625, 35.69634053686435],
            [51.42871856689453, 35.681561731721395],
            [51.439361572265625, 35.6715217365782],
            [51.44691467285156, 35.6807251137039],
            [51.46442413330078, 35.67207954722265],
            [51.48193359375, 35.67626300279665],
            [51.494293212890625, 35.68323494144002],
            [51.494293212890625, 35.6960617168288],
            [51.486053466796875, 35.7072137578392],
            [51.435585021972656, 35.713067954913896],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [51.387176513671875, 35.717806751895715],
          [51.387176513671875, 35.658133111697204],
          [51.427345275878906, 35.67598411258056],
        ],
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [51.339454650878906, 35.72895575080859],
      },
    },
  ],
};

function App() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "100vw", height: "100vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=BB0KMZbkGNM7FiApjPhF"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <LocationMarker />
      <Marker
        key="my-marker"
        icon={myIcon}
        position={[35.715561, 37.8620302]}
      />
      <GeoJSON key="my-geojson" data={dataGeojson} >
        <Popup>
          geojson point
        </Popup>
      </GeoJSON>
    </MapContainer>
  );
}

export default App;
