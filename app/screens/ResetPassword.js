import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default class ResetPassword extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Reset Password",

      headerStyle: {
        // backgroundColor: "#045f99",
        shadowColor: "#fff"
      }
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  _reset(x) {
    if (x == "") {
      console.log("Enter your email");
    } else {
      console.log("Done");
    }
  }

  render() {
    const { email } = this.state;
    return (
      <View style={styles.container}>
        {/* <Text> This is the reset password scrren </Text> */}
        {/* Email Field */}
        <Text />
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
        <TouchableOpacity onPress={() => this._reset(email)}>
          <View style={styles.fbbtn}>
            <View style={{ flexDirection: "row" }}>
              {/* <Icon name="logo-facebook" style={{ color: "#0d00b9" }} /> */}
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                Reset my mail
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
  },
  inputbox: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
    marginBottom: 5
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
