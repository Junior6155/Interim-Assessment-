import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";

export default function Product({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "snow",
        alignItems: "center",
        paddingVertical: 100,
      }}
    >
      <Image
        style={{ width: 250, height: 250 }}
        source={require("../images/hess.jpg")}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 40,
          marginVertical: 40,
        }}
      >
        Headphones {"\n"} To Enchance Your Music Experience{" "}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View
          styles={{
            height: 70,
            weight: 70,
            borderWidth: 2,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 30,
          }}
        >
          <Ionicons name="arrow-forward-circle" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
