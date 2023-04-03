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
import { useNavigation } from "@react-navigation/native";
import { bindActionCreators } from 'redux';
import { TextInput, Button } from "react-native-paper";
import { connect } from 'react-redux';

class Picksignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", // to store username
      usernameMessage: false, // username flag to error message
      password: "", // to store password
      passwordMessage: false, // password flag to password message
      loading: false, // manage loader
      name: "",
      nameMessage:false,
    };
  }
  /**
   * authenticate user
   */

  
  authentication = async () => {
    this.setState({ loading: true });
    const {name, username, password } = this.state;
    let errorFlag = false;
    console.log(name);
    console.log(username);
    console.log(password);
    // input validation
    if (name) {
        errorFlag = true;
        this.setState({ nameMessage: false });
      } else {
        errorFlag = false;
        this.setState({nameMessage: true });
      }
    if (username) {
      errorFlag = true;
      this.setState({ usernameMessage: false });
    } else {
      errorFlag = false;
      this.setState({ usernameMessage: true });
    }

    if (password) {
      errorFlag = true;
      this.setState({ passwordMessage: false });
    } else {
      errorFlag = false;
      this.setState({ passwordMessage: true });
    }
  };

  render() {
    let {auth, actions} = this.props;
    console.log(auth);
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.LoginLayout}>
          <View style={styles.inputLayout}>
              <TextInput
                label="Name"
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
              />
              {this.state.nameMessage && (
                <Text style={styles.textDanger}>{"name is required"}</Text>
              )}
            </View>
            <View style={styles.inputLayout}>
              <TextInput
                label="Username"
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
              />
              {this.state.usernameMessage && (
                <Text style={styles.textDanger}>{"username is required"}</Text>
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
                <Text style={styles.textDanger}>{"Password is required"}</Text>
              )}
            </View>
            <View style={styles.inputLayout}>
              <Button mode="contained" onPress={() => this.authentication()}>
                Sign Up
              </Button>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('signInScreen')}>
            <Text style={styles.footertext}>Already Have an Account?</Text>
          </TouchableOpacity>
            </View>
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
    // alignItems: "center",
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
  { color: "purple" ,
  textAlign: "center",
  padding:20
},
});

const ActionCreators = Object.assign(
  {}
);

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Picksignup);