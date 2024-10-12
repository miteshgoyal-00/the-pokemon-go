import { Schema, model } from "mongoose";

const inventory_item_schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

const inventory_item_model = model("InventoryItem", inventory_item_schema);

export default inventory_item_model;
