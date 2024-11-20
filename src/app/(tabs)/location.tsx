import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function Page(): JSX.Element {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  // Display different text based on the state of the location data
  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "Location Found!";
  }

  return (
    <View style={styles.container}>
      {/* Show the status text */}
      <Text style={styles.paragraph}>{text}</Text>

      {/* Conditionally render the map once the location is available */}
      {location && (
        <MapView
          style={styles.map}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922, // Zoom level for latitude
            longitudeDelta: 0.0421, // Zoom level for longitude
          }}
        >
          {/* Marker to show user's current location */}
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
            description="Current location"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: "80%",
  },
});
