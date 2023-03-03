import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "../Screens/HomeScreen"
import PlayVideoScreen from "../Screens/PlayVideoScreen"

export default function HomeScreenNavigation() {

    const Stack = createNativeStackNavigator()
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={PlayVideoScreen} name="PlayVideo" />
   </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})