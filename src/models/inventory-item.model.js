import { Schema, model } from "mongoose";

const item_schema = new Schema({});

const item_model = model("InventoryItem", item_schema);

export default item_model;
