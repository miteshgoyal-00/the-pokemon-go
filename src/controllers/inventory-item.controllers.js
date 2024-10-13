import async_handler from "../utils/async-handler.util.js";
import inventory_item_model from "../models/inventory-item.model.js";

const add_inventory_item = async_handler(async (req, res, next) => {
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
});

export { add_inventory_item };
