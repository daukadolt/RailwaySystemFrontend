import repository from "./repository";
import qs from 'qs';
const resource = "/employees";

export default {
    login(formData) {
        return repository.post(`${resource}/login`, qs.stringify({...formData}));
    },
    createRoute(routeData) {
        return repository.post(`${resource}/newRoute`, routeData)
    }
}