import {observable, action} from 'mobx'
import service from '../api'

// [
//     {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//             _id: 2,
//             name: 'React Native',
//             avatar: 'https://facebook.github.io/react/img/logo_og.png',
//         },
//     },
// ]

const dump = [
    {
        room_id : 5,
        user : { },
        unread_message : { },
        admin : [ ]
    }
]
class MessengerStore {

    @observable isConnected = false
    @observable chatLog = [] //list of messages
    @observable chatRooms = [] //list of chat rooms
    @observable loading = false
    connection = null

    @action getRooms(){
        this.loading = true
        service.getChatRooms().then( response => {
            this.chatRooms = response.data
            this.loading = false
        })
    }

    @action onCloseConnection(){
        this.isConnected = false
        this.chatLog = []
        this.connection = null
    }

    @action initConnection( roomId ){
        this.connection = new WebSocket(service.websocket + '/' + roomId)
        this.connection.onopen( () => this.isConnected = true )
        this.connection.onmessage( event => this.onReceive(event.data) )
        this.connection.onerror( error => alert("Unexpected error! " + error) )
        this.connection.onclose( event => this.onCloseConnection() )
    }

    @action onSend( message ){
        this.connection.send( message )
    }

    @action onReceive( message ){
        this.connection.push( message )
    }

    closeConnection(){
        this.connection.close()
    }

}

const MessengerStore = new MessengerStore()
export default MessengerStore