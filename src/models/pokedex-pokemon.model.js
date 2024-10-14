import { Schema, model } from "mongoose";

const pokedex_pokemon_schema = Schema({
    specy: { type: String, required: true, unique: true },
    types: [
        {
            type: [String],
            enum: [
                "Normal",
                "Fire",
                "Water",
                "Grass",
                "Electric",
                "Ice",
                "Fighting",
                "Poison",
                "Ground",
                "Flying",
                "Psychic",
                "Bug",
                "Rock",
                "Ghost",
                "Dragon",
                "Dark",
                "Steel",
                "Fairy",
            ],
            required: true,
        },
    ],
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    candiesHolded: {
        type: Number,
        default: 3,
        get: function () {
            switch (this.evolutionStage) {
                case 1:
                    return 3;
                case 2:
                    return 5;
                case 3:
                    return 10;
                default:
                    return 3;
            }
        },
    },
    evolutionStage: { type: Number, default: 1 },
    evolutions: [{ type: Schema.Types.ObjectId, ref: "PokedexPokemon" }],
});

const pokedex_pokemon_model = model("PokedexPokemon", pokedex_pokemon_schema);

export default pokedex_pokemon_model;
