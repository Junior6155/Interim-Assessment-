import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function categories() {
  return (
    <View>
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd",
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
            }}
            source={require("../images/kitty.jpg")}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>Animage</Text>
        </View>
      </View>
    </View>
  );
}
