import citiesRepository from "./citiesRepository";
import routesRepository from "./routesRepository";
import passengersRepository from "./passengersRepository";
import seatsRepository from "./seatsRepository";
const repositories = {
    cities: citiesRepository,
    routes: routesRepository,
    passengers: passengersRepository,
    seats: seatsRepository
};

export const repositoryFactory = {
    get: name => repositories[name]
};