import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import GetDate from "@/components/GetDate";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "folder-open" : "folder-outline"}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "ToDo",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
              size={25}
            />
          ),
          headerRight: () => (
            <View style={styles.dateContainer}>
              <GetDate />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    marginBottom:9,
    marginRight: 16, // Margin to push the date component to the right
  },
});

export default _layout;
