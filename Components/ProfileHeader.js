import React, {Component} from 'react'
import {View,Text} from 'react-native'


export default class ProfileHeader extends Component {
    render(){
        return(
            <View style = {{flexDirection: "row", justifyContent: 'space-between'}}>
                <Text> Hello world from ShubU</Text>
            </View>
        )
    }
}