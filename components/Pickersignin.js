import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { createStackNavigator } from 'react-navigation';
import { TextInput, Button } from "react-native-paper";

export default class Picker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "", // to store username
      usernameMessage: false, // username flag to error message
      userNameErrorMessage: "", //
      password: "", // to store password
      passwordMessage: false, // password flag to password message
      loading: false, // manage loader
    };
  }
  
  authentication = async () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({ loading: true });
    const { username, password } = this.state;
    let errorFlag = false;
    console.log(username);
    console.log(password);
    // input validation
    if (username) {
      if(username.match(mailformat)){
        errorFlag = true;
        this.setState({ usernameMessage: false });
      } else {
        errorFlag = false;
        this.setState({ usernameMessage: true, userNameErrorMessage: "Please enter correct email address"});
      }
    } else {
      errorFlag = false;
      this.setState({ usernameMessage: true, userNameErrorMessage: "Username is required" });
    }
    if (password) {
      errorFlag = true;
     // this.setState({passwordErrorMessage: "Password is required"})
      this.setState({ passwordMessage: false, passwordErrorMessage: "Password is required" });
      
    } else {
      errorFlag = false;
      this.setState({ passwordMessage: true });
    }
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.LoginLayout}>
            <View style={styles.inputLayout}>
              <TextInput
                label="Username"
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
              />
              {this.state.usernameMessage && (
                <Text style={styles.textDanger}>{this.state.userNameErrorMessage}</Text>
              )}
            </View>
            <View style={styles.inputLayout}>
              <TextInput
                label="Password"
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
              />
              {this.state.passwordMessage && (
                <Text style={styles.textDanger}>Password is required</Text>
              )}
            </View>
            <View style={styles.inputLayout}>
              <Button mode="contained" onPress={() => this.authentication()}>
                Sign In
              </Button>
            </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('signUpScreen')}>
            <Text style={styles.footertext}>Sign Up!</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  LoginLayout: {
    flex: 1,
    padding: 20,
  },
  LogoLayout: {
    alignItems: "center",
    padding: 20,
  },
  inputLayout: {
    paddingBottom: 20,
  },
  textDanger: {
    color: "#dc3545",
  },
  footertext: 
  { 
    color: "purple" ,
  textAlign:"center",
  padding:10
}
});
