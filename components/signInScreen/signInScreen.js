import {SafeAreaView,Text, View,TouchableOpacity,} from "react-native";
import React from "react";
import styles from "/Users/tanyaasharma/DesignProj/components/signInScreen/styles.js";
import COLORS from "/Users/tanyaasharma/DesignProj/COLORS.js";
import { useNavigation } from "@react-navigation/native";
import Form from "../Form/Form";

export default signInScreen = () => {
  const navigation = useNavigation();
  const formData = [
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
    <SafeAreaView style={styles.ViewMain}>
      <View style={styles.Viewstyle1}>
        <Text style={styles.header1}> PIK </Text>
        <Text style={styles.header2}> Up </Text>
      </View>
      <View style={styles.headerboxcorners}>
        {/* <Form formData={formData} /> */}
      </View>
      <View style={styles.Button1}>
        <Text style={styles.Button1style}>Sign In</Text>
      </View>
      <View style={styles.ForgetP}>
        <Text style={styles.ForgetT}>Forgot Password?</Text>
      </View>
      <View style={styles.ForgetP}>
        <View style={styles.line}></View>
        <Text style={styles.Ortext}> OR </Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.Orbox}>
        <View style={styles.Button2}>
          <Text style={{ color: COLORS.secondary }}>GOOGLE</Text>
        </View>
        <View Style={{ width: 10 }} />
        <View style={styles.Button2}>
          <Text style={{ color: COLORS.secondary }}> FACEBOOK</Text>
        </View>
      </View>
      <View style={styles.ForgetP}>
        <Text style={styles.Donthaveaccount}> Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signUpScreen")}>
          <Text style={styles.signuptext}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
