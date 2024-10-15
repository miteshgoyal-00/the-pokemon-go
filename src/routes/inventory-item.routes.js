import { Router } from "express";
import controllers from "../controllers/inventory-item.controllers.js";

const router = Router();

router.route("/").post(controllers.create_inventory_item);

router
    .route("/defaults")
    .post(controllers.create_default_items)
    .delete(controllers.delete_default_items);

router.route("/all").get(controllers.all_inventory_items);

export default router;
