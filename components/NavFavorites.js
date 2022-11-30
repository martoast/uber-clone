import React from "react";
import { useDispatch } from "react-redux";
import { setOrigin } from "../slices/navSlice";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

export default function NavFavourites() {
  const dispatch = useDispatch();

  const data = [
    {
      id: "123",
      icon: "home",
      location: {
        lat: 32.6392938,
        lng: -116.9598693,
      },
      description: "2365 Palomira Ct, Chula Vista, CA",
      title: "Home"
    },
    {
      id: "456",
      icon: "briefcase",
      location: {
        lat: 32.4633246,
        lng: -116.9115533,
      },
      description: "Blvd Insurgentes 19801 Bodega 10, B.C.",
      title: "Work"
    },
  ];

  return (
    <FlatList
      data={data}
      automaticallyAdjustContentInsets={false}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { location, description, icon, title } }) => (
        <TouchableOpacity 
        style={tw`flex-row items-center p-5`}
        onPress={() => dispatch(
          setOrigin({
            location: location,
            description: description,
          })
      )}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{title}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});