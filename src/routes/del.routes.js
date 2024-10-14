import { Router } from "express";
import trainee_model from "../models/trainee.model.js";

const router = Router();

router.route("/trainees").get(async (req, res, next) => {
    const deleted = await trainee_model.deleteMany();
    res.json({
        success: true,
        delete_all: true,
        from_model: req.path.split("/").pop(),
        deleted_count: deleted.deletedCount,
    });
});

export default router;
