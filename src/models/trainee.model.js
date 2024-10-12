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
        buddyHistory: [
            { type: mongoose.Schema.Types.ObjectId, ref: "BuddyHistory" },
        ],
        buddy: { ...current_buddy },
        badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
        friends: [
            {
                traineeId: { type: Schema.Types.ObjectId, ref: "Trainee" },
                level: { type: Number, required: true },
            },
        ],
        achievements: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Achievement" },
        ],
        inventory: [
            {
                itemId: { type: Schema.Types.ObjectId, ref: "InventoryItem" },
                quantity: { type: Number, default: 0 },
            },
        ],
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
