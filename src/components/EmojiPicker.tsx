import React from "react";
import { Modal, Pressable, View, Text, StyleSheet } from "react-native";

type EmojiPickerProps = {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  content: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
};

export default function EmojiPicker({
  isVisible,
  onClose,
  title,
  content,
  backgroundColor = "#fff",
  textColor = "#000",
  borderRadius = 10,
}: EmojiPickerProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor, borderRadius }]}>
          <Text style={[styles.title, { color: textColor }]}>{title}</Text>
          <Text style={[styles.content, { color: textColor }]}>{content}</Text>

          <Pressable
            style={[styles.button, { borderRadius }]}
            onPress={onClose}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

// ----------------------------------------------------------------------------------------------------
// MARK: Styles
// ----------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background overlay
  },
  modalContent: {
    padding: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200ea",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
