import React from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Buttonstyles from "./Buttonstyle";

const Button = () => {
  return ButtonData.map((Button) => {
    <TouchableOpacity style={Buttonstylestyle.SignInButton}>
      <Text>{ ButtonData }</Text>
    </TouchableOpacity>;
  });
};
