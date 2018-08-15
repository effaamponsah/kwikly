import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from "react-native";

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
  _onSignUpPress() {
    this.props.navigation.navigate("SignUp");
    console.log("Navigation to Sign Up Successful");
  }
  _onLoginPress() {
    this.props.navigation.navigate("Login");
    console.log("Navigation to Login Successful");
  }

  render() {
    return (
      // <Text style={{color: 'red'}}> This is it </Text>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/images/welcome.jpg")}
          style={{ flex: 1 }}
        >
          <StatusBar hidden={true} />
          <View style={styles.container}>
            <View style={{ marginBottom: 40, marginTop: 40 }}>
              <Text style={styles.hello}>Hello</Text>
            </View>

            <View
              style={{
                marginTop: 30
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>WELCOME!</Text>
            </View>

            <View style={{ marginLeft: 45, marginRight: 45 }}>
              <Text style={styles.introtxt}>
                We are a Creative agency which wishes to change the world by
                automating simple tasks.
              </Text>
            </View>
          </View>

          <View style={styles.signUpbtn}>
            <TouchableOpacity onPress={() => this._onSignUpPress()}>
              <Text
                style={{
                  color: "#000"
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginbtn}>
            <TouchableOpacity onPress={() => this._onLoginPress()}>
              <Text style={{ color: "white" }}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  signUpbtn: {
    //   marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 4,
    backgroundColor: "#fff",
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 15,
    paddingBottom: 15,
    width: 180
  },
  loginbtn: {
    marginTop: 30,
    marginBottom: 50,
    alignSelf: "center"
  },
  introtxt: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: 20
  },
  hello: {
    color: "white",
    fontSize: 55,
    fontWeight: "bold"
    // fontFamily: 'sourceSans',
  }
});
