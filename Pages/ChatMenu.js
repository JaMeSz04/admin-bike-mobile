import React, {Component} from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { CardChat } from '../Components'



/*
    List object schema
    [
        {
            id : int,
            name : String,
            avatar_url : String,
            subtitle : String
        }
    ]

*/



const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]

export default class ChatMenu extends Component {

    static navigationOptions = {
        tabBarLabel: 'Conversations'
    }
    constructor(props){
        super(props)
        this.state = {
            refreshing : false
        }
    }
    render(){
        return(
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={() => this.setState({refreshing : true})}
                    />
                }

            >
                <CardChat/>
                <CardChat/>
                <CardChat/>
            </ScrollView>
        )
    }
}