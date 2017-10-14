import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { HomeScreen, ChatPanel, Profile, HistoryPage} from '../Pages'
import {CommunicationRoute} from './'
import { Icon, SearchBar } from 'react-native-elements'
import {View, Text,Platform, StatusBar} from 'react-native'




const Routes = StackNavigator({
  
  Main : {
    screen :TabNavigator({
      Map: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon color={tintColor} name='place'/>
          ),
          header : null
        }
      },
      History: {
        screen: HistoryPage,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
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
      Communication: {
        screen: CommunicationRoute,
        navigationOptions: {
          headerStyle: {
            backgroundColor: "#009688",
            shadowColor: 'transparent',
            elevation: 0
          },
          headerTitle:
          <SearchBar
            containerStyle={{
              marginLeft: 10,
              marginRight: 10,
              marginTop : 10,
              marginBottom : 10,
              backgroundColor: "#009688",
              alignSelf: 'stretch',
              
            }}
            inputStyle={{ backgroundColor:"#26A69A" , fontSize: 17}}
            icon = {{color: '#BDBDBD', name : 'search'}}
            placeholderTextColor = '#BDBDBD'
            lightTheme
            round
            onChangeText={() => console.log("text changed")}
            placeholder='Search' />,
          tabBarIcon: ({ tintColor }) => (
            <Icon color={tintColor} name='question-answer'/>
          ),
          
        }
      },
      
    }, {
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      lazy: true,
      tabBarOptions: {
        showIcon : true,
        showLabel : false,
        style: {
          backgroundColor: "#009688"
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
  }
  
  
},{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
}
});

export default Routes
