import React from "react";
import { View, Text, Image } from "react-native";

export default function Login() {
  return (
    <View style={{ backgroundColo: "red" }}>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={{ uri: "https://unsplash.com/photos/LSNJ-pltdu8" }}
      />
      <Text style={{ color: "black" }}> Welcome </Text>
    </View>
  );
}
