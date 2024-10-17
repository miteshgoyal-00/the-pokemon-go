import async_handler from "../utils/async-handler.util.js";
import inventory_item_model from "../models/inventory-item.model.js";
import { default_inventory_items } from "../constants/inventory-item.constants.js";

const create_inventory_item = async_handler(async (req, res) => {
    try {
        const { name, description, category } = req.body || req.headers;

        if (
            [name, description, category].some((field) => {
                typeof field !== "string" || field.trim() === "";
            })
        )
            throw new Error(
                "All of Name, Description, Category Fields are required to create an Inventory Item."
            );

        const existing_item = await inventory_item_model.findOne({ name });

        if (existing_item)
            throw new Error(
                "An item with same name already exists in InventoryItems"
            );

        const new_item = await inventory_item_model.create({
            name,
            description,
            category,
        });

        res.success(200, "new item creation successful", {
            item: new_item,
        });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.failure(400, error.message);
    }
});

const create_default_items = async_handler(async (req, res) => {
    try {
        const result = await inventory_item_model.insertMany(
            default_inventory_items
        );

        res.success(200, "default items creation successful", {
            creation_count: result.length,
        });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.failure(400, error.message);
    }
});

const delete_default_items = async_handler(async (req, res) => {
    try {
        const result = await inventory_item_model.deleteMany({
            name: { $in: default_inventory_items.map((item) => item.name) },
        });

        res.success(200, "default items deletion successful", {
            deletion_count: result.deletedCount,
        });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.failure(400, error.message);
    }
});

const all_inventory_items = async_handler(async (req, res) => {
    const items = await inventory_item_model.find().select("-_id -__v");

    res.success(200, "all inventory items fetched", {
        items_count: items.length,
        items: items,
    });
});

const controller_functions = {
    create_inventory_item,
    create_default_items,
    delete_default_items,
    all_inventory_items,
};

export default controller_functions;
