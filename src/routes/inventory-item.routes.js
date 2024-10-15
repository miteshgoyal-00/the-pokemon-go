import { Router } from "express";
import {
    create_inventory_item,
    create_default_items,
    delete_default_items,
    all_inventory_items,
} from "../controllers/inventory-item.controllers.js";

const router = Router();

router.route("/").post(create_inventory_item);

router
    .route("/defaults")
    .post(create_default_items)
    .delete(delete_default_items);

router.route("/all").get(all_inventory_items);

export default router;
