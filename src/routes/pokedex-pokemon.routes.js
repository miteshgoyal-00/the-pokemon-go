import { Router } from "express";
import controllers from "../controllers/pokedex-pokemon.controllers.js";

const router = Router();

router
    .route("/pokemons/region/kanto")
    .post(controllers.create_kanto_pokemons)
    .delete(controllers.delete_kanto_pokemons);
router
    .route("/pokemons/region/johto")
    .post(controllers.create_johto_pokemons)
    .delete(controllers.delete_johto_pokemons);
router
    .route("/pokemons/region/hoenn")
    .post(controllers.create_hoenn_pokemons)
    .delete(controllers.delete_hoenn_pokemons);
router
    .route("/pokemons/region/sinnoh")
    .post(controllers.create_sinnoh_pokemons)
    .delete(controllers.delete_sinnoh_pokemons);
router
    .route("/pokemons/region/unova")
    .post(controllers.create_unova_pokemons)
    .delete(controllers.delete_unova_pokemons);
router
    .route("/pokemons/region/kalos")
    .post(controllers.create_kalos_pokemons)
    .delete(controllers.delete_kalos_pokemons);
router
    .route("/pokemons/region/alola")
    .post(controllers.create_alola_pokemons)
    .delete(controllers.delete_alola_pokemons);
router
    .route("/pokemons/region/galar")
    .post(controllers.create_galar_pokemons)
    .delete(controllers.delete_galar_pokemons);
router
    .route("/pokemons/region/paldea")
    .post(controllers.create_paldea_pokemons)
    .delete(controllers.delete_paldea_pokemons);

router
    .route("/all")
    .post(controllers.create_all_pokemons)
    .get(controllers.fetch_all_pokemons)
    .delete(controllers.delete_all_pokemons);

export default router;
