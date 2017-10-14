import React from 'react'
import { TabNavigator } from 'react-navigation'
import { ChatMenu, ContactScreen } from '../Pages'
import { Header, SearchBar, Icon } from 'react-native-elements'

const Color = {
  old : {
    light : "#00BF9A",
    primary : "#00AA8D",
    dark : "#008975"
  }
  
}

const CommunicationTab = TabNavigator({
  Conversations: {
    path: "conversations",
    screen: ChatMenu,
    
  },
  Contacts: {
    path: "contact",
    screen: ContactScreen,
    
  },
  
}, {
    tabBarPosition: 'top',
    animationEnabled : true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: "#009688"
      }
    }
})

export default CommunicationRoute = CommunicationTab


