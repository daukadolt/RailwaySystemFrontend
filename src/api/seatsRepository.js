import repository from "./repository";

const resource = "/seats";

export default {
    get() {
        return repository.get(`${resource}`);
    },
    //getCityArrivalDepartures(cityId) {
//return repository.get(`${resource}/${cityId}`)
  //  }
}