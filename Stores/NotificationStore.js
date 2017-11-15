import React, {Component} from 'react'
import {Platform} from 'react-native'
import FCM, {
    FCMEvent,
    RemoteNotificationResult,
    WillPresentNotificationResult,
    NotificationType } from "react-native-fcm"
import { MessengerStore } from './'

class NotificationStore {

    constructor(){
        this.initNotification()
    }

    notifyContent(){
        MessengerStore.getRooms()
    }

    initNotification(){

        FCM.requestPermissions()
        FCM.getFCMToken().then(token => {
            console.log("TOKEN (getFCMToken)", token)
        })
        FCM.subscribeToTopic('chat-room')
        FCM.on(FCMEvent.Notification, async notification => {
            console.log("New notification : ", notification)
            this.notifyContent()
            if (Platform.OS === 'ios') {
                switch (notification._notificationType) {
                    case NotificationType.Remote:
                        notification.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                        break
                    case NotificationType.NotificationResponse:
                        notification.finish()
                        break
                    case NotificationType.WillPresent:
                        notification.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
                        break
                }
            }
        })
        FCM.on(FCMEvent.RefreshToken, (token) => {
            console.log("TOKEN (getREFRESH-TOKEN)", token)
            // fcm token may not be available on first load, catch it here
        })

    }

}

const NotificationStore = new NotificationStore()
export default NotificationStore