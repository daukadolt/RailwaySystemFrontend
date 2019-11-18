import citiesRepository from "./citiesRepository";
import routesRepository from "./routesRepository";
import passengersRepository from "./passengersRepository";
import employeesRepository from "./employeesRepository";
const repositories = {
    cities: citiesRepository,
    routes: routesRepository,
    passengers: passengersRepository,
    employees: employeesRepository
};

export const repositoryFactory = {
    get: name => repositories[name]
};