import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function page() {
  return (
    <View style={styles.container}>
      <Text>bookmark page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
