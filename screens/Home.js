import React from "react";
import { View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
  return (
    <View
      style={{
        backgroundColor: "snow",
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="menu" size={24} color="cornflowerblue" />
        <MaterialCommunityIcons name="headphones" size={24} color="royalblue" />
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="notifications-circle-outline"
            size={24}
            color="dodgerblue"
          />
        </View>
      </View>
    </View>
  );
}
