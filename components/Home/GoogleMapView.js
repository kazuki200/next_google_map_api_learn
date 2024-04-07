"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useContext, useEffect } from "react";
import Markers from "./Markers";

const GoogleMapView = ({ businessList }) => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    mapIds: "59d434e60d049b95",
  });

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          center={userLocation}
          mapContainerStyle={containerStyle}
          zoom={10}
          options={{ mapId: "59d434e60d049b95" }}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {businessList.map(
            (item, index) =>
              index <= 7 && <Markers business={item} key={index} />
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMapView;
