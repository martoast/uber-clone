import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from 'tailwind-react-native-classnames';
import { originSelector } from "../slices/navSlice";

const Map = () => {

  const origin = useSelector(originSelector);

  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});