import { Schema, model } from "mongoose";

const quest_schema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dateStarted: { type: Date, required: true },
});

const quest_model = model("Quest", quest_schema);

export default quest_model;
