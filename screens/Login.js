import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{
          width: 200,
          height: 250,
          borderRadius: 10,
          marginBottom: 20,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        }}
      />

      <TouchableOpacity
        style={{
          background: "#008b8b",
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
        }}
      >
        <AntDesign name="google" size={24} color="red" />

        <Text
          style={{
            color: "black",
            fontSize: 15,
            fontWeight: "300",
            marginLeft: 15,
          }}
        >
          Login with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          background: "#1e90ff",
          borderRadius: 10,
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "black", fontSize: 15, fontWeight: "300" }}>
          Continue to sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
