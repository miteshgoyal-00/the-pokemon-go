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

        res.status(200).json({
            success: true,
            new_item_creation: "successful",
            item: new_item,
        });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const create_default_items = async_handler(async (req, res) => {
    try {
        const result = await inventory_item_model.insertMany(
            default_inventory_items
        );

        res.status(200).json({
            success: true,
            default_items_creations: "successful",
            creations_count: result.length,
        });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const delete_default_items = async_handler(async (req, res) => {
    try {
        const result = await inventory_item_model.deleteMany({
            name: { $in: default_inventory_items.map((item) => item.name) },
        });

        res.status(200).json({
            success: true,
            default_items_deletions: "successful",
            deletions_count: result.deletedCount,
        });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

const all_inventory_items = async_handler(async (req, res) => {
    const items = await inventory_item_model.find().select("-_id -__v");

    res.status(200).json({
        success: true,
        all_inventory_items: "fetched",
        items_count: items.length,
        items: items,
    });
});

export {
    create_inventory_item,
    create_default_items,
    delete_default_items,
    all_inventory_items,
};
