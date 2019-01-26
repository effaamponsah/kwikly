import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";
import { Icon } from "native-base";

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Log In",

      headerStyle: {
        // backgroundColor: "#045f99",
        shadowColor: "#fff"
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  _onFbPress = () => {
    console.log("Facebook Button");
  };

  _onLoginPress = (email, pass) => {
    console.log("Login Btn Pressed");
    if (this.state.email == "" || this.state.pass == "") {
      Alert.alert("Error", "Please all fields are required");
    } else {
      console.log("Email ooo", email);
      console.log("Password ooo", pass);
      this.props.navigation.navigate("Home");
    }
  };

  c;
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} barStyle="dark-content" />

        {/* Facebook Button */}
        <TouchableOpacity onPress={this._onFbPress}>
          <View style={styles.fbbtn}>
            <View style={{ flexDirection: "row" }}>
              {/* <Icon name="logo-facebook" style={{ color: "#0d00b9" }} /> */}
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                facebook
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 6 }}
        >
          <Text>OR</Text>
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
            onChangeText={pass => this.setState({ pass })}
          />
        </View>

        {/* Login  Btn*/}
        <TouchableOpacity
          onPress={() => this._onLoginPress(this.state.email, this.state.pass)}
        >
          <View style={styles.fbbtn}>
            <View style={{ flexDirection: "row" }}>
              {/* <Icon name="logo-facebook" style={{ color: "#0d00b9" }} /> */}
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                Log In
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <Text style={{ fontSize: 15 }}>Forgot your password?</Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Text
            style={{
              color: "#027e54",
              fontSize: 15
            }}
          >
            Reset here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  inputbox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 8,
    marginTop: 10
  },
  formPlace: {
    fontSize: 16,
    paddingHorizontal: 10
  },
  fbbtn: {
    marginTop: 10,
    marginBottom: 5,
    padding: 12,
    backgroundColor: "#0d00b9",
    alignItems: "center",
    borderRadius: 5
  }
});

export default Login;
