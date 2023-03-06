import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import styles from "./styles2";
import COLORS from "./../../COLORS";
import { useNavigation } from "@react-navigation/native";
import Form from "./../Form/Form";

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
      <View style={styles.verticalLayout}>
        <View style={styles.body}>
          <Text style={styles.header1}> PIK </Text>
          <Text style={styles.header2}> Up </Text>
        </View>
        <Form formData={formData} />
        <TouchableOpacity style={styles.SignInButton}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.centerLayout}>
          <Text>Forgot Password?</Text>
        </View>
        <View style={styles.horizontalLayout}>
          <View style={styles.OptionsforSign}>
            <Text>GOOGLE</Text>
          </View>
          <View style={styles.OptionsforSign}>
            <Text> FACEBOOK</Text>
          </View>
        </View>
        <View style={styles.centerLayout}>
          <Text> Dont have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signUpScreen")}>
            <Text style={styles.signuptext}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
