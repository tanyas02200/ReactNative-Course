// Home screen for the app

import React, { Component } from "react"

import { Button, SafeAreaView } from "react-native"

import { WebView } from "react-native-webview"

export default class Home extends Component {
   constructor(props) {
      super(props)
      this.state = {
         renderWebView: false,
      }
   }

   render() {
      return (
         <SafeAreaView
            style={{
               flex: 1,
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Button
               onPress={() => {
                  this.setState({ renderWebView: !this.state.renderWebView })
                  this.props.navigation.navigate("WebViewScreen")
               }}
               title={"Show WebView"}
            />
         </SafeAreaView>
      )
   }
}
