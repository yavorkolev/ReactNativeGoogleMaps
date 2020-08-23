import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';

import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

export default class App extends Component{
  render(){
    return (
    <View style = {styles.container}>
      <MapView 
      provider = {PROVIDER_GOOGLE} 
      style = {styles.map} 
      initialRegion = {
        {latitude: 37.78825, 
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}>
      </MapView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  map: {
    flex: 1
  }
});