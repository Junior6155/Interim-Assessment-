import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function Details({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 30,
        }}
      >
        <Ionicons
          name="arrow-back-sharp"
          onPress={() => navigation.goBack()}
          size={20}
          color="teal"
        />
        <Ionicons name="menu-outline" size={20} color="powderblue" />
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          source={require("../images/neko.jpg")}
          style={{ height: 400, width: 500 }}
        />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: 10,
          top: 30,
        }}
      >
        <View style={styles.descriptionView}>
          <Image source={require("../images/blue.png")} style={styles.image} />
          <Text>Blue</Text>
        </View>
        <View style={styles.descriptionView}>
          <Image source={require("../images/red.png")} style={styles.image} />
          <Text>Red</Text>
        </View>

        <View style={styles.descriptionView}>
          <Image source={require("../images/pink.png")} style={styles.image} />
          <Text>Pink</Text>
        </View>
      </View>
      <View style={styles.footerView}>
        <View
          style={{
            height: 270,
            width: "100%",
            backgroundColor: "#fff",
            top: 50,
            borderRadius: 40,
            paddingHorizontal: 30,
            paddingVertical: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>Thanks</Text>
              <Text style={{ fontSize: 16, marginVertical: 15 }}>S, M, L</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="star" size={20} color="black" />
              <FontAwesome name="star" size={20} color="black" />
              <FontAwesome name="star" size={20} color="black" />
              <FontAwesome name="star" size={20} color="black" />
              <FontAwesome name="star-half-empty" size={20} color="black" />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 25,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>$65.00</Text>
            <TouchableOpacity>
              <View
                style={{
                  width: 80,
                  height: 70,
                  backgroundColor: "#000",
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}
                >
                  Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#E6E9E8",
  },
  descriptionView: {
    height: 110,
    width: 110,
    backgroundColor: "#fff",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 50,
    width: 50,
    marginVertical: 5,
  },
  footerView: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
