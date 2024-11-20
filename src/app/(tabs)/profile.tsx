import Button from "@/src/components/ui/Button";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Constants
  // ----------------------------------------------------------------------------------------------------
  const profileImage = require("../../assets/images/profile.jpg");

  const [selectedImage, setSelectedImage] = useState<String | undefined>(
    undefined
  );

  // ----------------------------------------------------------------------------------------------------
  // MARK: Functions
  // ----------------------------------------------------------------------------------------------------
  async function imagePicker() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      console.log("Image picker cancelled");
    }
  }

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Text>profile page</Text>
      <Image
        source={selectedImage ? { uri: selectedImage } : profileImage}
        style={{ width: 200, height: 200 }}
      />
      <Button
        label="open image"
        onClick={() => {
          alert("Image clicked");
        }}
        backgroundColor="red"
      />
      <Button
        label="choose image"
        onClick={imagePicker}
        backgroundColor="green"
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
