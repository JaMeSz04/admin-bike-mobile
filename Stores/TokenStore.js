import {observable, action} from 'mobx'

const TOKEN_KEY = "access-token"
const USER_KEY = "user-obj"

class TokenStore {
    @observable isLogin
    @observable user

    constructor(){
        this.isLogin = this.isValidAccess()
    }

    isValidAccess(){
        localStorage.getItem(TOKEN_KEY) === undefined? (false) : (true)
    }

    @action registerUser(user){
        localStorage.setitem(USER_KEY, user)
    }

    @action setToken(token){
        localStorage.setItem(TOKEN_KEY, token)
        this.isLogin = true
    }

    @action clearToken(){
        localStorage.setItem(TOKEN_KEY, undefined)
        this.isLogin = false
    }

    get getUser(){
        return localStorage.getItem(USER_KEY)
    }
    //for debug only
    get getToken() {
        return localStorage.getItem(TOKEN_KEY)
    }


}

const TokenStore = new TokenStore()

export default TokenStore