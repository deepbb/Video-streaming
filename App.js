import {DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomescreenNavigation from './Navigation/HomescreenNavigation';
import HomeScreen from './Screens/HomeScreen';
import Color from './Shared/Color';

export default function App() {
  const navTheme={
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      flex: 1,
      padding:20,
      marginTop:20,
      backgroundColor:Color.black
    },
  }
  
  
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <HomescreenNavigation />
      </View>
    
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    // marginTop:25,
    backgroundColor:Color.black,
  },
});
