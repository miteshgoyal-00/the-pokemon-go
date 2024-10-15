import { Router } from "express";
import {
    fetch_all_pokemons,
    create_hoenn_pokemons,
    create_johto_pokemons,
    create_kanto_pokemons,
    create_sinnoh_pokemons,
    create_unova_pokemons,
    create_kalos_pokemons,
    create_alola_pokemons,
    create_galar_pokemons,
    create_paldea_pokemons,
    delete_all_pokemons,
    delete_kanto_pokemons,
    delete_johto_pokemons,
    delete_hoenn_pokemons,
    delete_sinnoh_pokemons,
    delete_unova_pokemons,
    delete_kalos_pokemons,
    delete_alola_pokemons,
    delete_galar_pokemons,
    delete_paldea_pokemons,
    create_all_pokemons,
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
router
    .route("/pokemons/region/sinnoh")
    .post(create_sinnoh_pokemons)
    .delete(delete_sinnoh_pokemons);
router
    .route("/pokemons/region/unova")
    .post(create_unova_pokemons)
    .delete(delete_unova_pokemons);
router
    .route("/pokemons/region/kalos")
    .post(create_kalos_pokemons)
    .delete(delete_kalos_pokemons);
router
    .route("/pokemons/region/alola")
    .post(create_alola_pokemons)
    .delete(delete_alola_pokemons);
router
    .route("/pokemons/region/galar")
    .post(create_galar_pokemons)
    .delete(delete_galar_pokemons);
router
    .route("/pokemons/region/paldea")
    .post(create_paldea_pokemons)
    .delete(delete_paldea_pokemons);

router
    .route("/all")
    .post(create_all_pokemons)
    .get(fetch_all_pokemons)
    .delete(delete_all_pokemons);

export default router;
