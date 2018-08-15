import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

class SignUp extends Component {
  static navigationOptions = {
    title: "Email Sign Up"
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  _onSigUpPress = () => {
    console.log("Sign Up Successfull");
  };

  _logInNav = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false} />

        <View style={styles.inputbox}>
          <TextInput
            style={styles.formPlace}
            placeholder="Name"
            placeholderTextColor="#cccccc"
            returnKeyType="next"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
          />
        </View>

        {/* Email Field */}
        <View style={styles.inputbox}>
          <TextInput
            style={styles.formPlace}
            placeholder="Enter your email"
            placeholderTextColor="#cccccc"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputbox}>
          <TextInput
            style={styles.formPlace}
            placeholder="Password"
            placeholderTextColor="#cccccc"
            secureTextEntry={true}
            returnKeyType="go"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity onPress={this._onSigUpPress}>
          <View style={styles.subtn}>
            <View style={{ flexDirection: "row" }}>
              {/* <Icon name="logo-facebook" style={{ color: "#0d00b9" }} /> */}
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                Sign Up
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.views}>
          <Text style={{ textAlign: "center" }}>
            By signing up, you agree to the terms of use and have read our
            privacy policy
          </Text>
        </View>

        <View style={styles.views}>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={this._logInNav}>
            <Text style={{ color: "#027e54", marginTop: 9 }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
    // justifyContent: "center",
    // alignItems: "center"
    // backgroundColor: "#fff"
  },
  inputbox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 8,
    marginTop: 10
    // borderWidth: 0.9,
    // borderColor: "#000"
  },
  formPlace: {
    fontSize: 16,
    paddingHorizontal: 10
  },
  subtn: {
    marginTop: 15,
    marginBottom: 5,
    padding: 12,
    backgroundColor: "#027e54",
    alignItems: "center",
    borderRadius: 5
  },
  views: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10
  }
});
export default SignUp;
