import { Router } from "express";
import {
    fetch_all_pokemons,
    create_hoenn_pokemons,
    create_johto_pokemons,
    create_kanto_pokemons,
    delete_kanto_pokemons,
    delete_johto_pokemons,
    delete_hoenn_pokemons,
} from "../controllers/pokedex-pokemon.controllers.js";

const router = Router();

router
    .route("/pokemons/region/kanto")
    .post(create_kanto_pokemons)
    .delete(delete_kanto_pokemons);
router
    .route("/pokemons/region/johto")
    .post(create_johto_pokemons)
    .delete(delete_johto_pokemons);
router
    .route("/pokemons/region/hoenn")
    .post(create_hoenn_pokemons)
    .delete(delete_hoenn_pokemons);

router.route("/all").get(fetch_all_pokemons);

export default router;
