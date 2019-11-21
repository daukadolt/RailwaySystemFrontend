import repository from "./repository";
const resource = "/logs";

export default {
    getLogs() {
        return repository.get(`${resource}`)
    }
}