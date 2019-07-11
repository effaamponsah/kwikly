import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import SignUp from "../beforeauth/SignUp";
import Login from "../beforeauth/Login";
import Welcome from "../beforeauth/Welcome";
import Home from "../afterauth/Home";
import Cart from "../afterauth/Cart";
import Explore from "../afterauth/Explore";
import Restaurants from "../afterauth/Restaurants";
import Dummy from "../afterauth/Cards";
import Checkout from "../afterauth/Checkout";
import Cards from "../afterauth/Cards";
import ResetPassword from "../../app/screens/ResetPassword";
import AuthLoading from "../../app/screens/AuthLoading";
import TabNav from "./TabNav";

// export default createStackNavigator({
//   Welcome: {
//     screen: Welcome,
//   },
//   SignUp: SignUp,
//   Login: Login,
//   Reset: ResetPassword,
//   Home: {
//     screen: Home,
//   },
//   // Cart: Cart,
//   Explore: Explore,
//   Restaurants: Restaurants,
//   Dummy: Dummy,
//   Checkout: Checkout,
//   Cards: Cards
// });
const AuthStack = createStackNavigator({
  Welcome: Welcome,
  Login: Login,
  SignUp: SignUp,
  Reset: ResetPassword
})
export default createSwitchNavigator({
  AuthLoading: AuthLoading,
  AuthStack: AuthStack,
  HomeStack: TabNav
})
