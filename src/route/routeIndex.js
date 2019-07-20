import Splash from '../screens/Splash';
import SignUp from '../screens/User/SignUp';
import SignIn from '../screens/User/SignIn';
import MovieDetails from '../screens/Movie/Details';
import MainTab from './mainTab';


const navigationOptions = {
    header: null,
};

const routeIndex = {
    Splash: { screen: Splash, navigationOptions },
    SignUp: { screen: SignUp, navigationOptions },
    SignIn: { screen: SignIn, navigationOptions },
    MainTab: { screen: MainTab, navigationOptions },
    MovieDetails: { screen: MovieDetails}
}
export default routeIndex;