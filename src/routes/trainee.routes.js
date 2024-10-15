import { Router } from "express";
import {
    fetch_trainee_info,
    register_trainee,
    login_trainee,
    logout_trainee,
} from "../controllers/trainee.controllers.js";
import { is_logged_in } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(register_trainee);
router.route("/login").post(login_trainee);
router.route("/logout").post(is_logged_in, logout_trainee);
router.route("/:name").get(fetch_trainee_info);

export default router;
