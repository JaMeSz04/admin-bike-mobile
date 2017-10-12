import React, {Component} from 'react'
import { StyleSheet, Image, Text, View, FlatList } from 'react-native'
import { List, ListItem, Avatar } from "react-native-elements"


const testList = [
    {
        header : "ShubU"
    },
    {
        header : "Hehe"
    }
]

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
        tabBarLabel: 'Conversations',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        
    }
    render(){
        const items = testList.map( (ele, index) => (
            <ListItem 
            key = {index}
            avatar = {"../Assets/images/avatar.png"}
            title = {ele.header}
            subtitle = {
                <View style = {styles.subtitleView}>
                    <Text style = {styles.subtitle}> Test subtitles </Text>
                </View>
            }/>
        ))

        return(
            <View>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((l, i) => (
                        <ListItem wrapperStyle= {{marginLeft : 20}}
                            roundAvatar
                            avatar= {<Avatar
                                rounded
                                source={{uri:l.avatar_url}}
                                title={l.name}
                            />}
                            key={i}
                            title={l.name}
                            subtitle={l.subtitle}
                            badge={{ value: 3, containerStyle: { marginTop: 6,  backgroundColor: 'green' } }}
                        />
                        ))
                    }
                </List>
            </View>
        )
    }
}