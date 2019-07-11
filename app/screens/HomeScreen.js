import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is the home </Text>
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
