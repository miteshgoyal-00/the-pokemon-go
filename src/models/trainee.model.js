import { Schema, model } from "mongoose";

const linkedPlatforms = {
    googleId: {
        type: String,
        required: function () {
            return (
                this.connections &&
                this.connections.platforms.includes("Google")
            );
        },
        unique: true,
    },
    facebookId: {
        type: String,
        required: function () {
            return (
                this.connections &&
                this.connections.platforms.includes("Facebook")
            );
        },
        unique: true,
    },
    platforms: {
        type: [String],
        enum: ["Facebook", "Google"],
        required: true,
    },
};

const trainee_schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    linkedPlatforms: linkedPlatforms,
    level: {
        type: Number,
        default: 1,
        min: 1,
        max: 50,
    },
    xp: {
        type: Number,
        default: 0,
    },
    team: {
        type: String,
        enum: ["Mystic", "Valor", "Instinct"],
        required: function () {
            return this.level >= 10;
        },
    },
    pokemons: [
        {
            type: Schema.Types.ObjectId,
            ref: "Pokemon",
        },
    ],
    buddy: {
        pokemon: {
            type: Schema.Types.ObjectId,
            ref: "Pokemon",
        },
        level: {
            type: Number,
            required: true,
        },
    },
    badges: [
        {
            name: {
                type: String,
                required: true,
            },
            dateEarned: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    friends: [
        {
            name: {
                type: Schema.Types.ObjectId,
                ref: "Trainee",
            },
            level: {
                type: Number,
                required: true,
            },
        },
    ],
    achievements: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
            dateAchieved: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    coins: {
        type: Number,
        default: 0,
    },
    inventory: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: "InventoryItem",
            },
            quantity: {
                type: Number,
                default: 0,
            },
        },
    ],
    quests: [
        {
            questId: {
                type: Schema.Types.ObjectId,
                ref: "Quest",
            },
            status: {
                type: String,
                enum: ["Not Started", "In Progress", "Completed"],
                default: "Not Started",
            },
        },
    ],
});

const trainee_model = model("Trainee", trainee_schema);

export default trainee_model;
