import React, {Component} from 'react'
import {View, Text, Switch} from 'react-native'


const Styles = {
    container : {
        paddingTop: 5, 
        paddingBottom: 5, 
        paddingLeft: 15,
        paddingRight: 10,
        borderRadius: 30,
        backgroundColor : "#A05548", 
        flexDirection: 'row'
    }
}

export default function ActiveToggle({init, action}){
    return(
        <View style={Styles.container}>
            <Text style = {{marginTop: 3, marginRight: 3, color : "white"}}> Inactive </Text>
            <Switch 
                onValueChange={(value) => action(value)}
                value = {init}
                thumbTintColor="white"
                onTintColor="#009688" /> 
        </View>
    )
}