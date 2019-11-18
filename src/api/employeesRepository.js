import repository from "./repository";
import qs from 'qs';
const resource = "/employees";

export default {
    login(formData) {
        return repository.post(`${resource}/login`, qs.stringify({...formData}));
    },

    /* <--- <Routes> ---> */

    createRoute(routeData) {
        return repository.post(`${resource}/newRoute`, routeData)
    },
    cancelRoute(cancelRouteData){
        return repository.post(`${resource}/cancelRoute`,cancelRouteData)
    },
    /* <--- </Routes> ---> */

    /* <--- <Tickets> ---> */

    createTicket(ticketData){
        return repository.post(`${resource}/createTicket`, ticketData)
    },
    cancelTicket(ticketData){
        return repository.post(`${resource}/deleteTicket`, ticketData)
    },

    /* <--- </Tickets> ---> */

    /* <Stations> */

    getStations() {
        return repository.get(`${resource}/getStations`)
    }
    /* </Stations> */
}