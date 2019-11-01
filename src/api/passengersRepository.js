import repository from "./repository";
import qs from 'qs';
const resource = "/passengers";

export default {
    login(formData) {
        return repository.post(`${resource}/login`, qs.stringify({...formData}));
    },
    sign_up(formData) {
        return repository.post(`${resource}/sign_up`, qs.stringify({...formData}));
    }
}