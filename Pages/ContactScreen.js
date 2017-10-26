import React from 'react';
import { StyleSheet, Text, View, Avatar, ScrollView } from 'react-native';
import {List, ListItem} from 'react-native-elements'




export default class ContactScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Contacts',
    }
    render(){
        const data = [
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
        return(
            <ScrollView>
                <List containerStyle={{marginTop: 0,marginBottom: 20}}>
                    {
                        data.map((l, i) => (
                        <ListItem wrapperStyle= {{marginTop:3, marginBottom: 3,marginLeft : 20}}
                            onPress = { () => this.props.navigation.navigate('Profile', { name: l.name, id : '0', phone : "0847060344"}) }
                            roundAvatar
                            key={i}
                            title={l.name}
                            subtitle={l.subtitle}
                        />
                        ))
                    }
                </List>
            </ScrollView>
           
        )
    }
}