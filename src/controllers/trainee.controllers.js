import async_handler from "../utils/async-handler.util.js";
import trainee_model from "../models/trainee.model.js";

const cookie_options = {
    httpOnly: true,
    secure: true,
};

const gen_access_and_refresh_tokens = async (trainee_id) => {
    const trainee = await trainee_model.findById(trainee_id);

    const access_token = trainee.genToken("access");
    const refresh_token = trainee.genToken("refresh");

    // console.log(access_token, refresh_token);

    if (!trainee.refreshToken) {
        trainee.refreshToken = refresh_token;
        await trainee.save();
    }

    return { access_token, refresh_token };
};

const register_trainee = async_handler(async (req, res) => {
    try {
        // console.log(req.body);
        const { registered_with, id, name } = req.body;

        if (
            [registered_with, id, name].some((field) => {
                typeof field !== "string" || field.trim() === "";
            })
        )
            throw new Error("All fields are required for registeration.");

        // console.log(registered_with, id, name);

        const existing_trainee_with_given_platform =
            await trainee_model.findOne({
                $or: [
                    { "linkedPlatforms.googleId": id },
                    { "linkedPlatforms.facebookId": id },
                ],
            });

        if (existing_trainee_with_given_platform)
            throw new Error(
                "One Trainee Account is already linked with the account."
            );

        const existing_trainee_with_given_name = await trainee_model.findOne({
            name: name,
        });

        if (existing_trainee_with_given_name)
            throw new Error(
                "One Trainee already has the same name. Choose Another Name."
            );

        const linkedPlatforms = {
            platforms: [registered_with],
            ...(registered_with === "Facebook"
                ? { facebookId: id }
                : { googleId: id }),
        };

        const new_trainee = await trainee_model.create({
            name: name,
            linkedPlatforms: linkedPlatforms,
        });

        const { access_token, refresh_token } =
            await gen_access_and_refresh_tokens(new_trainee._id);

        const created_trainee = await trainee_model.findById(new_trainee._id);

        res.status(200)
            .cookie("access_token", access_token, cookie_options)
            .cookie("refresh_token", refresh_token, cookie_options)
            .json({
                success: true,
                registeration: "successful",
                trainee: created_trainee,
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({ error: error.message });
    }
});

const login_trainee = async_handler(async (req, res) => {
    try {
        const { login_with, id } = req.body;

        if (
            [login_with, id].some((field) => {
                typeof field !== "string" || field.trim() === "";
            })
        )
            throw new Error("All fields are required to login");

        const existing_trainee = await trainee_model.findOne({
            $or: [
                { "linkedPlatforms.googleId": id },
                { "linkedPlatforms.facebookId": id },
            ],
        });

        if (!existing_trainee)
            throw new Error("No Trainee Exists with given credentials");

        const { access_token, refresh_token } =
            await gen_access_and_refresh_tokens(existing_trainee._id);

        // console.log(access_token, refresh_token);

        res.status(200)
            .cookie("access_token", access_token, cookie_options)
            .cookie("refresh_token", refresh_token, cookie_options)
            .json({
                success: true,
                login: "successful",
                trainee: existing_trainee,
            });
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({ error: error.message });
    }
});

export { register_trainee, login_trainee };
