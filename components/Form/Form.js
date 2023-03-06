import React from "react";
import { TextInput,View } from "react-native-gesture-handler";
import styles from "/Users/tanyaasharma/DesignProj/components/Form/styles.js"

export default Form = ({ formData }) => {
  return
    {
  formData.map((data) => {
    if (data.isPassword) {
    return <TextInput style= {styles.input} placeholder={data.placeholder} secureTextEntry /> 
}
else{
    return <TextInput style ={styles.input} placeholder={data.placeholder} />;
}
  })
}
};
