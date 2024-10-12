import { Schema, model } from "mongoose";

const instance_pokemon_schema = new Schema({
    pokedexSpecyId: {
        type: Schema.Types.ObjectId,
        ref: "Pokedex",
        required: true,
    },
    level: { type: Number, min: 0, max: 40, required: true },
    cp: { type: Number, required: true, min: 1 },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    iv: {
        attack: { type: Number, min: 0, max: 15, required: true },
        defense: { type: Number, min: 0, max: 15, required: true },
        hp: { type: Number, min: 0, max: 15, required: true },
    },
    gender: { type: String, enum: ["Male", "Female", "Null"], required: true },
    fastTM: {
        name: { type: String, required: true },
        power: { type: Number, required: true },
    },
    chargedTMs: {
        ctm1: {
            name: { type: String, required: true },
            power: { type: Number, required: true },
        },
        ctm2: {
            name: {
                type: String,
                required: function () {
                    return this.chargedTMs.total === 2;
                },
            },
            power: {
                type: Number,
                required: function () {
                    return this.chargedTMs.total === 2;
                },
            },
        },
        total: { type: Number, enum: [1, 2], default: 1 },
    },
    spawnedAt: { type: String, required: true },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Trainee",
        default: null,
    },
});

const instance_pokemon_model = model(
    "InstancePokemon",
    instance_pokemon_schema
);

export default instance_pokemon_model;
