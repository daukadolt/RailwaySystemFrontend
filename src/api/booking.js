import repository from "./repository";

const resource = "/routes";
const resource1 = "/seats";

export default {
    /* /api/routes/4/seats?date=2019-10-01&dep_date=2019-10-02 22:22:22&arr_date=2019-10-02 23:22:22 */
    getSeats(startDate, depDate, arrDate) {
        return repository.get(`${resource}`, {
            params: {
                date: startDate,
                dep_date: depDate,
                arr_date: arrDate
            }
        }
        );
    }
};