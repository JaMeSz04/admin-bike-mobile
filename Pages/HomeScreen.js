import React from 'react'
import MapView from 'react-native-maps';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { ActiveToggle } from '../Components'


const viewStyle = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  switch: {
    position: 'absolute',
    zIndex: 10,
    right : 20,
    top : 20
  }
})

const markerList = [
  {
    latlng : {
      latitude: 13.729869,
      longitude: 100.775333
    },
    title : "ShubU test",
    description : "This is the test description"
  }
]

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isActive : false
    }
  }

  render(){
    return(
      <View style = {viewStyle.slide1}>
        <View style = {viewStyle.switch}>
          <ActiveToggle init = {this.state.isActive} action = {(value) => this.setState({isActive : value})}/>
        </View>
        <MapView 
          style = {viewStyle.map}
          initialRegion={{
            latitude: 13.729869,
            longitude: 100.775333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        {markerList.map( (marker,index) => (
          <MapView.Marker
            key = {index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
        </MapView>
      </View>
    )
  }
}