import React, { Component } from 'react'
import { View, Text, Modal, Switch, } from 'react-native'
import { Icon, ListItem, List, Header} from 'react-native-elements'



export default function MapSetting({ active, action, toggleSwitch, onSwitchChange, selectedBike, onSelectedChange }) {
    const sw = <Switch style = {{right: 10}} onValueChange={(value) => onSwitchChange()} value={toggleSwitch} />
    
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={active}
            onRequestClose={() => { alert("Modal has been closed.") }}
        >
            <View style={{ marginTop: 22 }}>
                <View style = {{top: 10, flexDirection : "row", justifyContent : "center"}} >
                    <Icon onPress = {() => action()} name = "keyboard-arrow-up"/>
                    
                </View>
                <List>
                    <ListItem rightIcon = {sw} title = "Show inactive bike"/>
                    
                </List>
            </View>
        </Modal>
    )

}