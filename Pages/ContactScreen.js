import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ContactScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Contacts',
    }
    render(){
        return(
            <View>
                <Text> Contact Screen </Text>
            </View>
        )
    }
}