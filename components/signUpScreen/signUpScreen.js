import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import styles from "./signUpStyle";
import Form from "../Form/Form";
import Header from "../Header/Header";

function signUpScreen() {
  const navigation = useNavigation();
  const formData = [
    {
      placeholder: "Name",
      entityName: "name",
      isPassword: false,
    },
    {
      placeholder: "Email",
      entityName: "email",
      isPassword: false,
    },
    {
      placeholder: "Password",
      isPassword: true,
      entityName: "password",
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.verticalalignment}>
        <Header />
        <Form formData={formData} isSignIn={false} />
        <View style={styles. centeralalignment}>
          <TouchableOpacity onPress={() => navigation.navigate("signInScreen")}>
            <Text style={styles.footertext}>Already Have an Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default signUpScreen;
