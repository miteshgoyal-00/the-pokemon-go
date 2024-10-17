import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import custom_responses from "./middlewares/response.middleware.js";

import delRouter from "./routes/del.routes.js";
import traineeRouter from "./routes/trainee.routes.js";
import inventoryItemRouter from "./routes/inventory-item.routes.js";
import instancePokemonRouter from "./routes/instance-pokemon.routes.js";
import pokedexPokemonRouter from "./routes/pokedex-pokemon.routes.js";
import questRouter from "./routes/quest.routes.js";
import achievementRouter from "./routes/achievement.routes.js";
import badgeRouter from "./routes/badge.routes.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(custom_responses.response_failure);
app.use(custom_responses.response_success);

app.use("/trainee", traineeRouter);
app.use("/inventory-item", inventoryItemRouter);
app.use("/instance-pokemon", instancePokemonRouter);
app.use("/pokedex-pokemon", pokedexPokemonRouter);
app.use("/quest", questRouter);
app.use("/achievement", achievementRouter);
app.use("/badge", badgeRouter);

// just util to clear all data of specific model if needed
app.use("/del/all/data", delRouter);

export default app;
