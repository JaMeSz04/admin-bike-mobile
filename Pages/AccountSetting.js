import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'


export default class AccountSetting extends Component {
    render(){
        return(
            <View>
                <Button backgroundColor =  "#009688" title='Logout' />
            </View>
        )
    }
}