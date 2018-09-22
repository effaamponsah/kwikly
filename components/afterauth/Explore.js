import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  StatusBar
} from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Badge
} from "native-base";

class Explore extends React.Component {
  static navigationOptions = {
    // header: null
    title: "Explore",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" style={{ color: tintColor }} />
    ),
    headerLeft: null
  };

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      items: 0
    };
  }

  _onMenuPress = () => {
    this.props.navigation.toggleDrawer();
    console.log("Drawer btn pressed");
  };

  _onCartIconPress = () => {
    this.props.navigation.navigate("Cart");
    // this.props.navigation.navigate("Cart");
    console.log("Cart btn pressed");
  };

  _addItem = () => {
    this.setState({
      items: this.state.items + 1
    });
  };

  dummy = () => {
    this.props.navigation.navigate("Dummy");
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
      // <Container>
      //   <Header style={{ backgroundColor: "#fff", height: 70, paddingTop: 15 }}>
      //     <Left>
      //       <Icon name="menu" onPress={this._onMenuPress} />
      //     </Left>

      //     <Body
      //       style={{
      //         flex: 1,
      //         alignItems: "center",
      //         justifyContent: "center",
      //         alignContent: "center"
      //       }}
      //     >
      //       {/* <Title>Hello</Title> */}
      //       {this.state.fontLoaded ? (
      //         <Title style={{ color: "#000" }}>Header</Title>
      //       ) : (
      //         <ActivityIndicator size="small" />
      //       )}
      //     </Body>

      //     <Right style={{ marginRight: 10 }}>
      //       {this.state.items ? (
      //         <Badge>
      //           <Text>{this.state.items}</Text>
      //         </Badge>
      //       ) : null}

      //       <Icon name="basket" onPress={this._onCartIconPress} />
      //     </Right>
      //   </Header>

      //   <Content
      //     contentContainerStyle={{
      //       alignItems: "center",
      //       flex: 1,
      //       justifyContent: "center"
      //     }}
      //   >
      //     <StatusBar barStyle="dark-content" />
      //     <Text>Hello world</Text>
      //     <Button title="add items" onPress={this._addItem} />
      //     <Button title="Dummy" onPress={this.dummy} />
      //   </Content>
      // </Container>
      <View style={styles.container}>
        <Text>Explore Foods</Text>
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
export default Explore;
