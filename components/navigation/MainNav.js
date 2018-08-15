import { createStackNavigator } from "react-navigation";
import SignUp from "../beforeauth/SignUp";
import Login from "../beforeauth/Login";
import Welcome from "../beforeauth/Welcome";
import Home from "../afterauth/Home";

export default createStackNavigator({
  Welcome: Welcome,
  SignUp: SignUp,
  Login: Login,
  Home: Home
});
