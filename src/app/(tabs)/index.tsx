import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import CategoryButton from "@/components/CategoryButton";
import Listing from "@/components/Listing";
import { destinationList } from "@/constants/data/destination";

export default function HomeScreen(): JSX.Element {
  const headerHeight = useHeaderHeight();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    headingTxt: {
      fontSize: 28,
      fontWeight: "800",
      marginTop: 10,
    },
    searchSectionWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
    },
    searchBar: {
      flexDirection: "row",
      flex: 3,
      alignItems: "center",
      padding: 16,
      borderRadius: 10,
      marginRight: 10,
      backgroundColor: "#f5f5f5",
      shadowColor: "#171717",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
    filterBtn: {
      backgroundColor: Colors.light.text,
      padding: 12,
      borderRadius: 10,
    },
  });

  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginLeft: 20,
              }}
            >
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/45.jpg",
                }}
                style={{ width: 50, height: 50, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: "#f5f5f5",
                borderRadius: 10,
                padding: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingTxt}>Explore The Beautiful world</Text>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} style={{ marginRight: 5 }} />
            <TextInput placeholder="Search" />
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons
              name="options"
              size={28}
              color={Colors.light.background}
            />
          </TouchableOpacity>
        </View>

        <CategoryButton />

        <Listing listing={destinationList} />
      </View>
    </View>
  );
}
