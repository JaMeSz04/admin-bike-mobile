import React, {Component} from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { CardChat } from '../Components'
import {UserAdapter} from "../Adapter/index"
import { observer } from 'mobx-react'


@observer
export default class ChatMenu extends Component {

    static navigationOptions = {

        headerStyle: {
            backgroundColor: "#009688",
            shadowColor: 'transparent',
        },
        headerTitle: "Chats",
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: null,
        tabBarLabel: ({focus, tintColor}) => (
            <Icon color={tintColor} name='question-answer'/>
        ),
    }

    render(){
        const { chatRooms, getRooms, loading } = this.props.messengerStore
        const Cards = chatRooms.map( room => (
            <CardChat action = {() => this.props.navigation.navigate("Chat", UserAdapter(room.user)) }/>
        ))
        return(
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={() => getRooms()}
                    />
                }
            >
                {Cards}
            </ScrollView>
        )
    }
}