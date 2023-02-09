import React from "react"
import { ActivityIndicator } from "react-native"
import { WebView } from "react-native-webview"

export default WebViewScreen = () => {
   return (
      <WebView
         source={{
            uri: "https://youtube.com",
         }}
         startInLoadingState={true}
         renderLoading={() => <ActivityIndicator size="large" />}
         scalesPageToFit
         style={{
            flex: 1,
            width: "100%",
            height: "100%",
         }}
      />
   )
}
