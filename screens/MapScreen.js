import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from "../components/Map";


const HomeScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})