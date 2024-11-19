import { Colors } from "@/constants/Colors";
import { ListingItem } from "@/types/ListingItem";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

type ListingProps = {
  listing: ListingItem[];
};

export default function Listing({ listing }: ListingProps) {
  const renderItems = ({ item }: { item: ListingItem }) => {
    console.log(item);
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.bookmark}>
          <Ionicons
            name="bookmark-outline"
            size={24}
            color={Colors.light.background}
          />
        </View>
        <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <View>
          <View>
            <FontAwesome5
              name="map-marker-alt"
              size={16}
              color={Colors.light.text}
            />
            <Text style={styles.itemLocation}>{item.location}</Text>
          </View>
        </View>
        <Text style={styles.itemPrice}>${item.price} per night</Text>
        <Text style={styles.itemRating}>Rating: {item.rating} stars</Text>
        <Text style={styles.itemDuration}>Duration: {item.duration} days</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={listing}
      renderItem={renderItems}
      horizontal
      keyExtractor={(item) => item.id.toString()} // Use `id` as key
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 10, // Use marginRight for horizontal spacing between items
    padding: 10,
    backgroundColor: "#f5f",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  bookmark: {
    position: "absolute",
    top: 170,
    right: 20,
    borderWidth: 2,
    borderColor: Colors.light.background,
    backgroundColor: Colors.light.text,
    padding: 5,
    borderRadius: 50,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
  },
  // itemDescription: {
  //   fontSize: 14,
  //   color: "#555",
  //   maxWidth: "60%",
  // },
  itemLocation: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#777",
  },
  itemPrice: {
    fontSize: 16,
    color: "#333",
  },
  itemRating: {
    fontSize: 14,
    color: "#f39c12",
  },
  itemDuration: {
    fontSize: 14,
    color: "#333",
  },
});
