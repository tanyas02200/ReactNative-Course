// Home screen for the app

import React, { Component } from "react"

import { Button, SafeAreaView } from "react-native"

export default class Home extends Component {
   constructor(props) {
      super(props)
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
                  this.props.navigation.navigate("WebViewScreen")
               }}
               title={"Show WebView"}
            />
         </SafeAreaView>
      )
   }
}
