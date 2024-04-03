/**
 * Starts the Express server listening on the given port.
 * Logs a message when the server starts listening.
 */
import app from "./src/app.js";
const PORT  = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});