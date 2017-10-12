import React from 'react'
import {Platform, StatusBar} from 'react-native'
import {StackNavigator, TabNavigator} from 'react-navigation'
import {ChatMenu, ContactScreen} from './'
import {Header, SearchBar} from 'react-native-elements'



export default CommunicationPage = StackNavigator({
  MyTab: {
    screen: TabNavigator({
        Home: {
          screen: ChatMenu,
        },
        Notifications: {
          screen: ContactScreen,
        },
      }, {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
          style: {
            backgroundColor: 'green',
          }
        }
      }),
      navigationOptions: { 

        headerStyle: {
          backgroundColor : 'green'
        },
        headerTitle: 
        <SearchBar
          containerStyle = {{
            marginLeft : 10,
            marginRight : 10,
            backgroundColor : "green", 
            alignSelf: 'stretch',
          }}
          inputStyle = {{ backgroundColor : "green", fontSize : 17}}
          lightTheme
          round
          onChangeText={() => console.log("text changed")}
          placeholder='Search' />
        }
  }
},
{
  cardStyle : {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})


