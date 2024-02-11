import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import "@scss/components/googleMap/GoogleMap.scss";
import { GoogleMapData } from "@data/GoogleMapData";
import MyMapComponent from "@components/googleMap/MyMapComponent";

import Loading from "@common/components/Loading"

const customStyling = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: GoogleMapData.height
}

// return loading or failure div
const render = (status: Status): React.ReactElement => {
  if (status === Status.FAILURE) return <div>Error</div>;
  return (
    <Loading optionalClassName='google-map' optionalStyling={customStyling} />
  );
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
