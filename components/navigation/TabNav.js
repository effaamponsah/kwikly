import { createBottomTabNavigator } from "react-navigation";

import Explore from "../afterauth/Explore";
import Restaurants from "../afterauth/Restaurants";
import Cart from "../afterauth/Cart";

export default createBottomTabNavigator(
  {
    Explore: Explore,
    Restaurants: Restaurants,
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
