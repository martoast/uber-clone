import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames';


const EatScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Text>Eat Screen</Text>
        </View>
    </SafeAreaView>
  )
}

export default EatScreen

const styles = StyleSheet.create({})