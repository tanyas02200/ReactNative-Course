import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import signInScreen from "./components/signInScreen/signInScreen";
import signUpScreen from "./components/signUpScreen/signUpScreen";

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="signInScreen" component={signInScreen} />
          {/* <Stack.Screen name="WebViewScreen" component={WebViewScreen} /> */}
          <Stack.Screen name="signUpScreen" component={signUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
