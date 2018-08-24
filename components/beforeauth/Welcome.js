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
      fontLoaded: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Sans: require("../../assets/fonts/SourceSansPro-Bold.ttf"),
      Montserrat: require("../../assets/fonts/Montserrat-Medium.ttf"),
      Abril: require("../../assets/fonts/AbrilFatface-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
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
              {this.state.fontLoaded ? (
                <Text style={styles.hello}>Hello</Text>
              ) : null}
            </View>

            <View
              style={{
                marginTop: 30
              }}
            >
              {this.state.fontLoaded ? (
                <Text
                  style={{ color: "white", fontSize: 30, fontFamily: "Abril" }}
                >
                  Welcome!
                </Text>
              ) : null}
            </View>

            <View style={{ marginLeft: 45, marginRight: 45 }}>
              {this.state.fontLoaded ? (
                <Text style={styles.introtxt}>
                  We are a Creative agency which wishes to change the world by
                  automating simple tasks.
                </Text>
              ) : null}
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
    marginTop: 20,
    fontFamily: "Montserrat",
    lineHeight: 30
  },
  hello: {
    color: "white",
    fontSize: 70,
    fontFamily: "Sans"
  }
});
