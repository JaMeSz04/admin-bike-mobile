import {observable, action} from 'mobx'
import service from '../api'

/*
    const chatSchema = {

    }
 */

class ChatRoom {

    @observable isConnected = false
    @observable chatLog = []
    connection = null

    initConnection( room ){
        this.connection = new WebSocket(service.websocket)
        this.connection.onopen( () => this.isConnected = true )
        this.connection.onmessage( event => chatLog.push(event.data) )
        this.connection.onerror( error => alert("Unexpected error! " + error))
    }


}