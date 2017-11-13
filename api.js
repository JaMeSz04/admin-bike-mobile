import {create} from "apisauce";

const BASE = "139.59.126.228:8080"

const url = {
    base : "http://" + BASE + "/api",
    socket : "ws://" + BASE,
    endpoint : {
        signin      : "/accounts/login",
        signout     : "/accounts/logout",
        bikes : "/bikes/list"
    }
}

const api = create({
    baseURL: url.base,
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})


export default service = {
    websocket : url.socket,

    login( username , password ){
        return api.post( url.endpoint.signin , { username, password } )
    },
    logout(){
        return api.post( url.endpoint.signout )
    },
    getListBikes(){
        return api.get( endpoint.bikes )
    },



}

api.showError = (message) => Alert.alert('Error', message)

api.showOperationError = (message) => Alert.alert('Operation Failed', message)

api.showValidationError = (message) => Alert.alert('Validation Failed', message)

api.showPermissionError = (message) => Alert.alert('Insufficient Permission', message)

api.showServerInternalError = () => Alert.alert('Unexpected Failure')
