import Button from "@/components/ui/Button";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import favicon from "../../assets/images/favicon.png";
import { TextInput } from "react-native-gesture-handler";

export default function AboutScreen() {
  const [onLayout, setOnLayout] = useState<object>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      <Image
        source={favicon}
        style={{ width: 100, height: 100 }}
        resizeMode="repeat"
        onLoad={() => setIsLoading(true)}
        blurRadius={1}
        accessibilityLabel="favicon"
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
