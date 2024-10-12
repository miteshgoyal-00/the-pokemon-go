import { Schema, model } from "mongoose";

const achievement_schema = Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateAchieved: { type: Date, required: true },
});

const achievement_model = model("Achievement", achievement_schema);

export default achievement_model;
