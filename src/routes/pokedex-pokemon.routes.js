import { Router } from "express";
import controllers from "../controllers/pokedex-pokemon.controllers.js";

const router = Router();

const region_names = [
    "all",
    "kanto",
    "johto",
    "hoenn",
    "sinnoh",
    "unova",
    "kalos",
    "alola",
    "galar",
    "paldea",
];

region_names.forEach((region) => {
    router
        .route(`/s/region/${region}`)
        .post(controllers[`create_${region}_pokemons`])
        .get(controllers[`fetch_${region}_pokemons`])
        .delete(controllers[`delete_${region}_pokemons`]);
});

export default router;
