import { Router } from "express";
import {
    create_inventory_item,
    create_default_items,
    delete_default_items,
    all_inventory_items,
} from "../controllers/inventory-item.controllers.js";

const router = Router();

router.route("/all").post(all_inventory_items);
router.route("/create").post(create_inventory_item);
router.route("/create/defaults").post(create_default_items);
router.route("/delete/defaults").post(delete_default_items);

export default router;
