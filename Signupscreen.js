import React, { Component } from "react"

import { Button, SafeAreaView, StyleSheet ,TextInput,Image, TouchableOpacity} from "react-native";
import { View ,Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import COLORS from "./consts/color";
import styles from "./styles";
import STYLES from "./styles";

function Signupscreen(navigation){
    return(
<SafeAreaView style={styles.SUcont}>
<View>
 <View style={{flexDirection:'row',marginTop:40}}>
 <Text style={styles.textstyle1}> FOX   </Text>
<Text style= {styles.textstyle2}> HUB </Text>
 </View>
<View style={{marginTop:20}}> 
<View style={STYLES.inputContainer}>
      <TextInput placeholder="First Name" style={styles.input} />
                </View>
             </View>
             <View style={styles.inputContainer}>
                      <TextInput placeholder="Email" style={STYLES.input} />
                </View>
                <View style={STYLES.inputContainer}>
                      <TextInput 
                      placeholder="Password" 
                      style={STYLES.input} 
                      secureTextEntry
                      />
                </View>
                <View style ={STYLES.Button1}>
                <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:18}}>Sign Up</Text>
                </View>
       <View style={{
       marginVertical:20,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
    }}>
       <View style={STYLES.line}></View>
          <Text style={{fontWeight:'bold',marginHorizontal:5}} > OR   </Text>
          <View style={STYLES.line}></View>
       </View>
       <View style={{
       marginVertical:20,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
    }}>
          <View style={{flexDirection:'row',
          justifyContent: "space-between"}}>
 <View style={STYLES.Button2}><Text>Sign Up with </Text>
 </View>
 <View Style ={{width:10}} />
 <View style={STYLES.Button2}>
    <Text style={{fontWeight:'bold',fontSize:16} }>Sign Up with </Text>
 </View>
          </View>
       </View>
  <View 
  style = {{flexDirection:'row',
 alignItems:'flex-end',
 justifyContent:'center',
 marginTop:40,
 marginBottom:20,
 }}
  >
    <Text style={{color: COLORS.light,fontWeight:'bold'}}>Already have an account?  </Text>
    <TouchableOpacity onPress={() => navigation.goBack('Signup')}>
    <Text style= {{color:COLORS.pink,fontWeight:'bold'}}>Sign In!</Text>
    </TouchableOpacity>
    
  </View>
  </SafeAreaView>
    );
 }
 export default Signupscreen;

