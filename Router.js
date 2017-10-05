import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './Pages'

const Routes = StackNavigator({
  Home: { screen: HomeScreen }
});

export default Routes
