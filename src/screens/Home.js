import React from "react";
import { View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "snow",
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Ionicons name="settings" size={24} color="cornflowerblue" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="dodgerblue" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <AntDesign name="shoppingcart" size={24} color="midnightblue" />
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
}

//style={{ flexDirection: "row" }}
