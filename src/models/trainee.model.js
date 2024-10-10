import { Schema, model } from "mongoose";

const linked_platforms = {
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
    linkedPlatforms: linked_platforms,
    // xp to reach next level
    xp: {
        type: Number,
        default: 0,
    },
    // lifetime xp earned
    totalXp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
        min: 1,
        max: 50,
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

trainee_schema.pre("save", function (next) {
    if (this.isModified("xp")) {
        this.calculateLevel(this.xp);
    }
    next();
});

trainee_schema.methods.calculateLevel = function (xp) {
    const checkpoints = [
        0, 5000, 10000, 15000, 20000, 30000, 40000, 50000, 75000, 100000,
        125000, 150000, 175000, 200000, 300000, 400000, 500000, 600000, 700000,
        800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1500000,
        1600000, 1700000, 1800000, 1900000, 2000000, 2100000, 2200000, 2300000,
        2400000, 2500000, 2600000, 2700000, 2800000, 2900000, 3000000, 3100000,
        3200000, 3300000, 3400000, 3500000, 3600000, 3700000, 3800000, 3900000,
        4000000,
    ];

    for (let i = checkpoints.length - 1; i >= checkpoints[i]; i--) {
        if (xp >= checkpoints[i]) {
            this.level = i + 1;
            this.totalXp += xp;
            this.xp = xp - checkpoints[this.level - 1];
            break;
        }
    }
};

const trainee_model = model("Trainee", trainee_schema);

export default trainee_model;
