import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

type ButtonProps = {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  textColor?: string;
  padding?: number;
  borderRadius?: number;
};

export default function Button({
  label,
  onClick,
  backgroundColor = "#6200ea",
  textColor = "#fff",
  padding = 10,
  borderRadius = 5,
}: ButtonProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor, padding, borderRadius }]}
        onPress={onClick} // Using the passed onClick function
      >
        <Text style={[styles.text, { color: textColor }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

// ----------------------------------------------------------------------------------------------------
// MARK: Styles
// ----------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // For Android shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
