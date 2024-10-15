import async_handler from "../utils/async-handler.util.js";
import {
    kanto_region_pokemons,
    johto_region_pokemons,
    hoenn_region_pokemons,
    sinnoh_region_pokemons,
    unova_region_pokemons,
    kalos_region_pokemons,
    alola_region_pokemons,
    galar_region_pokemons,
    paldea_region_pokemons,
    all_pokemons,
} from "../constants/pokedex-pokemon.constants.js";
import pokedex_pokemon_model from "../models/pokedex-pokemon.model.js";

const fetch_all_pokemons = async_handler(async (req, res) => {
    try {
        const pokemons = await pokedex_pokemon_model.find().select("-_id -__v");

        if (pokemons)
            res.status(200).json({
                success: true,
                all_pokemons: "fetched",
                pokemons_count: pokemons.length,
                pokemons: pokemons,
            });
        else
            res.status(500).json({
                success: false,
                all_pokemons: "not fetched",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_all_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(all_pokemons);

        if (result)
            res.status(200).json({
                success: true,
                all_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                all_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

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

const create_sinnoh_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            sinnoh_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                sinnoh_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                sinnoh_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_unova_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            unova_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                unova_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                unova_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_kalos_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            kalos_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                kalos_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                kalos_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_alola_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            alola_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                alola_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                alola_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_galar_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            galar_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                galar_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                galar_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_paldea_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.insertMany(
            paldea_region_pokemons
        );

        if (result)
            res.status(200).json({
                success: true,
                paldea_pokemons_creation: "successful",
                creations_count: result.length,
            });
        else
            res.status(500).json({
                success: false,
                paldea_pokemons_creation: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_all_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: all_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                all_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                all_pokemons_deletion: "failed",
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

const delete_sinnoh_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: sinnoh_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                sinnoh_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                sinnoh_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_unova_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: unova_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                unova_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                unova_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_kalos_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: kalos_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                kalos_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                kalos_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_alola_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: alola_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                alola_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                alola_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_galar_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: galar_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                galar_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                galar_pokemons_deletion: "failed",
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_paldea_pokemons = async_handler(async (req, res) => {
    try {
        const result = await pokedex_pokemon_model.deleteMany({
            name: { $in: paldea_region_pokemons.map((item) => item.name) },
        });

        if (result)
            res.status(200).json({
                success: true,
                paldea_pokemons_deletion: "successful",
                deletions_count: result.deletedCount,
            });
        else
            res.status(500).json({
                success: false,
                paldea_pokemons_deletion: "failed",
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
    fetch_all_pokemons,
    create_all_pokemons,
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
};
