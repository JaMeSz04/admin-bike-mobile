import React, {Component} from 'react'
import {View, ScrollView, Text} from 'react-native'
import {List, ListItem} from 'react-native-elements'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import Pie from 'react-native-pie'
import {Card} from 'react-native-elements'


const historyListMock = [
    {
        name : "Bike 1"
    },
    {
        name : "Bike 2"
    }
]

const CardText = ({title, content}) => (
    <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
        <Text style = {{color: "gray"}}> {title} </Text>
        <Text style = {{color: "gray"}}> {content}</Text>
    </View>
)



export default class HistoryPage extends Component {
    render(){
        return(
            <ParallaxScrollView
                backgroundColor='#009688'
                stickyHeaderHeight={55}
                parallaxHeaderHeight={250}
                renderForeground={() => (
                    <View style={{ minHeight: 50, flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                        <View style = {{flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <Pie
                                    radius={50}
                                    innerRadius={45}
                                    series={[60]}
                                    colors={['#00BF9A']}
                                    backgroundColor='#ddd' />
                                <View style={{position : 'absolute', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style = {{marginLeft: 18, marginTop: 14, fontSize: 54, color : "white"}}>18</Text>
                                   
                                </View>
                            </View>
                            
                        </View>
                        <Text style = {{marginTop: 16, fontSize: 18, color : "white"}}>Bike Borrowed </Text>
                    </View>
                    )}
                renderStickyHeader={() => (
                    <View style = {{left: 2, top : 3}}>
                        <Text style={{marginLeft: 16, marginTop: 10, fontSize: 20, fontWeight: "bold", color : "white"}}>Histories</Text>
                    </View>
                )}
                >
                    <View>
                        <Card titleStyle= {{fontWeight: "normal", fontSize: 16, textAlign: "left"}} containerStyle= {{marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0}} title="Bike 1">
                            <View style = {{flexDirection: "column"}}>
                                <CardText title = "User" content = "Patipon Riebpradit"/>
                                <CardText title = "Date" content = "26/10/2017"/>
                                <CardText title = "Time" content = "16:30"/>
                            </View>
                        </Card>
                        <Card titleStyle= {{fontWeight: "normal", fontSize: 16, textAlign: "left"}} containerStyle= {{marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0}} title="Bike 1">
                            <View style = {{flexDirection: "column"}}>
                                <CardText title = "User" content = "Patipon Riebpradit"/>
                                <CardText title = "Date" content = "26/10/2017"/>
                                <CardText title = "Time" content = "16:30"/>
                            </View>
                        </Card>
                        <Card titleStyle= {{fontWeight: "normal", fontSize: 16, textAlign: "left"}} containerStyle= {{marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0}} title="Bike 1">
                            <View style = {{flexDirection: "column"}}>
                                <CardText title = "User" content = "Patipon Riebpradit"/>
                                <CardText title = "Date" content = "26/10/2017"/>
                                <CardText title = "Time" content = "16:30"/>
                            </View>
                        </Card>
                    </View>
                    
            </ParallaxScrollView>
            
        )
    }
}