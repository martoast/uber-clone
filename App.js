import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';
import { store } from './store'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

export default function App() {
  const Stack =  createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -72 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false
              }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{
                headerShown: false
              }} />
              <Stack.Screen name="EatScreen" component={EatScreen} options={{
                headerShown: false
              }} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}