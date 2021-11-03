import React from "react";
import { TextInput, View } from "react-native";
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

        <View
          style={{
            backgroundColor: "snow",
            borderRadius: 1,
            flexDirection: "row",
            alignItems: "center",
            padding: 5,

            marginTop: 5,
          }}
        >
          <AntDesign name="search1" size={24} color="dodgerblue" />{" "}
          <TextInput
            style={{
              color: "black",
              marginLeft: 10,
              height: 40,
              margin: 12,
              borderWidth: 5,
              padding: 10,
              fontSize: 15,
              fontWeight: "300, bold",
            }}
            placeholder="Search"
            keyboardType="ascii-capable"
          />
        </View>

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
