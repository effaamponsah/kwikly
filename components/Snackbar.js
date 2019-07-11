import React from "react";
import { Text, View, StyleSheet, Dimensions, Animated } from "react-native";
import { colors } from "../utils/constants";

const SCREEN = Dimensions.get("window");
this.opacity = new Animated.Value(0);

const animate = () => {
  Animated.timing();
};

const Snackbar = ({ params }) => (
  <Animated.View style={styles.container}>
    <Text style={{ color: colors.white }}>Internet error</Text>
  </Animated.View>
);

export default Snackbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    bottom: 0,
    backgroundColor: "black",
    padding: 20,
    marginBottom: SCREEN.height / 30,
    justifyContent: "center",
    // alignItems: 'center',
    alignSelf: "center",
    width: SCREEN.width - 30
  }
});
