import citiesRepository from "./citiesRepository";
import routesRepository from "./routesRepository";
import passengersRepository from "./passengersRepository";

const repositories = {
    cities: citiesRepository,
    routes: routesRepository,
    passengers: passengersRepository
};

export const repositoryFactory = {
    get: name => repositories[name]
};