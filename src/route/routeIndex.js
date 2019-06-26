import Splash from '../screens/Splash';
import SignUp from '../screens/User/SignUp';
import SignIn from '../screens/User/SignIn';
import CurrentMovie from '../screens/Movie/Current';

const navigationOptions = {
    header: null,
};

const routeIndex = {
    Splash: { screen: Splash, navigationOptions },
    SignUp: { screen: SignUp, navigationOptions },
    SignIn: { screen: SignIn, navigationOptions },
    CurrentMovie: { screen: CurrentMovie, navigationOptions },
}
export default routeIndex;