import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen, ContactScreen } from './Pages'
import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <HomeScreen/>
        <ContactScreen/>
      </Swiper>
    )
  }
}