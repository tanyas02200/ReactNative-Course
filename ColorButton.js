import React,{ useState, UseState } from "react";
import {
  View,
    Text,
    TouchableHighlight,
    StyleSheet
  }     from "react-native";

export default function ColorButton({backgroundColor, onPress = f => f}){
return(
<TouchableHighlight style ={styles.button}  
      onPress={() => onPress(backgroundColor)}
        underlayColor ="orange"
        >
        <View style={styles.row}>
        <View style = {[styles.sample,{backgroundColor}]} />
        <Text style ={[styles.text,styles.selectedText]}>{backgroundColor} </Text>
        {/* <Text style ={styles.text}> {backgroundColor}</Text>  */}
        {/* <Text style ={styles.text,styles.selectedText2}>white</Text> */}
        </View>
        </TouchableHighlight>
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
  
  