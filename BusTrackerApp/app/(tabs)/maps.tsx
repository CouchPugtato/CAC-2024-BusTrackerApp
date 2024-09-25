import React from 'react';
import MapView, {Marker } from 'react-native-maps';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {

  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);


  useEffect(() => {
    const fetchLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
      } catch (error) {
        setErrorMsg('Error getting location');
      }
    };

    fetchLocation();
  }, []);

  let latitudeVal = 0;
  let longitudeVal = 0;
  let text;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const { coords } = location;
    const { latitude, longitude } = coords;
    text= `Latitude: ${latitude}\nLongitude: ${longitude}`;
    longitudeVal =  longitude;
    latitudeVal = latitude;

  } else {
    text = 'Waiting...';
  }

  return (
    <View style={styles.container}>   
      <MapView style={styles.map}
        initialRegion = {{
          latitude: latitudeVal,
          longitude:  longitudeVal,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }} >
        <Marker coordinate = {{latitude: latitudeVal,longitude: longitudeVal}}
         pinColor = {"purple"} // any color
         title={"My Location"}
         description={" blah"}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});