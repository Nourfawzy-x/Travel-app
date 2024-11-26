import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActionSheetIOS,
  ActivityIndicator,
  Alert,
  StatusBar,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import EmojiPicker from "@/components/EmojiPicker";
import Listing from "@/components/Listing";
import { destinationList } from "@/constants/data/destination";

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
  const [result, setResult] = useState("start");

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
  function pressHandler() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Generate Random Number", "Reset"],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100).toString());
        } else if (buttonIndex === 2) {
          setResult("reset");
        }
      }
    );
  }

  function alertHandler() {
    Alert.alert("Alert Title", "My Alert Msg", [
      { text: "No", onPress: () => console.log("No") },
      { text: "Yes", onPress: () => console.log("Yes"), style: "destructive" },
    ]);
  }

  function promptHandler() {
    Alert.prompt(
      "Alert Title",
      "My Alert Msg",
      (text) => console.log(text),
      "secure-text",
      "secure-text"
    );
  }

  function myStatusBar() {
    useEffect(() => {
      StatusBar.setHidden(true);
    }, []);
  }

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#f00"} animated={true} barStyle="default" />
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
      <Listing listing={destinationList} />
      <Text>{result}</Text>
      <Button label="Press me" onPress={pressHandler} />
      <ActivityIndicator size="large" animating={true} color="red" />
      <Button label="Alert" onPress={alertHandler} />
      <Button label="Prompt" onPress={promptHandler} />
      <Button
        label="show status bar"
        onPress={() => StatusBar.setHidden(false)}
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
