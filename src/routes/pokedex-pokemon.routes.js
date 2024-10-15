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

router.route("/create/pokemons/region/kanto").post(create_kanto_pokemons);
router.route("/create/pokemons/region/johto").post(create_johto_pokemons);
router.route("/create/pokemons/region/hoenn").post(create_hoenn_pokemons);

router.route("/delete/pokemons/region/kanto").post(delete_kanto_pokemons);
router.route("/delete/pokemons/region/johto").post(delete_johto_pokemons);
router.route("/delete/pokemons/region/hoenn").post(delete_hoenn_pokemons);

router.route("/all").get(fetch_all_pokemons);

export default router;
