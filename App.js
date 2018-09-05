import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Welcome from "./components/beforeauth/Welcome";
import MainNav from "./components/navigation/MainNav";
import SignUp from "./components/beforeauth/SignUp";
import ResCard from "./components/afterauth/ResCards";

export default class App extends React.Component {
  render() {
    return <MainNav />;
    // <Dummy />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
