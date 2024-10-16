import { Schema, model } from "mongoose";

const egg_schema = Schema({
    distance: { type: Number, requried: true },
    hatchablePokemons: {
        leastProbable: [{ type: Schema.Types.ObjectId, ref: "PokedexPokemon" }],
        muchProbable: [{ type: Schema.Types.ObjectId, ref: "PokedexPokemon" }],
        moreProbable: [{ type: Schema.Types.ObjectId, ref: "PokedexPokemon" }],
        mostProbable: [{ type: Schema.Types.ObjectId, ref: "PokedexPokemon" }],
    },
});

const egg_model = model("Quest", egg_schema);

export default egg_model;
