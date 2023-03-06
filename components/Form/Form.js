import React from "react";
import { TextInput, View, Text } from "react-native-gesture-handler";
import styles1 from "./styles";

const Form = ({ formData }) => {
  return formData.map((data) => {
    if (data.isPassword) {
      return (
        <TextInput
          style={styles1.input}
          placeholder={data.placeholder}
          secureTextEntry
        />
      );
    } else {
      return <TextInput style={styles1.input} placeholder={data.placeholder} />;
    }
  });
};

export default Form;
