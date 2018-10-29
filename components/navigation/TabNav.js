import { createBottomTabNavigator, createStackNavigator, } from "react-navigation";
import React from 'react';
import Explore from "../afterauth/Explore";
import Restaurants from "../afterauth/Restaurants";
import Cart from "../afterauth/Cart";
import Menu from "../afterauth/Menu";
import ResComp from "../afterauth/ResComp";
import { Icon } from "native-base";


export const RestaurantScreen = createStackNavigator({
  Restaurants: Restaurants,
  Menu: Menu
}
)


export default createBottomTabNavigator(
  {
    Explore: Explore,
    Restaurants: {
      screen: RestaurantScreen,
      icon: <Icon name='git-merge'/>
    },
    Cart: Cart
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: "red",
      showIcon: true,
      showLabel: true
    }
  }
);
