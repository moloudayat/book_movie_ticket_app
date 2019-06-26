import { createStackNavigator, createAppContainer } from "react-navigation";
import route from './routeIndex'

const AppNavigator = createStackNavigator(route);

export default createAppContainer(AppNavigator);