import async_handler from "../utils/async-handler.util.js";
import pokemons from "../constants/pokedex-pokemon.constants.js";
import pokedex_pokemon_model from "../models/pokedex-pokemon.model.js";

// optimized util functions to make usable ones
const fetch_pokemons = (region_pokemons, region_name) =>
    async_handler(async (req, res) => {
        try {
            const pokemons = await pokedex_pokemon_model
                .find({
                    name: { $in: region_pokemons.map((item) => item.name) },
                })
                .select("-_id -__v");

            if (pokemons)
                res.status(200).json({
                    success: true,
                    [`${region_name}_pokemons`]: "fetched",
                    pokemons_count: pokemons.length,
                    pokemons: pokemons,
                });
            else
                res.status(500).json({
                    success: false,
                    [`${region_name}_pokemons`]: "not fetched",
                });
        } catch (error) {
            console.log("ERROR CAUGHT: ", error.message);
            res.status(400).json({
                success: false,
                error: error.message,
            });
        }
    });

const create_pokemons = (region_pokemons, region_name) =>
    async_handler(async (req, res) => {
        try {
            const result =
                await pokedex_pokemon_model.insertMany(region_pokemons);

            if (result)
                res.status(200).json({
                    success: true,
                    [`${region_name}_pokemons_creation`]: "successful",
                    creations_count: result.length,
                });
            else
                res.status(500).json({
                    success: false,
                    [`${region_name}_pokemons_creation`]: "failed",
                });
        } catch (error) {
            console.log("ERROR CAUGHT: ", error.message);
            res.status(400).json({
                success: false,
                error: error.message,
            });
        }
    });

const delete_pokemons = (region_pokemons, region_name) =>
    async_handler(async (req, res) => {
        try {
            const result = await pokedex_pokemon_model.deleteMany({
                name: { $in: region_pokemons.map((item) => item.name) },
            });

            if (result)
                res.status(200).json({
                    success: true,
                    [`${region_name}_pokemons_deletion`]: "successful",
                    deletions_count: result.deletedCount,
                });
            else
                res.status(500).json({
                    success: false,
                    [`${region_name}_pokemons_deletion`]: "failed",
                });
        } catch (error) {
            console.log("ERROR CAUGHT: ", error.message);
            res.status(400).json({
                success: false,
                error: error.message,
            });
        }
    });

// region names here to make usable functions
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

// empty object to fill with generated functions
let controller_functions = {};

// generating functions based on the region names
region_names.forEach((region) => {
    controller_functions[`fetch_${region}_pokemons`] = fetch_pokemons(
        pokemons[region],
        region
    );
    controller_functions[`create_${region}_pokemons`] = create_pokemons(
        pokemons[region],
        region
    );
    controller_functions[`delete_${region}_pokemons`] = delete_pokemons(
        pokemons[region],
        region
    );
});

// exporting the controller functions object
export default controller_functions;
