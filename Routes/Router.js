import React from 'react'
import { DrawerNavigator,TabNavigator, StackNavigator } from 'react-navigation';
import AccountSetting from '../Pages/AccountSetting'
import { HomeScreen, ChatPanel, MapSetting, Profile, HistoryPage, ContactScreen, ChatMenu} from '../Pages'
import {CommunicationRoute} from './'
import { Icon, SearchBar } from 'react-native-elements'
import {View, Text,Platform, StatusBar} from 'react-native'

const Routes = StackNavigator({
  Main : {
    screen :TabNavigator({
      Communication: {
        screen: ChatMenu,
        navigationOptions: {
          headerStyle: {
            backgroundColor: "#009688",
            shadowColor: 'transparent',
            
          },
          headerTitle: "Chats",
          headerTitleStyle : {
            color : 'white'
          },
          tabBarLabel: ({ focus,tintColor }) => (
            <Icon color={tintColor} name='question-answer'/>
          ),
          
        }
      },
      Users: {
        path: "Users",
        screen: ContactScreen,
        navigationOptions: {
          headerTitle: "Users",
          tabBarLabel: ({focus,tintColor}) => ( <Icon color={tintColor} name = 'contacts'/> ),
          headerStyle: {
            backgroundColor: "#009688"
          },
          headerTitleStyle: {
            color : "white"
          }
        }
      },
      
      
      Map: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: ({ focused }) => (
            <Icon containerStyle = {{marginTop: -5, marginBottom: -5}} reverse color={"#009688"} name='place'/>
          ),
          header : null
        }
      },
      History: {
        screen: HistoryPage,
        navigationOptions: {
          tabBarLabel: ({ focus, tintColor }) => (
            <Icon color={tintColor} name='event-note'/>
          ),
          title : "History",
          headerStyle: {
            backgroundColor: "#009688",
          },
          headerTitleStyle : {
            color : "white"
          }
        }
      },
      
      
      
      Settings: {
        screen: AccountSetting,
        navigationOptions: {
          headerTitle: "Settings",
          tabBarLabel: ({ focus, tintColor}) => ( <Icon color={tintColor} name = 'settings'/> ),
          headerStyle: {
            backgroundColor: "#009688"
          },
          headerTitleStyle: {
            color : "white"
          }
        }
      }
      
      
      
      
    }, 
    {
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      lazy: true,
      tabBarOptions: {
        activeTintColor : "#009688",
        inactiveTintColor : "#BDBDBD",
        showIcon : false,
        
        style: {
          backgroundColor: "white",
        },
        pressOpacity: 0
      }
    })
  },

  Chat: {
    path: 'chat/:id',
    screen: ChatPanel,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: '#009688',
      },
      headerTitleStyle: {
        color : "white",
        fontWeight: "normal"
      },
      headerTintColor : "white",
      headerRight : <Icon name='info-outline' color = '#E0E0E0' containerStyle = {{marginRight:20}} onPress = {() => {navigation.navigate('Profile', { name: navigation.state.params.name, id : '0', phone : "0847060344"}) }}/>
    })
  },
  Profile : {
    path : 'Profile/:id',
    screen : Profile,
    navigationOptions: ({navigation}) => ({
      header : null
    })
  },

  
  
},{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
}
});

export default Routes
