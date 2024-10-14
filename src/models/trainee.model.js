import { Schema, model } from "mongoose";
import { trainee_level_checkpoints } from "../constants.js";
import jwt from "jsonwebtoken";

const linked_platforms = {
    googleId: {
        type: String,
        unique: true,
        sparse: true,
        required: function () {
            return (
                this.connections &&
                this.connections.platforms.includes("Google")
            );
        },
    },
    facebookId: {
        type: String,
        unique: true,
        sparse: true,
        required: function () {
            return (
                this.connections &&
                this.connections.platforms.includes("Facebook")
            );
        },
    },
    platforms: {
        type: [String],
        enum: ["Facebook", "Google"],
        required: true,
    },
};

const current_buddy = {
    pokemon: { type: Schema.Types.ObjectId, ref: "InstancePokemon" },
    hearts: { type: Number, required: true, default: 0, max: 300 },
    status: {
        type: String,
        enum: ["Good Buddy", "Great Buddy", "Ultra Buddy", "Best Buddy"],
        default: "Good Buddy",
    },
    bonuses: {
        type: [String],
        default: ["Adventuring Buddy", "Readable Mood"],
    },
    walkDistance: { type: Number, default: 0 },
    treatsFed: { type: Number, default: 0 },
    playedTogether: { type: Number, default: 0 },
    battlesTogether: { type: Number, default: 0 },
    snapshotsTaken: { type: Number, default: 0 },
    newPlacesVisited: { type: Number, default: 0 },
    routesFollowedTogether: { type: Number, default: 0 },
};

const trainee_schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        linkedPlatforms: { ...linked_platforms },
        xp: { type: Number, default: 0 },
        totalXp: { type: Number, default: 0 },
        level: { type: Number, default: 1, min: 1, max: 50 },
        team: {
            type: String,
            enum: ["Mystic", "Valor", "Instinct"],
            required: function () {
                return this.level >= 10;
            },
        },
        pokecoins: { type: Number, default: 0 },
        stardust: { type: Number, default: 0 },
        distanceWalked: { type: Number, default: 0 },
        pokemonsCaught: { type: Number, default: 0 },
        pokestopsVisited: { type: Number, default: 0 },
        startDate: { type: Date },
        pokemons: [
            {
                instanceSpecyId: {
                    type: Schema.Types.ObjectId,
                    ref: "InstancePokemon",
                },
                candies: { type: Number, default: 0 },
                xlCandies: { type: Number, default: 0 },
                isFavourite: { type: Boolean, default: false },
                isBuddy: { type: Boolean, default: false },
            },
        ],
        pokemonStorageCapacity: { type: Number, default: 300 },
        buddyHistory: [{ type: Schema.Types.ObjectId, ref: "BuddyHistory" }],
        buddy: { ...current_buddy },
        badges: [{ type: Schema.Types.ObjectId, ref: "Badge" }],
        friends: [
            {
                traineeId: { type: Schema.Types.ObjectId, ref: "Trainee" },
                level: { type: Number, required: true },
            },
        ],
        achievements: [{ type: Schema.Types.ObjectId, ref: "Achievement" }],
        inventory: [
            {
                itemId: { type: Schema.Types.ObjectId, ref: "InventoryItem" },
                quantity: { type: Number, default: 0 },
            },
        ],
        inventoryStorageCapacity: { type: Number, default: 350 },
        quests: [
            {
                questId: { type: Schema.Types.ObjectId, ref: "Quest" },
                status: {
                    type: String,
                    enum: ["Not Started", "In Progress", "Completed"],
                    default: "Not Started",
                },
            },
        ],
        refreshToken: { type: String },
    },
    { timestamps: true }
);

trainee_schema.pre("save", function (next) {
    if (this.isModified("xp")) {
        this.calculateLevel(this.xp);
    }
    if (this.isModified("buddy.hearts")) {
        this.updateBuddyStatus();
    }
    if (!this.startDate) {
        this.startDate = this.createdAt;
    }
    next();
});

trainee_schema.methods.updateBuddyStatus = function () {
    const buddy = this.buddy;
    const bonusesEnum = [
        "Adventuring Buddy",
        "Readable Mood",
        "Catch Assist",
        "Find Presents",
        "Find Locations",
        "Find Souvenirs",
        "CP Boost",
        "Best Buddy Ribbon",
    ];

    if (buddy.hearts >= 300) {
        buddy.status = "Best Buddy";
        buddy.bonuses = bonusesEnum.slice(0, 8);
    } else if (buddy.hearts >= 140) {
        buddy.status = "Ultra Buddy";
        buddy.bonuses = bonusesEnum.slice(0, 6);
    } else if (buddy.hearts >= 60) {
        buddy.status = "Great Buddy";
        buddy.bonuses = bonusesEnum.slice(0, 4);
    } else {
        buddy.status = "Good Buddy";
        buddy.bonuses = bonusesEnum.slice(0, 2);
    }
};

trainee_schema.methods.calculateLevel = function (xp) {
    const checkpoints = trainee_level_checkpoints;

    for (let i = checkpoints.length - 1; i >= 0; i--) {
        if (xp >= checkpoints[i]) {
            this.level = i + 1;
            this.totalXp += xp;
            this.xp = xp - checkpoints[this.level - 1];
            break;
        }
    }
};

trainee_schema.methods.genToken = function (type) {
    const payload = {
        _id: this._id,
        ...(type === "access" && {
            name: this.name,
            cp: this.cp,
            level: this.level,
            xp: this.xp,
            linkedPlatforms: this.linkedPlatforms,
        }),
    };

    const secret =
        type === "access"
            ? process.env.ACCESS_TOKEN_SECRET
            : process.env.REFRESH_TOKEN_SECRET;

    const expiry =
        type === "access"
            ? process.env.ACCESS_TOKEN_EXPIRY
            : process.env.REFRESH_TOKEN_EXPIRY;

    return jwt.sign(payload, secret, {
        expiresIn: expiry,
    });
};

const trainee_model = model("Trainee", trainee_schema);

export default trainee_model;
