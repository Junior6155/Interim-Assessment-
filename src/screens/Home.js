import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import Product from "./Product";

const faceData = [
  {
    id: "1",
    title: "Kitty",
    price: "$45.00",
    image: require("../images/hess.jpg"),
    size: "S, M, L",
  },
  {
    id: "2",
    title: "Neko",
    price: "$85.00",
    image: require("../images/neko.jpg"),
    size: "S, M, L",
  },
  {
    id: "3",
    title: "sebas",
    price: "$55.00",
    image: require("../images/sebas.jpg"),
    size: "S, M, L",
  },
  {
    id: "4",
    title: "npw",
    price: "$85.00",
    image: require("../images/npw.jpg"),
    size: "S, M, L",
  },
  {
    id: "5",
    title: "portable",
    price: "$75.00",
    image: require("../images/portable.jpg"),
    size: "S, M, L",
  },
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          height: 350,
          width: 200,
          backgroundColor: "#fff",
          left: 30,
          borderRadius: 15,
          marginRight: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <Image source={item.image} style={{ width: 200, height: 200 }} />
          </View>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <Text styles={{ fontSize: 18, fontWeight: "bold" }}>
            {item.title}
          </Text>
          <Text
            styles={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}
          >
            {item.price}
          </Text>
          <TouchableOpacity>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: "azure",
                position: "absolute",
                right: 0,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="md-cart-outline"
                size={20}
                color="cornflowerblue"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const trendingRenderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 15,
                backgroundColor: "snow",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 19 }}
            >
              {item.title}
            </Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
            paddingTop: 55,
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
              <Ionicons
                name="md-settings-outline"
                size={24}
                color="aquamarine"
              />
            </TouchableOpacity>
            <View
              style={{
                alignItems: "center",

                marginLeft: 15,
                borderRadius: 10,
                flexDirection: "row",
                padding: 5,
                borderWidth: 2,
                borderColor: "darkturquoise",
                marginTop: 5,
              }}
            >
              <TouchableOpacity>
                <Ionicons name="search" size={24} color="steelblue" />
              </TouchableOpacity>
              <TextInput
                style={{
                  color: "black",
                  marginLeft: 10,
                  height: 10,
                  margin: 10,
                  borderColor: "snow",

                  padding: 10,
                  fontSize: 15,
                  fontWeight: "300, bold",
                }}
                placeholder="Search"
              ></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
            >
              <Ionicons name="cart-outline" size={24} color="dodgerblue" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginVertical: 30 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={faceData}
            renderItem={renderItem}
          />
        </View>
        <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Trending</Text>
          <View>
            <FlatList
              data={faceData}
              renderItem={trendingRenderItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
