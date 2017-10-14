import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {List, ListItem} from 'react-native-elements'


const historyListMock = [
    {
        name : "Bike 1"
    },
    {
        name : "Bike 2"
    }
]

export default class HistoryPage extends Component {
    render(){
        return(
            <View style = {{flex : 1}}>
                <List containerStyle={{marginTop:0, marginBottom: 20}}>
                {
                    historyListMock.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.name}
                    />
                    ))
                }
                </List>
            </View>
        )
    }
}