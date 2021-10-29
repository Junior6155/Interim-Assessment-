import React from "react";
import { Image, StyleSheet } from "react-native";

function ViewImageScreen(props) {
  return (
    <Image
      style={styles.neko}
      source={require("../assets/products/neko.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  neko: {
    width: "20%",
    height: "20%",
    alignItems: "centre",
  },
});
export default ViewImageScreen;
