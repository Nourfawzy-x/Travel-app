import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { View } from "react-native";

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
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      {/* Bookmark Screen */}
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={24} color={color} />
          ),
        }}
      />

      {/* Category Screen */}
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: Colors.light.text,
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Ionicons name="grid" size={24} color={Colors.light.background} />
            </View>
          ),
        }}
      />

      {/* Profile Screen */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
