import React,{ useState, UseState } from "react";
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
import {
  View,
   ActivityIndicator,
   ProgressViewIOS,
    Button,
    Alert,
    Dimensions,
    Text,
    Platform,
    ProgressBarAndroid,
    StyleSheet,
    Image,
    TouchableHighlight,
  } from "react-native";
  import { WebView } from 'react-native-webview';


import favicon from "/Users/tanyaasharma/ReactNativecourse/assets/favicon.png"
const {height,width} =Dimensions.get("window");

export default function App(){

  const [backgroundColor, setBackgroundColor] = useState("blue");
  const [renderWebView, setRenderWebView] = useState(false);

  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };

  const renderWebViewComponent = () => {
    return (
      <WebView
        source = {{
          uri: 'https://youtube.com'
        }}
     scalesPageToFit
     style={{ flex: 1, width: "100%" , height: "100%" }}
      />
    );
  }

  return (
    // <View style={{marginTop: "100px"}}>
    //  <Button title="Open WebView" onPress={()=>setRenderWebView(!renderWebView)} />
    //      {renderWebView && renderWebViewComponent}
    <>
     <ColorForm />
    <View>
    <View style ={styles.page2}>
        <Button title="click me" onPress={onButtonPress} />
        <ActivityIndicator size="large" color ="blue" />
        <Image style ={ styles.image} source={favicon} />
        {Platform.OS === "ios" && <ProgressViewIOS progress ={0.5} />} 
        {Platform.OS === "android" && 
   <ProgressBarAndroid 
   styleAttr="Horizontal"
   indeterminate ={false}
   color = "blue"
   progress={0.5} />}
    </View>
    <View style = {[styles.page,{backgroundColor}]} >
    <ColorButton backgroundColor="red" onPress={setBackgroundColor} />
     <ColorButton backgroundColor="green" onPress={setBackgroundColor} />
    <ColorButton backgroundColor="blue" onPress={setBackgroundColor} />
     <ColorButton backgroundColor="yellow" onPress={setBackgroundColor} />
         </View>
         <Button title="Open WebView" onPress={()=>{
            if(renderWebView){
              setBackgroundColor("red");
            }else{
              setBackgroundColor("yellow");
            }
            setRenderWebView(!renderWebView)}
         } />
         {renderWebView && renderWebViewComponent()}
    </View> 
    </>
  );
}

const styles = StyleSheet.create({
  page :{
    // flex:1,
    flexDirection: "column",
   justifyContent:"flex-start",
   alignItems:"center",
    marginTop: 40,
    backgroundColor:"#DDD"
  },
  page2: {
    marginTop:40
  },
  text:{    
    fontSize:30,
    color:"red",
    textAlign: "center",
    backgroundColor:"rgba(255,255,255,0.8)",
    margin:10,
    padding:5,
    borderWidth : 2,
    borderRadius: 10
  },
  selectedText:{
    // alignSelf:"flex-end",
    backgroundColor:"red", 
    color:"yellow",
    textAlign: "center"
  },
  selectedText2:{
    // alignSelf:"flex-end",
    backgroundColor:"black", 
    color:"white",
    fontsize:30
  },
  image:{
    // flex:1,
    borderRadius:50 ,
    margin:10,
    width: 50
  },
  sample:{
    height:20,
    width:20,
    borderRadius: 10,
    backgroundColor:"White"
  },
  row:{
    flexDirection:"row",
    alignItems:"center"
  }
});

