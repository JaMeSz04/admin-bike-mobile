import React, {Component} from 'react'
import {View, Text, Switch} from 'react-native'


export default function ActiveToggle({init, action}){
    return(
        <View>
            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style = {{marginRight: 3, color : "white"}}> Inactive </Text>
            </View>
            <Switch 
                onValueChange={(value) => action(value)}
                value = {init}
                thumbTintColor="white"
                onTintColor="#009688" />
        </View>
    )
}