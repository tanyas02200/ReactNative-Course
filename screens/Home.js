// Home screen for the app

import { useLinkTo } from "@react-navigation/native";
import React, { Component } from "react"

import { Button, SafeAreaView, StyleSheet } from "react-native"

export default class Home extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      const Websites = [
         {
            buttonTitle: "Youtube",
            url: "https://youtube.com"
         },
         {
            buttonTitle: "Gmail",
            url: "https://gmail.com"
         },
         {
            buttonTitle: "Amazon",
            url: "https://amazon.in"
         },
         {
            buttonTitle: "Google",
            url: "https://google.com"
         }
      ]
      return (
         <SafeAreaView
            style={{
               flex: 1,
               justifyContent: "center",
               alignItems: "center",
            }}
         >
         {Websites.map((website) => {
        return (
         <Button
               onPress={() => {
                  this.props.navigation.navigate("WebViewScreen", {
                     url: website.url
                  })
               }}
               title={website.buttonTitle}
            />
        );
      })}
         </SafeAreaView>
      )
   }
}