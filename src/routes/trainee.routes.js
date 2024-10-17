import { Router } from "express";
import controllers from "../controllers/trainee.controllers.js";
import { is_logged_in } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(controllers.register_trainee);
router.route("/login").post(controllers.login_trainee);
router.route("/logout").post(is_logged_in, controllers.logout_trainee);
router
    .route("/:name")
    .get(controllers.fetch_trainee_info)
    .delete(controllers.delete_trainee_account);

export default router;
