import { Schema, model } from "mongoose";

const buddy_history_schema = Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InstancePokemon",
        required: true,
    },
    chosenDate: { type: Date, required: true },
    swapDate: { type: Date, default: null },
    totalDaysTogether: { type: Number, default: 0 },
    walkDistance: { type: Number, default: 0 },
    treatsFed: { type: Number, default: 0 },
    playedTogether: { type: Number, default: 0 },
    battlesTogether: { type: Number, default: 0 },
    snapshotsTaken: { type: Number, default: 0 },
    newPlacesVisited: { type: Number, default: 0 },
    routesFollowedTogether: { type: Number, default: 0 },
});

const buddy_history_model = model("BuddyHistory", buddy_history_schema);

export default buddy_history_model;
