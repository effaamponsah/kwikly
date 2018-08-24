import { createStackNavigator } from "react-navigation";
import SignUp from "../beforeauth/SignUp";
import Login from "../beforeauth/Login";
import Welcome from "../beforeauth/Welcome";
import Home from "../afterauth/Home";
import Cart from "../afterauth/Cart";
import Explore from "../afterauth/Explore";
import Restaurants from "../afterauth/Restaurants";

export default createStackNavigator({
  Welcome: Welcome,
  SignUp: SignUp,
  Login: Login,
  Home: Home,
  Cart: Cart,
  Explore: Explore,
  Restaurants: Restaurants
});
