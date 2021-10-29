import React from "react";
import { Text, View, Image } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={{ uri: "https://unsplash.com/photos/vISNAATFXlE" }}
      />
      <Text style={{ color: "black" }}>Hello</Text>
    </View>
  );
}
