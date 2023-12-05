"use client";
import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const location = useMemo(
    () => ({
      lat: 25.274252399999998,
      lng: 51.5330921,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerClassName="map-conatiner"
      zoom={15}
      center={location}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default Map;
