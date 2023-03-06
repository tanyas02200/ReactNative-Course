import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import styles from "./styles1";
import Form from "../Form/Form";
function signUpScreen() {
  const navigation = useNavigation();
  const formData = [
    {
      placeholder: "Name",
      entityName: "Name",
    },
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
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.centerLayout}>
          <TouchableOpacity onPress={() => navigation.navigate("signInScreen")}>
            <Text style={styles.signuptext}>Already Have an Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
};
export default signUpScreen;
