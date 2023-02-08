import React from "react";
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
    StyleSheet
  }     from "react-native";
const {height,width} =Dimensions.get("window");
export default function App(){
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  };
  return (
    <>
    <View style ={styles.page2}>
    
        <Button title="click me" onPress={onButtonPress} />
        <ActivityIndicator size="large" color ="blue" />
    </View>
    <View style ={styles.page}>
   {Platform.OS === "ios" && <ProgressViewIOS progress ={0.1} />} 
   {Platform.OS === "android" && 
   <ProgressBarAndroid 
   styleAttr="Horizontal"
   indeterminate ={false}
   color = "blue"
   progress={0.5} />}
        <Text style ={[styles.text,styles.selectedText]}>height:{height}</Text>
        <Text style ={styles.text}>width:{width}</Text> 
        <Text style ={styles.text}>OS: {Platform.OS}</Text>
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  page :{
    flex:1,
    flexDirection: "row",
    // justifyContent:"center",
    marginTop: 50,
    backgroundColor:"#DDD"
  },
  page2: {
    marginTop:50
  },
  text:{
    fontSize:20,
    color:"red",
    backgroundColor:"yellow",
    margin:10,
    padding:5
  },
  selectedText:{
    backgroundColor:"red",
    color:"yellow"
  }
});

