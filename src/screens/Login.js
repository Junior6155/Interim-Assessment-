import React from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "snow",
        justifyContent: "center",
      }}
    >
      <Image
        style={{
          width: 300,
          height: 350,
          borderRadius: 10,
          marginBottom: 20,
          resizeMode: "cover",
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1593359863503-f598684c806f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        }}
      />

      <View
        style={{
          borderRadius: 10,

          flexDirection: "row",
          alignItems: "center",
          padding: 5,

          marginTop: 5,
        }}
      >
        <AntDesign name="user" size={24} color="darkcyan" />
        <TextInput
          style={{
            color: "black",
            marginLeft: 10,
            height: 40,
            margin: 12,
            borderColor: "cyan",
            borderWidth: 5,
            padding: 10,
            fontSize: 15,
            fontWeight: "300, bold",
          }}
          placeholder="Username or email"
          keyboardType="ascii-capable"
        />
      </View>

      <View
        style={{
          alignItems: "center",

          borderRadius: 10,
          flexDirection: "row",
          padding: 5,

          marginTop: 5,
        }}
      >
        <AntDesign name="lock" size={24} color="cadetblue" />
        <TextInput
          style={{
            color: "black",
            height: 40,
            margin: 12,
            borderColor: "aquamarine",
            borderWidth: 5,
            padding: 10,
            fontSize: 15,
            fontWeight: "300, bold",
            marginLeft: 15,
          }}
          placeholder="Password"
          keyboardType="ascii-capable"
        />
      </View>

      <Text style={{ marginTop: 10, fontWeight: "500", color: "black" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: "royalblue", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
      </Text>
      <Text style={{ marginTop: 10, fontWeight: "500", color: "grey" }}>
        New here?
        <TouchableOpacity>
          <Text style={{ color: "deepskyblue", fontWeight: "bold" }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
