import { Router } from "express";
import {
    login_trainee,
    register_trainee,
} from "../controllers/trainee.controllers.js";

const router = Router();

router.route("/register").post(register_trainee);
router.route("/login").post(login_trainee);

export default router;
