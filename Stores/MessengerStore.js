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


class MessengerStore {

    @observable isConnected = false
    @observable chatLog = []
    connection = null

    onCloseConnection(){
        this.isConnected = false
        this.chatLog = []
        this.connection = null
    }

    initConnection( room ){
        this.connection = new WebSocket(service.websocket)
        this.connection.onopen( () => this.isConnected = true )
        this.connection.onmessage( event => this.onReceive(event.data) )
        this.connection.onerror( error => alert("Unexpected error! " + error) )
        this.connection.onclose( event => this.onCloseConnection() )
    }

    onSend( message ){
        this.connection.send( message )
    }

    onReceive( message ){
        this.connection.push( message )
    }

    closeConnection(){
        this.connection.close()
    }


}