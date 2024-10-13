import { Router } from "express";
import { add_inventory_item } from "../controllers/inventory-item.controllers.js";

const router = Router();

router.route("/create").post(add_inventory_item);

export default router;
