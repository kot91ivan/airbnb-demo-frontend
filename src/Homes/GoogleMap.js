import React from "react";
import GoogleMap from "google-map-react";

export default (Map = () => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
));
