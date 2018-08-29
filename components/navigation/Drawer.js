import { createDrawerNavigator } from "react-navigation";
import Explore from "../afterauth/Explore";
import Restaurants from "../afterauth/Restaurants";
import Cart from "../afterauth/Cart";
import Dummy from "../afterauth/Cards";

export default createDrawerNavigator({
  Explore: Explore,
  Restaurants: Restaurants,
  Cart: Cart,
  Dummy: Dummy
});
