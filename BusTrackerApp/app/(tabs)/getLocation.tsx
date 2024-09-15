import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

export default function App() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
  

//   useEffect(() => {
//     (async () => {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const {coords, timestamp} = location;
//       const {latitude, longitude} = coords;
//     })();
//   }, []);
  
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

  let text;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const { coords } = location;
    const { latitude, longitude } = coords;
    text = `Latitude: ${latitude}\nLongitude: ${longitude}`;
  } else {
    text = 'Waiting...';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: "green",
  },
});