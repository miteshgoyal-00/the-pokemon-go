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

const controller_functions = {
    fetch_all_pokemons,

    create_all_pokemons: create_pokemons(all_pokemons, "all"),
    delete_all_pokemons: delete_pokemons(all_pokemons, "all"),

    create_kanto_pokemons: create_pokemons(kanto_region_pokemons, "kanto"),
    delete_kanto_pokemons: delete_pokemons(kanto_region_pokemons, "kanto"),

    create_johto_pokemons: create_pokemons(johto_region_pokemons, "johto"),
    delete_johto_pokemons: delete_pokemons(johto_region_pokemons, "johto"),

    create_hoenn_pokemons: create_pokemons(hoenn_region_pokemons, "hoenn"),
    delete_hoenn_pokemons: delete_pokemons(hoenn_region_pokemons, "hoenn"),

    create_sinnoh_pokemons: create_pokemons(sinnoh_region_pokemons, "sinnoh"),
    delete_sinnoh_pokemons: delete_pokemons(sinnoh_region_pokemons, "sinnoh"),

    create_unova_pokemons: create_pokemons(unova_region_pokemons, "unova"),
    delete_unova_pokemons: delete_pokemons(unova_region_pokemons, "unova"),

    create_kalos_pokemons: create_pokemons(kalos_region_pokemons, "kalos"),
    delete_kalos_pokemons: delete_pokemons(kalos_region_pokemons, "kalos"),

    create_alola_pokemons: create_pokemons(alola_region_pokemons, "alola"),
    delete_alola_pokemons: delete_pokemons(alola_region_pokemons, "alola"),

    create_galar_pokemons: create_pokemons(galar_region_pokemons, "galar"),
    delete_galar_pokemons: delete_pokemons(galar_region_pokemons, "galar"),

    create_paldea_pokemons: create_pokemons(paldea_region_pokemons, "paldea"),
    delete_paldea_pokemons: delete_pokemons(paldea_region_pokemons, "paldea"),
};

export default controller_functions;
