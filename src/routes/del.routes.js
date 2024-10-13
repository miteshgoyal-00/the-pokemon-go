import { Router } from "express";
import trainee_model from "../models/trainee.model.js";

const router = Router();

router.route("/trainees").get(async (req, res, next) => {
    await trainee_model.deleteMany();
    res.json({
        success: true,
        deleteAll: true,
        fromModel: req.path.split("/").pop(),
    });
});

export default router;
