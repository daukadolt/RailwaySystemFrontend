import citiesRepository from "./citiesRepository";
import routesRepository from "./routesRepository";

const repositories = {
    cities: citiesRepository,
    routes: routesRepository
};

export const repositoryFactory = {
    get: name => repositories[name]
};