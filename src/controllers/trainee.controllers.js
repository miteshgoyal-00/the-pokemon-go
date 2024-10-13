import async_handler from "../utils/async-handler.util.js";
import trainee_model from "../models/trainee.model.js";

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

        const created_trainee = await trainee_model.findById(new_trainee._id);

        res.status(200).json(created_trainee);
    } catch (error) {
        console.log("ERROR CAUGHT: ", error.message);
        res.status(400).json({ error: error.message });
    }
});

export { register_trainee };
