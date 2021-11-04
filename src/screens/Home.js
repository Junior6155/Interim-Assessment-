import React from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Button,
} from "react-native";
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontWeight: "800, bold",
            fontSize: 30,
            color: "darkslateblue",
          }}
        >
          Discover Your Best{" "}
        </Text>
      </View>
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
            borderWidth: 2,
            height: 40,
            margin: 12,
            padding: 10,
            borderColor: "dodgerblue",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <TextInput
            style={{
              color: "black",
              marginLeft: 10,
              fontSize: 15,
              fontWeight: "300, bold",
              borderColor: "dodgerblue",
            }}
            placeholder="Search"
            keyboardType="ascii-capable"
          />
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="dodgerblue" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <AntDesign name="shoppingcart" size={24} color="midnightblue" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontWeight: "800, bold",
            fontSize: 25,
            color: "black",
          }}
        >
          POPULAR{" "}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 200,
            height: 250,
            borderRadius: 10,
            marginBottom: 20,
          }}
          source={require("../images/hess.jpg")}
        />

        <Image
          style={{
            width: 200,
            height: 250,
            borderRadius: 10,
            marginBottom: 20,
          }}
          source={require("../images/stock.jpg")}
        />
        <Image
          style={{
            width: 200,
            height: 250,
            borderRadius: 10,
            marginBottom: 20,
          }}
          source={require("../images/kitty.jpg")}
        />
        <Image
          style={{
            width: 200,
            height: 250,
            borderRadius: 10,
            marginBottom: 20,
          }}
          source={require("../images/sebas.jpg")}
        />
      </View>
    </View>
  );
}
