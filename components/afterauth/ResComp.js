import React, { Component } from "react";
import { View, Text } from "react-native";
import RestaurantScreen from "../navigation/TabNav";
import {Icon} from 'native-base';

export default class ResComp extends React.Component {
  static navigationOptions = {
    title: "Restaurants",
    //header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="restaurant" style={{ color: tintColor }} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <RestaurantScreen />;
  }
}
