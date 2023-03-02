import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signinscreen from "./screens/Signinscreen";
import Signupscreen from "./screens/Signupscreen";
import WebViewScreen from "./screens/WebViewScreen";
// import "react-native-gesture-handler";

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header:()=>null}}>
          <Stack.Screen name="Signin" component={Signinscreen} />
          <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
          <Stack.Screen name="Signup" component={Signupscreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}








