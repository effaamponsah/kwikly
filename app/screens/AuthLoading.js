import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { colors } from "../../utils/constants";
//do two things here

//fetch whether the user is logged in from their side.
//if the user is logged in and has a token here, maintain the token
//else take away the token and log the person out

// user is logged in from the server and there is a token, navigate to the Account page else navigate to the auth page

export default class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "HomeStack" : "AuthStack");
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
