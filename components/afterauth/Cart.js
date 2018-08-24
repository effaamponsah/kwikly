import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is the final and order menu </Text>
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