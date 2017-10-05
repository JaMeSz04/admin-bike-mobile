import React from 'react'
import MapView from 'react-native-maps';
import { AppRegistry, Text, View, StyleSheet, Image, Alert, Button, TouchableHighlight, AsyncStorage, } from 'react-native';


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
  mapContainer : {
    flex : 1
  }
})

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View style = {viewStyle.slide1}>
        <View style = {viewStyle.mapContainer}>
          <MapView style = {viewStyle.map}/>
        </View>
        
        <Text> test </Text>
      </View>
    )
  }
}