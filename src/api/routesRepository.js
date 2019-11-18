import repository from "./repository";

const resource = "/routes";

export default {
    /* /api/routes?from=${this.fromCity}&to=${this.toCity}&date_to='2019-11-18' */
    getRoute(fromCity, toCity, date) {
        return repository.get(`${resource}`, {
            params: {
                from: fromCity,
                to: toCity,
                date_to: `'${date}'`
            }
        }
        );
    },
    getSeatsForRoute(startDate, depDate, arrDate, routeId) {
        return repository.get(`${resource}/${routeId}/seats`, {params: {
            date: startDate,
            dep_date: depDate,
            arr_date: arrDate
        }
        })
    }
};