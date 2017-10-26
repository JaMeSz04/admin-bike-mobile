import React from 'react'
import ActionButton from 'react-native-action-button'
import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
    actionButtonShadow: {
        shadowOpacity: 1,
        shadowColor: '#626262',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    actionButtonBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
});

export default class ActionsMenu extends React.Component {
    render(){
        return(
            <ActionButton
                position='right'
                size={45}
                degrees={270}
                fixNativeFeedbackRadius={true}
                
                backdrop={<View style={styles.actionButtonBackdrop}/>}
                buttonColor='#FFFFFF'>
                    <ActionButton.Item
                        onPress={() => alert("")}
                        buttonColor='#FFFFFF'
                        textContainerStyle={styles.actionButtonShadow}
                        title='Profile'>
                      
                    </ActionButton.Item>
                    <ActionButton.Item
                        onPress={() => alert("")}
                        buttonColor='#FFFFFF'
                        textContainerStyle={styles.actionButtonShadow}
                        title='History'>
                       
                    </ActionButton.Item>
                    <ActionButton.Item
                        onPress={() => alert("")}
                        buttonColor='#FFFFFF'
                        textContainerStyle={styles.actionButtonShadow}
                        title='Report'>
                        
                    </ActionButton.Item>
                    <ActionButton.Item
                        onPress={() => alert("")}
                        buttonColor='#FFFFFF'
                        textContainerStyle={styles.actionButtonShadow}
                        title='More'>
                        
                    </ActionButton.Item>
                </ActionButton>
        )
    }
}