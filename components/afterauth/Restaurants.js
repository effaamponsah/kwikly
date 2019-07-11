import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, Left, Thumbnail, Body, Icon } from "native-base";
import { ResCard } from "./ResCards";
import Home from "./Home";
import Cards from "./Cards";

class Restaurants extends React.Component {
  static navigationOptions = {
    title: "Restaurants",
  };

  constructor(props) {
    super(props);
    this.state = {
      content: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
  }

  render() {
    return (
      <ScrollView style={{ marginLeft: 8, marginRight: 4 }}>
        {this.state.content.map(items => (
          <TouchableOpacity
            key={items.id}
            onPress={() => this.props.navigation.navigate("Menu")}
          >
            <Cards
              key={items.id}
              imageSource={items.id}
              resName={items.id}
              loc={items.id}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
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

export default Restaurants;
