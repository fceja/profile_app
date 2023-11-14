import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "@scss/components/googleMap/GoogleMap.scss";
import { GoogleMapData } from "@/ts/data/GoogleMapData";
import MyMapComponent from "@components/googleMap/MyMapComponent";

// return loading or failure div
const render = (status: Status): React.ReactElement => {
  if (status === Status.FAILURE) return <div>Errorv</div>;
  return <div>Loading...</div>;
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? "";

const center = {
  lat: GoogleMapData.latitude,
  lng: GoogleMapData.longitude,
};

const zoom = GoogleMapData.zoom;

const styles = {
  width: GoogleMapData.width,
  height: GoogleMapData.height,
};

const GoogleMap = () => {
  return (
    <div className="map-container">
      <Wrapper apiKey={apiKey} render={render}>
        <MyMapComponent center={center} zoom={zoom} styles={styles} />
      </Wrapper>
    </div>
  );
};

export default GoogleMap;
