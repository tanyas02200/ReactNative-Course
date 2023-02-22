// Signinscreen for the app

import { useLinkTo } from "@react-navigation/native";
import React, { Component } from "react"
import {useState} from "react"
import { Button, SafeAreaView, StyleSheet ,TextInput,Image, TouchableOpacity} from "react-native";
import { View ,Text} from "react-native";
import { ScrollView, State } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import COLORS from "./consts/color";
import STYLES from "./styles";

// export default class Signinscreen extends Component {
//    constructor(props) {
//       super(props)
//    }
//    render() {i
//       const Websites = [
//          {
//             buttonTitle: "Youtube",
//             url: "https://youtube.com"
//          },
//          {
//             buttonTitle: "Gmail",
//             url: "https://gmail.com"
//          },
//          {
//             buttonTitle: "Amazon",
//             url: "https://amazon.in"
//          },
//          {
//             buttonTitle: "Google",
//             url: "https://google.com"
//          }
//       ]
//       return (
//          <SafeAreaView
//             style={{
//                flex: 1,
//                justifyContent: "center",
//                alignItems: "center",
//             }}
//          >
//          {Websites.map((website) => {
//         return (
//          <Button
//                onPress={() => {
//                   this.props.navigation.navigate("WebViewScreen", {
//                      url: website.url
//                   })
//                }}
//                title={website.buttonTitle}
//             />
//         );
//       })}
//          </SafeAreaView>
//       )
//    }
// }

// function Signinscreen({navigation}){
   const Signinscreen =({navigation}) => {
   const[user,setUser]= useState({
      email:"",password:""});
   let name,value;
   const handlesubmit=(e)=>{
     console.log(user);
      // name=e.target.name;
      // value= e.target.value;

      // setUser({...user,[name]:value});
   }

   return(
      <SafeAreaView style={{paddingHorizontal:20,
      flex:1,
      backgroundColor:COLORS.white}}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row',marginTop:40}}>
               <Text style={{fontWeight:'bold',fontSize:22,color:COLORS.dark}}> FOX   </Text>
               <Text style= {{fontWeight:'bold',fontSize:22,color:COLORS.secondary}}> HUB </Text>
            </View>
            <View style ={{marginTop:70}}>
               <Text style={{fontSize:27,fontWeight:'bold',color:COLORS.dark}}>
                  Welcome!!
               </Text>
               <Text style={{fontSize:19,fontWeight:'bold',color:COLORS.light}}>
                  Sign In to continue!!
               </Text>
               </View>
               <View style={{marginTop:20}}> 
               <View style={STYLES.inputContainer}>
                  <Icon 
                  name ="mail-outline"
                   size = {20}
                    color={COLORS.light} 
                    style={STYLES.inputIcon}
                     />
                     <TextInput placeholder="Email" 
                     style={STYLES.input}
                     value={user.name}
                    onChangeText={val => setUser({...user,"email":val})}
                     />
               </View>
            </View>
            {/* <View style={{marginTop:20}} >  */}
               <View style={STYLES.inputContainer}>
                  <Icon 
                  name ="lock-outline"
                   size = {20}
                    color={COLORS.light} 
                    style={STYLES.inputIcon}
                    
                     />
                     <TextInput 
                     placeholder="Password" 
                     style={STYLES.input} 
                     value={user.name}
                     onChangeText={val => setUser({...user,"password":val})}
                     secureTextEntry
                     />
               </View>
               <View style ={STYLES.Button1}>
               <Text style={{color:COLORS.white,fontWeight:'bold',fontSize:18}} 
               onPress = {handlesubmit}>Sign In</Text>
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
<View style={STYLES.Button2}><Text>Sign in with </Text>
<Image style = {STYLES.btnimage}  source= {{uri:'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png'}} />
</View>
<View Style ={{width:10}} />
<View style={STYLES.Button2}>
   <Text style={{fontWeight:'bold',fontSize:16} }>Sign in with </Text>
<Image 
style={STYLES.btnimage} 
source= {{uri: 'https://play-lh.googleusercontent.com/RZ5luCUwc5QtJP9xDn-ZCwEutT160GVyoh5K1eu4YJ5fD7v4LP5ptVdgR9mz4Hnr7A'}} />
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
   <Text style={{color: COLORS.light,fontWeight:'bold'}}>Dont have an account?  </Text>
   <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
   <Text style= {{color:COLORS.pink,fontWeight:'bold'}}>Sign Up!</Text>
   </TouchableOpacity>
   
 </View>
         </ScrollView>
         </SafeAreaView>
   );
}
export default Signinscreen;