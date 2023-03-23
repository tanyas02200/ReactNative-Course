import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import signInScreen from "./components/signInScreen/signInScreen";
import signUpScreen from "./components/signUpScreen/signUpScreen";
import Picker from "./components/Picker";
import Picksignup from "./components/Picksignup";

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="signInScreen" component={Picker} />
         <Stack.Screen name="signUpScreen" component={Picksignup} />
        </Stack.Navigator>
      </NavigationContainer> 
      // <Picksignup/>
    )
  };
}
