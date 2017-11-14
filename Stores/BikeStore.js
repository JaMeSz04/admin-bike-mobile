import {observable, action, computed} from 'mobx'
import service from '../api'


//assume that getListBike return all bikes (both inactive and active)
class BikeStore {
    @observable bikeList = []
    @observable bikeHistory = []

    @action fetchBikeList(){
        service.getListBikes().then( response  => {
            this.bikeList = response.data
        })
    }

    @action refreshLocation() {
        this.fetchBikeList()
    }

    @computed get getByActive() {
        return this.bikeList.filter(bike => bike.active)
    }

    @computed get getByInactive() {
        return this.bikeList.filter(bike => !bike.active)
    }

}