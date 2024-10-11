import { Schema, model } from "mongoose";

const badge_schema = new Schema({});

const badge_model = model("InventoryItem", badge_schema);

export default badge_model;
