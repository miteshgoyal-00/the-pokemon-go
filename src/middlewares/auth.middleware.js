import async_handler from "../utils/async-handler.util.js";
import jwt from "jsonwebtoken";
import trainee_model from "../models/trainee.model.js";

const is_logged_in = async_handler(async (req, res, next) => {
    try {
        const incoming_access_token =
            req.cookies.access_token ||
            req.headers.Authorization.replace("Bearer ", "");

        if (!incoming_access_token)
            throw new Error(
                "Access Token not retrieved in the Auth Middleware"
            );

        const decoded = jwt.verify(
            incoming_access_token,
            process.env.ACCESS_TOKEN_SECRET
        );

        if (!decoded) throw new Error("Decoding of Access Token Failed");

        const trainee = await trainee_model
            .findById(decoded._id)
            .select("-refreshToken");
        if (!trainee) throw new Error("Access Token Found Comes to be Invalid");

        req.user = trainee;
        next();
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({ error: error.message });
    }
});

export { is_logged_in };
