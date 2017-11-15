import {observable, action, computed} from 'mobx'
import service from '../api'
import {MapAdapter} from "../Adapter";


//assume that getListBike return all bikes (both inactive and active)
class BikeStore {
    @observable bikeList = []
    @observable bikeHistory = []

    @action fetchBikeList(){
        service.getListBikes().then( response  => {
            this.bikeList = response.data.map( element => MapAdapter(element) )
        })
    }

    //currently have only get bike history by ID case!!
    @action fetchHistory(id){
        id === undefined?
            service.getHistories().then( response => this.bikeHistory = response.data) :
            service.getBikeHistory(id).then( response => this.bikeHistory = response.data)
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