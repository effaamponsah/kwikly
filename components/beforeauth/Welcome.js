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
                <Text style={styles.hello}>kwikly</Text>
              ) : null}
            </View>
          </View>
        
          <View style={{ height: 120, backgroundColor: "white", }}>

            <View style={styles.signUpbtn}>
              <TouchableOpacity onPress={() => this._onSignUpPress()}>
                <Text
                  style={{
                    color: "white"
                  }}
                >
                  Sign Up
              </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginbtn}>
              <TouchableOpacity onPress={() => this._onLoginPress()}>
                <Text style={{ color: "black" }}>Log In</Text>
              </TouchableOpacity>
            </View>


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
    backgroundColor: "#431019",
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 15,
    paddingBottom: 15,
    width: 180,
    marginTop: 10

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
    fontSize: 60,
    fontFamily: "Sans"
  }

  
});
