import dotenv from "dotenv";
import app from "./src/app.js";
import db_connection from "./src/db/config.db.js";

dotenv.config({
    src: "./.env",
});

const PORT = process.env.PORT || 4000;

await db_connection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`INDEX.JS: Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("INDEX.JS: Error starting server: ", error);
    });
