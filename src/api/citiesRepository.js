import repository from "./repository";

const resource = "/cities";

export default {
    get() {
        return repository.get(`${resource}`);
    }
}