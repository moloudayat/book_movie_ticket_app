import Splash from '../screens/Splash';
import SignUp from '../screens/User/SignUp';

const navigationOptions = {
    header: null,
};

const routeIndex = {
    Splash: { screen: Splash, navigationOptions },
    SignUp: { screen: SignUp, navigationOptions },
}
export default routeIndex;