import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Button,TextInput,Image} from 'react-native';
import React from "react";
import styles from './styles';
import  Icon  from "react-native-vector-icons/MaterialIcons";
import COLORS from './COLORS';

export default function App() {
    return (
      <SafeAreaView style={{paddingHorizontal:20,
        flex:1,
      }}>
    <View style={styles.Viewstyle1}>
     <Text style={styles.textstyle1}> PIK  </Text>
     <Text style= {styles.textstyle2}> Up </Text>
    </View>
                   <View style={styles.rcorners2}>
                  <TextInput placeholder="Email" 
                  style={styles.input}
                    />
                 </View>
    <View style={styles.rcorners2}>
           <TextInput 
             placeholder="Password" 
              style={styles.input} 
                       secureTextEntry
                       />
                 </View>
                 <View style ={styles.Button1}>
                 <Text style={styles.Button1style} 
                 >Sign In</Text> 
                </View>
                <View style={styles.ForgetP}>
                  <Text style= {styles.ForgetT}>
                    Forgot Password?
                  </Text>
                </View>
                <View style={styles.Orbutton}>
        <View style={styles.line}></View>
           <Text style={styles.Ortext} > OR   </Text>
           <View style={styles.line}></View>
        </View>
        <View style={styles.Orbox}>
    <View style={{flexDirection:'row',  justifyContent: "space-between"}}>
  <View style={styles.Button2}>
    <Text style={{color:COLORS.secondary}}>GOOGLE</Text>
  </View>
  <View Style ={{width:10}} />
  <View style={styles.Button2}>
     <Text style= {{color:COLORS.secondary}} > FACEBOOK</Text>
  </View>
  </View>
        </View>
    </SafeAreaView>
  
    );
  }
  