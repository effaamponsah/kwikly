import { createDrawerNavigator } from "react-navigation";
import Explore from "../afterauth/Explore";
import Restaurants from "../afterauth/Restaurants";

export default createDrawerNavigator({
  Explore: Explore,
  Restaurants: Restaurants
});
