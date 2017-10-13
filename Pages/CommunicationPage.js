import React from 'react'
import { Platform, StatusBar} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { ChatMenu, ContactScreen } from './'
import ChatPanel from './ChatPanel'
import { Header, SearchBar } from 'react-native-elements'

const Color = {
  old : {
    light : "#00BF9A",
    primary : "#00AA8D",
    dark : "#008975"
  }
  
}

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
            backgroundColor: "#7CB342"
          }
        }
    }),
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#7CB342"
      },
      headerTitle:
      <SearchBar
        containerStyle={{
          marginLeft: 10,
          marginRight: 10,
          marginTop : 10,
          marginBottom : 10,
          backgroundColor: "#7CB342",
          alignSelf: 'stretch',
        }}
        inputStyle={{ backgroundColor:"#AED581" , fontSize: 17 }}
        lightTheme
        round
        onChangeText={() => console.log("text changed")}
        placeholder='Search' />
    }
  },
  Chat: {
    path: 'chat/:id',
    screen: ChatPanel,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`,
      headerStyle: {
        backgroundColor: '#7CB342',
      },
      headerTitleStyle: {
        color : "white",
        fontWeight: "normal"
      },
      headerTintColor : "white"
    })
  },
},
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
  })


