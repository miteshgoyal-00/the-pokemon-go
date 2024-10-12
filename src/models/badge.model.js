import { Schema, model } from "mongoose";

const badge_schema = Schema({
    name: { type: String, required: true },
    dateEarned: { type: Date, required: true },
});

const badge_model = model("Badge", badge_schema);

export default badge_model;
