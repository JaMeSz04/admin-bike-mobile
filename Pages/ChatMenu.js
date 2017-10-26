import React, {Component} from 'react'
import { StyleSheet, Image, Text, ScrollView, FlatList } from 'react-native'
import { List, ListItem, Avatar } from "react-native-elements"



/*
    List object schema
    [
        {
            id : int,
            name : String,
            avatar_url : String,
            subtitle : String
        }
    ]

*/

const styles = StyleSheet.create({
    subtitleView : {
        flexDirection : 'row',
        marginTop : 5,
        marginBottom : 5 
    },
    subtitle : {
        paddingLeft: 10,
        color: 'grey' 
    },
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    badge : {
        backgroundColor : "orange"
    }
})

const list = [
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

export default class ChatMenu extends Component {
    static navigationOptions = {
        tabBarLabel: 'Conversations'
    }
    render(){
        return(
            <ScrollView>
                <List containerStyle={{marginTop: 0,marginBottom: 20}}>
                    {
                        list.map((l, i) => (
                        <ListItem wrapperStyle= {{marginTop:3, marginBottom: 3,marginLeft : 20}}
                            onPress = { () => this.props.navigation.navigate('Chat', { name: l.name, id : '0'}) }
                            roundAvatar
                            avatar= {<Avatar
                                rounded
                                source={{uri:l.avatar_url}}
                                title={l.name}
                            />}
                            key={i}
                            title={l.name}
                            titleStyle={{fontWeight: "bold"}}
                            subtitle={l.subtitle}
                            badge={{ value: 3, containerStyle: { marginTop: 5,  backgroundColor: "#D50000" } }}
                        />
                        ))
                    }
                </List>
            </ScrollView>
        )
    }
}