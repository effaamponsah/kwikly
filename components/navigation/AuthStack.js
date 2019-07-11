import {createStackNavigator} from 'react-navigation';
import Welcome from '../beforeauth/Welcome';
import Login from '../beforeauth/Login';
import SignUp from '../beforeauth/SignUp';
import ResetPassword from '../../app/screens/ResetPassword';


export default AuthStack = createStackNavigator({
    Welcome: Welcome,
    Login: Login,
    SignUp: SignUp,
    Reset: ResetPassword

})