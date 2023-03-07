import {
    Text,
    View
  } from "react-native";
  import React from "react";
  import styles from "./headerStyles";
  
  export default Header = () => {
    return (
          <View style={styles.headerbody}>
            <Text style={styles.header1text}> PIK </Text>
            <Text style={styles.header2text}> Up </Text>
          </View>
    );
  };
  