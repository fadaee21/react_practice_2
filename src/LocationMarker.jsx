import { 
  // useEffect,
   useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
  import L from "leaflet";
import locIcon from "./location.svg";

var myIcon = L.icon({
  iconUrl: locIcon,
  iconSize: [30, 50],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

  // function success(pos) {
  //   map.flyTo([pos.coords.latitude, pos.coords.longitude], map.getZoom())
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  //   // eslint-disable-next-line
  // }, [])

  return position === null
    ? null
    : (
      <Marker icon={myIcon} position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
}

export default LocationMarker;
