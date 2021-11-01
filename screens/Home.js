import React from "react";
import { View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="menu" size={24} color="cornflowerblue" />

        <AntDesign name="search1" size={24} color="dodgerblue" />
        <AntDesign name="shoppingcart" size={24} color="cyan" />
      </View>
      <View>
        <Image
          style={{
            width: 250,
            height: 300,
            borderRadius: 10,
            marginBottom: 20,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          }}
        />
      </View>
    </View>
  );
}

//style={{ flexDirection: "row" }}
