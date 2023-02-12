import "react-native-gesture-handler";

import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";

import WebViewScreen from "./screens/WebViewScreen";

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
