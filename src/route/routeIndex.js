import Splash from '../screens/Splash';
import SignUp from '../screens/User/SignUp';
import SignIn from '../screens/User/SignIn';
import MainTab from './mainTab';


const navigationOptions = {
    header: null,
};

const routeIndex = {
    Splash: { screen: Splash, navigationOptions },
    SignUp: { screen: SignUp, navigationOptions },
    SignIn: { screen: SignIn, navigationOptions },
    MainTab: { screen: MainTab, navigationOptions },
}
export default routeIndex;