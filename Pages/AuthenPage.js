import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Icon, FormInput, Button} from 'react-native-elements'

export default class AuthenPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "57090006",
            password : "Abcde016400"
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    contentContainerStyle={[styles.contentContainer]}
                    resetScrollToCoords={{ x: 0, y: 0 }}>
                    <Icon name='bicycle' type='font-awesome' size={70} color={"#009688"} style={styles.icon}/>
                    <Text h1 style={styles.titleText}>KMITL BIKE ADMIN</Text>
                    <FormInput
                        ref='UsernameInput'
                        onChangeText={ input => this.setState({username : input})}
                        onSubmitEditing={() => this.refs.PasswordInput.focus()}
                        containerStyle={styles.formContainer}
                        inputStyle={styles.formInput}
                        underlineColorAndroid='transparent'
                        placeholderTextColor= "gray"
                        autoCapitalize='none'

                        returnKeyType='next'
                        placeholder='example@kmitl.ac.th'/>
                    <FormInput
                        ref='PasswordInput'
                        onChangeText={ input => this.setState({password : input}) }
                        onSubmitEditing={() => console.log("login")}
                        containerStyle={styles.formContainer}
                        inputStyle={styles.formInput}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="gray"
                        autoCapitalize='none'
                        returnKeyType='done'
                        secureTextEntry={true}
                        placeholder='Password'/>
                    <Button
                        large
                        onPress={() => this.props.navigation.navigate('Map')}
                        buttonStyle={styles.submitButton}
                        
                        title='LOGIN'/>
                </KeyboardAwareScrollView>
            </View>
                    
              
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    contentContainer: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    icon: {
        marginBottom: 10,
        alignSelf: 'center'
    },
    titleText: {
        color: "#009688",
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        fontSize : 28
    },

    formContainer: {
        marginTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'gray',
        borderBottomColor: 'gray',
        backgroundColor: 'white',
    },
    formInput: {
        color: 'black',
    },
    submitButton: {
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 50,
        backgroundColor: '#009688',
    },
    remarkText: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'center',
        color: 'black',
    },
    highlightedText: {
        fontWeight: 'bold',
    },
});