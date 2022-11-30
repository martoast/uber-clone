import React from 'react'
import { SafeAreaView, StyleSheet, Image, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavFavorites from '../components/NavFavorites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";


const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={{ uri: "https://links.papareact.com/gzs" }}
            />
            <GooglePlacesAutocomplete
              placeholder="Where From?"
              styles={toInputBoxStyles}
              textInputProps={{
                placeholderTextColor: 'gray',
                returnKeyType: "search"
              }}
              fetchDetails={true}
              enablePoweredByContainer={false}
              returnKeyType={"search"}
              minLength={2}
              onPress={(data, details = null) => {
                dispatch(
                  setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                  })
                );

                dispatch(setDestination(null));
              }}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
            />
            <NavOptions/>
            <NavFavorites/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    color: "black",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 5,
    paddingBottom: 0,
  },
});