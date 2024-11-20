import { destinationCategories } from "@/src/constants/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function CategoryButton() {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {}}
            style={styles.categoryBtn}
          >
            <MaterialCommunityIcons
              name={category.iconName as any}
              size={20}
              style={{ marginRight: 5 }}
            />
            <Text>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 22,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
