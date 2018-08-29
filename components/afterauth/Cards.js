import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
  Icon
} from "native-base";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const images = {
      "1": require("../../assets/images/kfc2.jpg"),
      "2": require("../../assets/images/4.jpg"),
      "3": require("../../assets/images/kfc1.jpg")
    };

    const name = {
      "1": "KFC",
      "2": "Tasty Chef",
      "3": "Mc Coy"
    };

    const location = {
      "1": "Kwaprow",
      "2": "Cape Coast Stadium",
      "3": "Amamoma"
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={images[this.props.imageSource]} />
            <Body style={{ marginLeft: 30 }}>
              <Text style={{ fontWeight: "bold" }}>
                {name[this.props.resName]}
              </Text>
              <Text>{location[this.props.loc]}</Text>
              {/* <Text>25-30 mins Delivery</Text> */}
            </Body>
          </Left>
          <Right>
            {/* <Body> */}
            <View>
              <Text>Ratings will be here</Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginRight: 3 }}>Menu</Text>
                  <Icon name="ios-arrow-forward" />
                </View>
              </TouchableOpacity>
            </View>
            {/* </Body> */}
          </Right>
        </CardItem>
      </Card>
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
