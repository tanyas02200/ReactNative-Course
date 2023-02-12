import React from "react"
import { ActivityIndicator } from "react-native"
import { WebView } from "react-native-webview"

export default WebViewScreen = ({route}) => {
  
   return (
      <WebView
         source={{
            uri: route.params.url,
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
