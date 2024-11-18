import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type ListingProps = {
  listing: any[];
};

export default function Listing({ listing }: ListingProps) {
  const renderItems = ({ item }: { item: { name: string } }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={listing} renderItem={renderItems} />
    </View>
  );
}
