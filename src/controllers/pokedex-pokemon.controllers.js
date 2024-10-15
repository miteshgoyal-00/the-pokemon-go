import async_handler from "../utils/async-handler.util.js";
import {
    kanto_region_pokemons,
    johto_region_pokemons,
    hoenn_region_pokemons,
} from "../constants/pokedex-pokemon.constants.js";
import pokedex_pokemon_model from "../models/pokedex-pokemon.model.js";

const create_kanto_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            kanto_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                kanto_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                kanto_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_johto_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            johto_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                johto_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                johto_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_hoenn_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            hoenn_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                hoenn_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                hoenn_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_kanto_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: kanto_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                kanto_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                kanto_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_johto_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: johto_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                johto_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                johto_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_hoenn_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: hoenn_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                hoenn_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                hoenn_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

export {
    create_kanto_pokemons,
    create_johto_pokemons,
    create_hoenn_pokemons,
    delete_kanto_pokemons,
    delete_johto_pokemons,
    delete_hoenn_pokemons,
};
