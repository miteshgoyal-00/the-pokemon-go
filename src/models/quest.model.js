import { Schema, model } from "mongoose";

const quest_schema = new Schema({});

const quest_model = model("InventoryItem", quest_schema);

export default quest_model;
