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
        return repository.delete(`${resource}/cancelRoute`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(cancelRouteData)
        })
    },
    /* <--- </Routes> ---> */

    /* <--- <Tickets> ---> */

    createTicket(ticketData){
        return repository.post(`${resource}/createTicket`, ticketData)
    },
    cancelTicket(ticketData){
        return repository.delete(`${resource}/deleteTicket`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(ticketData)
        })
    },

    /* <--- </Tickets> ---> */

    /* <--- <Stations> ---> */

    getStations() {
        return repository.get(`${resource}/getStations`)
    },
    getStationEmployees(stationId) {
        return repository.get(`${resource}/getEmployees`, {
            params: {
                stationId
            }

        })
    },
    /* <--- </Stations> ---> */

    /* <--- <ActuallyEmployees> ---> */

    getEmployeeSchedule(employeeId) {
        return repository.get(`${resource}/schedule`, {
            params: {
                e_id: employeeId
            }
        })
    },

    getEmployeeInformation(employeeId) {
        return repository.get(`${resource}/${employeeId}`,{
            params:{
                e_id: employeeId
            }
        })
    },

    updateEmployeeSchedule(employeeId, weekSchedule) {
        return repository.put(`${resource}/adjust/${employeeId}`, {
                schedule: weekSchedule
        })
    },

    updateEmployeeSalary(employeeId, newSalary) {
        console.log(employeeId, newSalary);
        return repository.put(`${resource}/salary/${employeeId}?salary=${newSalary}`, )
    },

    /* <--- </ActuallyEmployees> ---> */

    toggleLoggingMode(isOn) {
        return repository.post(`${resource}/switchMode?isOn=${isOn}`)
    },

    getCurrentLoggingValue() {
        return repository.get(`${resource}/switchMode`)
    }

}