import { Router } from "express";
import trainee_model from "../models/trainee.model.js";
import inventory_item_model from "../models/inventory-item.model.js";
import pokedex_pokemon_model from "../models/pokedex-pokemon.model.js";

const router = Router();

const json_response = (req, deleted) => ({
    success: true,
    deleted_all: true,
    from_model: req.path.split("/").pop(),
    deleted_count: deleted.deletedCount,
});

router.route("/trainees").get(async (req, res, next) => {
    const deleted = await trainee_model.deleteMany();
    res.json(json_response(req, deleted));
});

router.route("/inventory-items").get(async (req, res, next) => {
    const deleted = await inventory_item_model.deleteMany();
    res.json(json_response(req, deleted));
});

router.route("/pokedex-pokemons").get(async (req, res, next) => {
    const deleted = await pokedex_pokemon_model.deleteMany();
    res.json(json_response(req, deleted));
});

export default router;
