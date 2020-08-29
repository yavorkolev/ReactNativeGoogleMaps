import React, { Component } from 'react';
import { PermissionsAndroid, StyleSheet, View, } from 'react-native';

import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

export async function request_location_runtime_permission() {

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'ReactNativeCode Location Permission',
        'message': 'ReactNativeCode App needs access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Location Permission Granted.");
    }
    else {
      Alert.alert("Location Permission Not Granted");
    }
  } catch (err) {
    console.warn(err)
  }
}

export default class App extends Component{
  async componentDidMount() {
    await request_location_runtime_permission()
  }
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