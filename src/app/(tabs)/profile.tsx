import Button from "@/components/ui/Button";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import EmojiPicker from "@/components/EmojiPicker";

export default function ProfileScreen() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Constants
  // ----------------------------------------------------------------------------------------------------
  const profileImage = require("../../assets/images/profile.jpg");

  const [selectedImage, setSelectedImage] = useState<String | undefined>(
    undefined
  );
  const [showButtonOption, setShowButtonOption] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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
      setShowButtonOption(true);
      setSelectedImage(result.assets[0].uri);
    } else {
      console.log("Image picker cancelled");
    }
  }

  function resetHandler() {
    setSelectedImage(undefined);
    setShowButtonOption(false);
  }

  function onAddSticker() {
    setIsModalVisible(true);
  }

  function isModalClose() {
    setIsModalVisible(false);
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
      {showButtonOption ? (
        <View>
          {" "}
          <Button label="reset" onPress={resetHandler} backgroundColor="gray" />
          <Button
            label="add image"
            onPress={onAddSticker}
            backgroundColor="yellow"
          />
        </View>
      ) : (
        <View>
          <Button
            label="open image"
            onPress={() => {
              alert("Image clicked");
            }}
            backgroundColor="red"
          />
          <Button
            label="choose image"
            onPress={imagePicker}
            backgroundColor="green"
          />
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={isModalClose}
        title="Choose an Emoji"
        content={"😀"}
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
