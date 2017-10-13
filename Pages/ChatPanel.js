import React from 'react'
import { View, StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

const Styles = StyleSheet.create({
    view : {
        
        flex : 1
    }
})

export default class ChatPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }
    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        return (
            <View style = {Styles.view}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(messages) => this.onSend(messages)}
                    user={{
                    _id: 1,
                    }}
                />
            </View>
        )
    }
}