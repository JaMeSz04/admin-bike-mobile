import React from 'react'
import { Platform, StatusBar} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { ChatMenu, ContactScreen } from './'
import ChatPanel from './ChatPanel'
import { Header, SearchBar } from 'react-native-elements'



export default CommunicationPage = StackNavigator({
  
  MyTab: {
    screen: TabNavigator({
      Conversations: {
        screen: ChatMenu,
      },
      Contacts: {
        screen: ContactScreen,
      },
      
    }, {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
          style: {
            backgroundColor: '#00AA8D',
          }
        }
    }),
    navigationOptions: {

      headerStyle: {
        backgroundColor: '#00AA8D'
      },
      headerTitle:
      <SearchBar
        containerStyle={{
          marginLeft: 10,
          marginRight: 10,
          marginTop : 10,
          marginBottom : 10,
          backgroundColor: "#00AA8D",
          alignSelf: 'stretch',
        }}
        inputStyle={{ backgroundColor: "#00BF9A", fontSize: 17 }}
        lightTheme
        round
        onChangeText={() => console.log("text changed")}
        placeholder='Search' />
    }
  },
  Chat: {
    path: 'chat/:id',
    screen: ChatPanel
  },
},
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
  })


