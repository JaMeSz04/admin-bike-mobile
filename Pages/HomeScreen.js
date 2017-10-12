import React from 'react'
import MapView from 'react-native-maps';
import { Text, View, StyleSheet } from 'react-native';
import { ActionsMenu } from '../Components'


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
  }
})

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View style = {viewStyle.slide1}>
        <MapView 
          style = {viewStyle.map}
          initialRegion={{
            latitude: 13.729869,
            longitude: 100.775333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <ActionsMenu/>

        
      </View>
    )
  }
}