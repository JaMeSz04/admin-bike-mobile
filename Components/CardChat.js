import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { Avatar, Card ,Divider, Icon } from "react-native-elements"


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
    },
    lastMessage : {
         textAlign: "justify", 
         marginTop: 5, 
         color : "gray"
    },
    avatarBox : {
        flexDirection : "row",
        marginTop : 16,
      
    }
})


export default class CardChat extends Component {
    render(){
        return(
            <Card
            containerStyle= {{marginTop: 0, marginBottom: 10, marginLeft: 0, marginRight: 0}}
            >
                <View style = {{flexDirection: "column"}}>
                    <View style = {{ minHeight: 50, marginBottom: 2, flexDirection: "column"}}>
                        <Text style = {{ fontSize:18 }}> Patipon Riebpradit </Text>  
                        <Text style = {styles.lastMessage}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus, elit eget viverra sagittis, erat nisi varius quam </Text>
                    </View>
                    <View style = {styles.avatarBox}>
                        <Avatar
                            containerStyle = {{marginRight : 10}}
                            small
                            rounded
                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            containerStyle = {{marginRight : 10}}
                            small
                            rounded
                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                </View>
                
                <Divider style = {{marginTop: 16, marginBottom: 16}}/> 
                <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                    <View style = {{flexDirection: "row"}}>
                        <Icon color = "gray" name='alarm' />
                        <Text style = {{marginTop: 3, color: "gray"}}> 1 hr </Text>
                    </View>
                    <View style = {{flexDirection: "row"}}>
                        <Icon color = "gray" name='chat-bubble-outline' />
                        <Text style = {{marginLeft: 2, marginTop: 3, color: "gray"}}> 8 </Text>
                    </View>
                </View>
            </Card>
        )
    }
}

