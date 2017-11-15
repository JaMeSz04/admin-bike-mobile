import {create} from "apisauce";

const BASE = {
    dev : "139.59.126.228:8080",
    release : "161.246.94.246:1995"
}



const url = {
    base : "http://" + BASE.dev + "/api",
    socket : "ws://" + BASE.dev,
    endpoint : {
        signin      : "/accounts/login/",
        signout     : "/accounts/logout/",
        bikes : "/bikes/list/all",
        chats : "/bikes/chats/",
        history : {
            all: "/bikes/history/all",
            bike: "/bikes/history"
        }
    }
}

const api = create({
    baseURL: url.base,
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})


export default service = {
    websocket : url.socket,

    addToken(token){
        api.setHeader("Authorization", token)
    },
    login( username , password ){
        return api.post( url.endpoint.signin , { username, password } )
    },
    logout(){
        return api.post( url.endpoint.signout )
    },
    getListBikes(){
        return api.get( endpoint.bikes )
    },
    getChatRooms(){
        return api.get( endpoint.chats )
    },
    getHistories(){
        return api.get( endpoint.history.all )
    },
    getBikeHistory( bikeID ){
        return api.get( endpoint.history.bike )
    }

}

api.showError = (message) => Alert.alert('Error', message)

api.showOperationError = (message) => Alert.alert('Operation Failed', message)

api.showValidationError = (message) => Alert.alert('Validation Failed', message)

api.showPermissionError = (message) => Alert.alert('Insufficient Permission', message)

api.showServerInternalError = () => Alert.alert('Unexpected Failure')
