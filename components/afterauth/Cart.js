import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Icon, Badge } from "native-base";

export default class Cart extends React.Component {
  _onCheckoutPress = () => {
    this.props.navigation.navigate("Explore");
  };
  static navigationOptions = {
    title: "Cart",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="basket" style={{ color: tintColor }} />
    )
  };
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Props", this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is the final and order menu </Text>
        <Text>This is the number of items in the cart {this.props.items}</Text>
        <Button 
          title='Checkout'
          onPress={this._onCheckoutPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});
