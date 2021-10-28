import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.black}
      source={require("../assets/images/black.jpg")}
    >
      <View style={styles.bestContainer}>
        <Image
          style={styles.best}
          source={require("../assets/images/best.jpg")}
        />
        <Text>Get Your Quality Headphones</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  black: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#00ced1",
  },
  best: {
    width: 150,
    height: 150,
  },
  bestContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#2f4f4f",
  },
});

export default WelcomeScreen;
