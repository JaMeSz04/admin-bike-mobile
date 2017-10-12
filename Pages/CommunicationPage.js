import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'
import { ChatMenu, ContactScreen } from './'

const styles = StyleSheet.create({
    container: {
      marginTop : 20,
      flex: 1,
    },
})

const FirstRoute = () => <ChatMenu/>
const SecondRoute = () => <ContactScreen/>

export default class CommuncationPage extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Messages' },
      { key: '2', title: 'Contacts' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  });

  render() {
    return (
    
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

