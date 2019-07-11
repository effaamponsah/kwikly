import { createStackNavigator } from "react-navigation";
import Restaurants from "../afterauth/Restaurants";
import Menu from "../afterauth/Menu";

export const RestaurantScreen = createStackNavigator({
  Restaurants: Restaurants,
  Menu: Menu
});
