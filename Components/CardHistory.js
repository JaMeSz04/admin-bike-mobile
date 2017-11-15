import {View, Text} from 'react-native'
import {Card} from 'react-native-elements'

const CardText = ({title, content}) => (
    <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
        <Text style = {{color: "gray"}}> {title} </Text>
        <Text style = {{color: "gray"}}> {content}</Text>
    </View>
)

export default CardHistory = ({bike, name, date, time}) => (
    <Card titleStyle= {{fontWeight: "normal", fontSize: 16, textAlign: "left"}} containerStyle= {{marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0}} title="Bike 1">
        <View style = {{flexDirection: "column"}}>
            <CardText title = "Bike" content = {bike}/>
            <CardText title = "User" content = {name}/>
            <CardText title = "Date" content = {date}/>
            <CardText title = "Time" content = {time}/>
        </View>
    </Card>
)
