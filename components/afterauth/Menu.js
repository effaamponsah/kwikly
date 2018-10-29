import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Menu extends React.Component {
    static navigationOptions = {
        //header: null
    }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> This is the Menu page </Text>
      </View>
    );
  }
}
