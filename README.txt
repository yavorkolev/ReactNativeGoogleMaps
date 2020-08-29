# ReactNativeGoogleMaps Environment: Ubuntu - 18.04.1(Node-v14.8.0, react-native-cli: 2.0.1, npm-6.14.7, watchman-4.9.0, Java-1.8.0_131) + Android-10.0.0.232 
Google Map + Runtime Permissions Request example(MountainGuide)
=====================================================
1 - npx react-native-init MountainGuide // Create the project and go to the project folder
-----------------------------------------------------
2 - npm install react-native-maps --save // Add google maps dependencies
-----------------------------------------------------
3 - build.gradle (app) //Set Android dependencies, open android project in Android Studio and sync after changes in: 3 and 4
  In: dependencies { ...
    implementation 'com.facebook.react:react-native:0.59.3' 
    implementation 'com.android.support:appcompat-v7:27.0.1'
    implementation 'com.google.android.gms:play-services-base:16.1.0'
    implementation 'com.google.android.gms:play-services-gcm:16.1.0'
  Bottom out of all add:
    configurations.all {
      resolutionStrategy.force 'com.google.android.gms:play-services-gcm:16.1.0', 'com.google.android.gms:play-services-basement:15.0.0'
  }
-----------------------------------------------------
4 - AndroidManifest.xml // Add Google Maps Api key for Android
    In: <application ... add: 
      <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="Your Google Maps Api Key"/>
-----------------------------------------------------
5 - App.js //show GoogleMaps with dummy hardcoded coordinates:
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

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
-----------------------------------------------------
6 - Place in Android folder: "local.properties" with the path to the Android SDK, get from existing and working Android Studio project
-----------------------------------------------------
7 - react-native start
-----------------------------------------------------
8 - react-native run-android
=====================================================