import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Picksignup from "./components/Picksignup";
import Pickersignin from "./components/Pickersignin";
import { Provider } from "react-redux";
import { configureReduxStore } from './components/store/store';

const Stack = createNativeStackNavigator();
const store = configureReduxStore();
export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="signInScreen" component={Pickersignin} />
         <Stack.Screen name="signUpScreen" component={Picksignup} />
        </Stack.Navigator>
      </NavigationContainer> 
      </Provider>
      // <Picksignup/>
    )
  };
}
