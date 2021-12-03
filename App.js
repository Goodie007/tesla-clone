import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItems from './components/CarItems/Index';
import StyleButton from './components/StyledButton';
import CarsList from './components/CarsList';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import AppLoader from './components/AppLoader';



export default function App() {
  return (
    <View style={styles.container}>
      <AppLoader />
      <SplashScreen />
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
