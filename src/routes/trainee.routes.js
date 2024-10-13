import { Router } from "express";
import { register_trainee } from "../controllers/trainee.controllers.js";

const router = Router();

router.route("/register").post(register_trainee);

export default router;
