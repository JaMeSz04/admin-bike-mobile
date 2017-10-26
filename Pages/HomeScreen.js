import React from 'react'
import MapView from 'react-native-maps';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { Icon } from 'react-native-elements'
import {MapSetting} from './'


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
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 40,
    borderColor : "lightgray",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: 'black',
    shadowRadius: 10,
    position: 'absolute',
    zIndex: 10,
    right: 20,
    top: 30
  }
})

const markerList = [
  {
    latlng: {
      latitude: 13.729869,
      longitude: 100.775333
    },
    title: "ShubU test",
    description: "This is the test description"
  }
]

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      modalVisible : false,
      isActiveBike : false,
      selectedBike : "Java"
    }
  }

  render() {
    return (
      <View style={viewStyle.slide1}>
        <MapSetting 
          toggleSwitch = {this.state.isActiveBike} 
          onSwitchChange = {() => this.setState({isActiveBike : !this.state.isActiveBike})} 
          active = {this.state.modalVisible} 
          action = {()=> this.setState({modalVisible : !this.state.modalVisible})}
          selectedBike = {this.state.selectedBike} 
          onSelectedChange = {(bike) => this.setState({selectedBike : bike})}/>
        <View style={viewStyle.switch}>
          <Icon onPress={() => this.setState({modalVisible : true})} name="filter-list" color="gray" />
        </View>
        <MapView
          style={viewStyle.map}
          initialRegion={{
            latitude: 13.729869,
            longitude: 100.775333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markerList.map((marker, index) => (
            <MapView.Marker
              key={index}
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