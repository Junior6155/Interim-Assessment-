import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import Cart from "./src/screens/Cart";
import Checkout from "./src/screens/Checkout";

const stack = createNativeStackNavigator();

export default function App() {
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
          name="Details"
          component={Details}
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
