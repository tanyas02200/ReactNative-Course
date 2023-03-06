import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import {SafeAreaView,TouchableOpacity,View, Text} from "react-native";
import COLORS from "/Users/tanyaasharma/DesignProj/COLORS.js";
import styles from "/Users/tanyaasharma/DesignProj/components/signUpScreen/styles.js";

function signUpScreen() {
  const navigation = useNavigation();
  const formData = [
    {
      placeholder: "Name",
      isPassword: false,
      entityName: "Name",
    },
    {
      placeholder: "Email",
      isPassword: false,
      entityName: "Email",
    },
    {
      placeholder: "Password",
      isPassword: true,
      entityName: "Password",
    },
  ];
  return (
    <SafeAreaView style={styles.SUcont}>
      <View style={styles.Viewstyle1}>
        <Text style={styles.textstyle1}> Pick </Text>
        <Text style={styles.textstyle2}> Up </Text>
      </View>
      <View style={styles.Button1}>
        <Text style={styles.signupbutton}>Sign Up</Text>
      </View>
      <View style={styles.Orbutton}>
        <View style={styles.line}></View>
        <Text style={styles.Ortext}> OR </Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.Orbutton}>
        <View style={styles.Button2}>
          <Text>GOOGLE </Text>
        </View>
        <View style={styles.Button2}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>FACEBOOK </Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("signInScreen")}>
        <Text
          style={{
            color: COLORS.pink,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Sign In!
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default signUpScreen;
