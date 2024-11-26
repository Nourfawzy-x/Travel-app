import Button from "@/components/ui/Button";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function AboutScreen() {
  const [onLayout, setOnLayout] = useState<object>({});

  function handleLayout(event: any) {
    setOnLayout(event.nativeEvent.layout);
  }
  console.log(onLayout);
  return (
    <View style={styles.container} onLayout={handleLayout} pointerEvents="none">
      <Text numberOfLines={2} onLongPress={() => console.log("nour")}>
        About screen Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illo optio corrupti voluptates, porro cumque omnis magni saepe error.
        Harum, perferendis.
      </Text>
      <Button
        label="Press me"
        onPress={() => {
          console.log("hello");
        }}
      />
      <TextInput
        placeholder="enter your name please"
        placeholderTextColor="green"
        onChange={(value) => {
          console.log(value);
        }}
        onFocus={() => {
          console.log("focused");
        }}
        onBlur={() => {
          console.log("blurred");
        }}
        multiline={true}
        keyboardType="number-pad"
        secureTextEntry={true}
        // editable={false}
      />
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
