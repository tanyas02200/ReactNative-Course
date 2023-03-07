import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput
} from "react-native";
import React from "react";
import styles from "./styles";

const Form = ({formData, isSignIn}) => {
  return (
    <>
    {
      formData.map((data) => {
        return (
          <>
            {data.isPassword? <TextInput
            style={styles.input}
            placeholder={data.placeholder}
            secureTextEntry
          /> : <TextInput style={styles.input} placeholder={data.placeholder} /> }
          {/* <Text style={{color: 'red'}}>Error</Text> */}
          </>
        );
      })
      
    }
    <TouchableOpacity style={styles.Button}>
          <Text>{isSignIn? <Text>Sign In</Text>: <Text>Sign Out</Text>}</Text>
        </TouchableOpacity>
    </>
  );
  
};

export default Form;
