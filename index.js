import dotenv from "dotenv";
import app from "./src/app.js";
import db_connection from "./src/db/config.db.js";
import "./src/utils/console.util.js";

dotenv.config({
    src: "./config/.env",
});

const PORT = process.env.PORT || 4000;

await db_connection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error starting server: ", error);
    });
