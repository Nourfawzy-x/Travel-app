import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: useColorScheme() === "dark" ? "#151718" : "#fff",
          padding: 0,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor:
          useColorScheme() === "dark" ? Colors.dark.tint : Colors.light.tint,
      }}
    >
      {/* Index Screen with Home Icon */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Bookmark Screen */}
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="camera" size={24} color={color} />
          ),
        }}
      />

      {/* Category Screen */}
      <Tabs.Screen
        name="location"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: Colors.light.text,
                borderRadius: 5,
                padding: 2,
              }}
            >
              <Ionicons
                name="location"
                size={24}
                color={Colors.light.background}
              />
            </View>
          ),
          headerLeft: () => <></>,
        }}
      />

      {/* Profile Screen */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          title: "Nourhan Fawzy",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="school" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
