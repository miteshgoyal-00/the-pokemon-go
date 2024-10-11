import { Schema, model } from "mongoose";

const pokemon_iv = {
    attack: {
        type: Number,
        min: 0,
        max: 15,
        required: true,
    },
    defense: {
        type: Number,
        min: 0,
        max: 15,
        required: true,
    },
    hp: {
        type: Number,
        min: 0,
        max: 15,
        required: true,
    },
};

const pokemon_schema = new Schema({
    specy: {
        type: String,
        required: true,
    },
    type: {
        type: [String],
        enum: [
            "Normal",
            "Fire",
            "Water",
            "Electric",
            "Grass",
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
    level: {
        type: Number,
        min: 0,
        max: 40,
        required: true,
    },
    cp: {
        type: Number,
        required: true,
        min: 1,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    iv: pokemon_iv,
    gender: {
        type: String,
        enum: ["Male", "Female", "Null"],
        required: true,
    },
    fastTM: {
        name: {
            type: String,
            required: true,
        },
        power: {
            type: Number,
            required: true,
        },
    },
    chargedTMs: {
        ctm1: {
            name: {
                type: String,
                required: true,
            },
            power: {
                type: Number,
                required: true,
            },
        },
        ctm2: {
            name: {
                type: String,
                required: function() {
                    return this.chargedTMs.total === 2;
                },
            },
            power: {
                type: Number,
                required: function() {
                    return this.chargedTMs.total === 2;
                },
            },
        },
        total: {
            type: Number,
            enum: [1, 2],
            default: 1,
        },
    },
});

const pokemon_model = model("Pokemon", pokemon_schema);

export default pokemon_model;
