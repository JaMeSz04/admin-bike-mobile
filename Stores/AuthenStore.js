import {observable, action} from 'mobx'
import service from '../api'
import {TokenStore} from "./index";

class AuthenStore extends TokenStore {

    @observable username
    @observable password

    authenticate(){
        return service.login(this.username, this.password).then( response => {
            this.setToken(response.data.authorization)

            return true
        }).catch( error => false )
    }

    async login(navigation){
        if (this.isValidAccess())
            navigation.navigate('Map', { username: values.username })
        else {
            const status = await this.authenticate()
            status? navigation.navigate('Map', { username: values.username }) : false
        }
    }

    logout(){
        this.clearToken()
    }


    @action onChangeUsername( username ){
        this.username = username
    }

    @action onChangePassword( password ){
        this.password = password
    }
}
