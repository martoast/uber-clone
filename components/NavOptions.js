import { FlatList, StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data= [
    {
        id: 1,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: 2,
        title: "Get food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    },
]

const NavOptions = () => {
const Navigation = useNavigation();
  return (
    <FlatList data={data} keyExtractor={(item) => item.id} horizontal renderItem={({item}) => (
        <TouchableOpacity onPress={() => Navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image style={{width: 120, height: 120, resizeMode: "contain"}} source={{uri: item.image}}></Image>    
                <Text>{item.title}</Text>     
                <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
                />
            </View>
        </TouchableOpacity>
    )}>

    </FlatList>
  )
}

export default NavOptions

const styles = StyleSheet.create({})