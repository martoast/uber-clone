import React from 'react'
import { SafeAreaView, StyleSheet, Image, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
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
              styles={{
                container: {
                  flex: 0,
                },
                textInput: {
                  height: 38,
                  color: '#000000',
                  fontSize: 16,
                }
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
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})