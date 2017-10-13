import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Icon, Avatar, Button, List, ListItem } from 'react-native-elements'


const Styles = StyleSheet.create({
    fullname : {
        fontWeight: "bold",
        marginTop : 16, 
        fontSize : 18, 
        color : "white"
    }
})

const list = [
    {
      title: '234/320 Moo.6 Samutprakarn',
      icon: 'map'
    },
    {
      title: '084-706-0344',
      icon: 'local-phone'
    }
]

export default class Profile extends Component {
    static navigationOptions = {
        tabBarLabel: 'Profile'
    }
    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {{ backgroundColor : "#009688",paddingBottom : 30}}>
                    <Icon size = {45} style = {{left : 5, top: 10}} name='keyboard-arrow-left'color = "white" onPress = {() => this.props.navigation.goBack()} />
                    <View style = {{flexDirection : "column", alignItems:"center"}}>
                    <Avatar
                        containerStyle = {{borderWidth : 3, borderColor : 'white'}}
                        large
                        rounded
                        title="CR"
                        source={{uri: "https://www.google.co.th/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj57uXImO7WAhWMtY8KHT0sDqgQjRwIBw&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.bike.kmitl.kmitlbike&psig=AOvVaw3mxzEC3TK-OQI9gRQoP7k8&ust=1508004471341160"}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Text style = {Styles.fullname}> Patipon Riebpradit </Text>
                    <Text style = {{marginBottom : 10, color: "white", fontSize : 12}}> Active User </Text>
                    <Button
                        containerViewStyle = {{marginTop:20,borderRadius:20}}
                        buttonStyle = {{paddingLeft : 30, paddingRight : 30}}
                        color = "#009688"
                        backgroundColor = "white"
                        borderRadius = {20}
                        fontWeight = "bold"
                        title='SEND MESSAGE' 
                    />
                    </View>
                </View>
                <View>
                <List containerStyle = {{marginTop: 0}}>
                    {
                        list.map((item, i) => (
                        <ListItem
                            titleContainerStyle = {{
                                height: 40, 
                                marginLeft: 20, 
                                justifyContent: 'center', 
                            }}
                            key={i}
                            title={item.title}
                            
                            titleNumberOfLines = {3}
                            leftIcon={{name: item.icon, style: {left: 10}}}
                            rightIcon={{style: {marginRight:100}}}
                        />
                        ))
                    }
                </List>
                </View>
            </View>
        )
    }
}