import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Icon, Avatar, Button, List, ListItem } from 'react-native-elements'
import call from 'react-native-phone-call'


const Styles = StyleSheet.create({
    fullname: {
        fontWeight: "bold",
        marginTop: 16,
        fontSize: 18,
        color: "white"
    }
})


const phone =  () => {
    let test = "084-706-0344"
    test = test.replace(/-/g, "")

    console.log(test)
    const arg = {
        number : test,
        prompt : true
    }
    call(arg)
}

const list = [
    {
        name : "id",
        title: "57090016",
        icon: 'perm-identity'
    },
    {
        name : "phone-number",
        title: '084-706-0344',
        icon: 'local-phone'
    },
    {
        name : "facalty",
        title: "International College",
        icon: "account-balance"
    },
    {
        name : "address",
        title: '234/320 Moo.6 Samutprakarn',
        icon: 'map'
    }
]

export default class Profile extends Component {
    static navigationOptions = {
        tabBarLabel: 'Profile'
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#009688", paddingTop:20, paddingBottom: 30 }}>
                    <Icon size={45} style={{ left: 5, top: 10 }} name='keyboard-arrow-left' color="white" onPress={() => this.props.navigation.goBack()} />
                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <Avatar
                            containerStyle={{ borderWidth: 3, borderColor: 'white' }}
                            large
                            rounded
                            title="CR"
                            source={{ uri: "https://www.google.co.th/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj57uXImO7WAhWMtY8KHT0sDqgQjRwIBw&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.bike.kmitl.kmitlbike&psig=AOvVaw3mxzEC3TK-OQI9gRQoP7k8&ust=1508004471341160" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Text style={Styles.fullname}> Patipon Riebpradit </Text>
                        <Text style={{ marginBottom: 10, color: "white", fontSize: 12 }}> Active User </Text>
                        <Button
                            containerViewStyle={{ marginTop: 20, borderRadius: 20 }}
                            buttonStyle={{ paddingLeft: 30, paddingRight: 30 }}
                            color="#009688"
                            backgroundColor="white"
                            borderRadius={20}
                            fontWeight="bold"
                            title='SEND MESSAGE'
                        />
                    </View>
                </View>
                <View>
                    <List containerStyle={{ marginTop: 0 }}>
                        {
                            list.map((item, i) => (
                                <ListItem
                                    titleContainerStyle={{
                                        height: 40,
                                        marginLeft: 20,
                                        justifyContent: 'center',
                                    }}
                                    key={i}
                                    onPress = {() => (item.name == "phone-number"? phone() : console.log(""))}
                                    title={item.title}
                                    hideChevron
                                    titleNumberOfLines={3}
                                    leftIcon={{ name: item.icon, style: { left: 10 } }}
                                    
                                />
                            ))
                        }
                    </List>
                </View>
            </ScrollView>
        )
    }
}