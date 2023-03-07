import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import styles from "./signInStyle";
import COLORS from "../../COLORS";
import { useNavigation } from "@react-navigation/native";
import Form from "../Form/Form";
import Header from "../Header/Header";

export default signInScreen = () => {
  const navigation = useNavigation();
  const formData = [
    {
      placeholder: "Email",
      entityName: "Email",
    },
    {
      placeholder: "Password",
      isPassword: true,
      entityName: "Password",
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.verticalalignment}>
        <Header />
        <Form formData={formData} isSignIn={true} />
        <View style={styles.centeralignment}>
          <Text>Forgot Password?</Text>
          <Text> Dont have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signUpScreen")}>
            <Text style={styles.footertext}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
