import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Title,
  Button,
  Right,
  Badge
} from "native-base";

class Explore extends React.Component {
  static navigationOptions = {
    // header: null
    // title: 'Hello'
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  _onMenuPress = () => {
    this.props.navigation.toggleDrawer();
  };

  _onCartIconPress = () => {
    this.props.navigation.navigate("Cart");
  };
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#fff", height: 70, paddingTop: 15 }}>
          <Left>
            <Icon name="menu" onPress={this._onMenuPress} />
          </Left>

          <Body
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            {/* <Title>Hello</Title> */}
            {this.state.fontLoaded ? (
              <Title style={{ color: "#000" }}>Header</Title>
            ) : (
              <ActivityIndicator size="small" />
            )}
          </Body>

          <Right style={{ marginRight: 10 }}>
            <Icon name="basket" />
          </Right>
        </Header>

        <Content
          contentContainerStyle={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Text>Hello world</Text>
        </Content>
      </Container>
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
export default Explore;
