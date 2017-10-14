import React from 'react'
import { TabNavigator } from 'react-navigation';
import { CommunicationPage, HomeScreen } from './Pages'
import { Icon } from 'react-native-elements'

const Routes = TabNavigator({
  Communication: {
    screen: CommunicationPage,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} name='feedback'/>
      ),
      
    }
  },
  Map: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} name='place'/>
      ),
      
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  
  tabBarOptions: {
    showIcon : true,
    showLabel : false,
    style: {
      backgroundColor: "#009688"
    },
    pressOpacity: 0
  },
  
});

export default Routes
