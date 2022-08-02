import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import {StyleSheet,View} from "react-native";// remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   
   </View>
);