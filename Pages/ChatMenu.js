import React, {Component} from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { CardChat } from '../Components'
import {UserAdapter} from "../Adapter/index"
import { observer } from 'mobx-react'


@observer
export default class ChatMenu extends Component {

    static navigationOptions = {
        tabBarLabel: 'Conversations'
    }

    render(){
        const { chatRooms, getRooms, loading } = this.props.store
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