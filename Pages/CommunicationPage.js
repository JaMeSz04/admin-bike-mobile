import React from 'react'
import { Platform, StatusBar,Text} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { ChatMenu, ContactScreen } from './'
import ChatPanel from './ChatPanel'
import Profile from './Profile'
import { Header, SearchBar } from 'react-native-elements'
import { ProfileHeader } from '../Components'

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
            backgroundColor: "#009688"
          }
        }
    }),
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#009688",
        shadowColor: 'transparent'
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
        placeholder='Search' />
    }
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
      headerTintColor : "white"
    })
  },
  Profile : {
    path : 'Profile/:id',
    screen : Profile,
    navigationOptions: ({navigation}) => ({
      header : null
    })
  },
},
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
  })


