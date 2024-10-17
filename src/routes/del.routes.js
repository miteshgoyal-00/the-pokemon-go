import { Router } from "express";
import trainee_model from "../models/trainee.model.js";
import inventory_item_model from "../models/inventory-item.model.js";
import pokedex_pokemon_model from "../models/pokedex-pokemon.model.js";

const router = Router();

const routes_and_models = {
    trainees: trainee_model,
    "inventory-items": inventory_item_model,
    "pokedex-pokemons": pokedex_pokemon_model,
};

Object.entries(routes_and_models).forEach(([route, model]) => {
    router.route(`/${route}`).delete(async (req, res) => {
        const deleted = await model.deleteMany();
        res.success(200, "all data deleted", {
            from_model: req.path.split("/").pop(),
            deleted_count: deleted.deletedCount,
        });
    });
});

export default router;
