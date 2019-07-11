import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from "native-base";
import { colors } from "../../utils/constants";
const cards = [
  {
    text: "Tasty Chef",
    name: "Salad",
    image: require("../../assets/images/f1.png")
  },
  {
    text: "McCoy",
    name: "Pizza",
    image: require("../../assets/images/f2.png")
  },

  {
    text: "Kappochino",
    name: "Pizza",
    image: require("../../assets/images/f3.png")
  },
  {
    text: "KFC",
    name: "Chicken and Potato Chips",
    image: require("../../assets/images/f4.png")
  }
];
export default class Explore extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 15 }}
        onPress={() => console.log("I am here")}
      >
        <Icon name="person" style={{ color: colors.grey }} />
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card
                style={{
                  elevation: 3,
                  height: 500
                }}
              >
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.text}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      height: 350,
                      flex: 1
                    }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  <TouchableOpacity
                    style={{ flexDirection: "row", flex: 1 }}
                    onPress={console.log("order pressed")}
                  >
                    <Icon
                      name="cart"
                      style={{
                        color: "#ED4A6A"
                      }}
                    />
                    <Text>Order</Text>
                  </TouchableOpacity>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
