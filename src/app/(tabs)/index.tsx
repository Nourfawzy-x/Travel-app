// import { Ionicons } from "@expo/vector-icons";
// import { Stack } from "expo-router";
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from "react-native";
// import { useHeaderHeight } from "@react-navigation/elements";
// import { Colors } from "@/constants/Colors";
// import CategoryButton from "@/components/CategoryButton";
// import Listing from "@/components/Listing";
// import { destinationList } from "@/constants/data/destination";

// export default function HomeScreen(): JSX.Element {
//   const headerHeight = useHeaderHeight();

//   return (
//     <View>
//       <Stack.Screen
//         options={{
//           headerTitle: "",
//           headerTransparent: true,
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => {}}
//               style={{
//                 marginLeft: 20,
//               }}
//             >
//               <Image
//                 source={{
//                   uri: "https://randomuser.me/api/portraits/men/45.jpg",
//                 }}
//                 style={{ width: 50, height: 50, borderRadius: 10 }}
//               />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => {}}
//               style={{
//                 marginRight: 20,
//                 backgroundColor: "#f5f5f5",
//                 borderRadius: 10,
//                 padding: 10,
//                 shadowColor: "#171717",
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: 0.25,
//                 shadowRadius: 3,
//               }}
//             >
//               <Ionicons name="notifications" size={24} color="black" />
//             </TouchableOpacity>
//           ),
//         }}
//       ></Stack.Screen>
//       <View style={[styles.container, { paddingTop: headerHeight }]}>
//         <Text style={styles.headingTxt}>Explore Thnhuihie Beautiful world</Text>
//         <View style={styles.searchSectionWrapper}>
//           <View style={styles.searchBar}>
//             <Ionicons name="search" size={18} style={{ marginRight: 5 }} />
//             <TextInput placeholder="Search" />
//           </View>

//           <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
//             <Ionicons
//               name="options"
//               size={28}
//               color={Colors.light.background}
//             />
//           </TouchableOpacity>
//         </View>

//         <CategoryButton />

//         <Listing listing={destinationList} />
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   headingTxt: {
//     fontSize: 28,
//     fontWeight: "800",
//     marginTop: 10,
//   },
//   searchSectionWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   searchBar: {
//     flexDirection: "row",
//     flex: 3,
//     alignItems: "center",
//     padding: 16,
//     borderRadius: 10,
//     marginRight: 10,
//     backgroundColor: "#f5f5f5",
//     shadowColor: "#171717",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//   },
//   filterBtn: {
//     backgroundColor: Colors.light.text,
//     padding: 12,
//     borderRadius: 10,
//   },
// });

import Button from "@/components/ui/Button";
import { PropsWithChildren } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { useState, useEffect } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function HomeScreen() {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    console.log("Registering for push notifications...");
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log("token: ", token);
        if (token) {
          setExpoPushToken(token);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      // Learn more about projectId:
      // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "2400b228-06e8-48bd-99a3-184948bbd87a",
        })
      ).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  async function sendNotification() {
    console.log("Notification sent");

    //notification message
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "My first push notifications",
      body: "This is my first push notifications",
      data: { data: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        host: "exp.host",
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  return (
    <View style={{ marginTop: 100, alignItems: "center" }}>
      <Text>Expo react native Notifications</Text>
      <Button label="Send Notifications" onPress={sendNotification} />
    </View>
  );
}
