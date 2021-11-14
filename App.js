import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import ProductDetails from "./src/screens/ProductDetails";
import Cart from "./src/screens/Cart";
import Checkout from "./src/screens/Checkout";

const stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    MontserratMedium: require("./src/fonts/Montserrat-Medium.ttf"),
    MontserratRegular: require("./src/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("./src/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./src/fonts/Montserrat-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          initialParams={{ cart1: 1 }}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
