import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import React from "react";
import Explore from "../afterauth/Explore";
import { Icon } from "native-base";
import { colors } from "../../utils/constants";
import { RestaurantScreen } from "./RestaurantStack";
import { CartStack } from "./CartStack";
import HomeScreen from "../../app/screens/HomeScreen";
import { HomeStack } from "./HomeStack";

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{ color: tintColor }} />
        )
      })
    },
    Restaurants: {
      screen: RestaurantScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" style={{ color: tintColor }} />
        )
      })
    },
    Basket: {
      screen: CartStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="basket" style={{ color: tintColor }} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.red,
      inactiveTintColor: colors.grey
    }
  }
);
