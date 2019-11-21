import citiesRepository from "./citiesRepository";
import routesRepository from "./routesRepository";
import passengersRepository from "./passengersRepository";
import employeesRepository from "./employeesRepository";
import logsRepository from "./logsRepository";
const repositories = {
    cities: citiesRepository,
    routes: routesRepository,
    passengers: passengersRepository,
    employees: employeesRepository,
    logs: logsRepository
};

export const repositoryFactory = {
    get: name => repositories[name]
};