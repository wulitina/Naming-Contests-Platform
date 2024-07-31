// process.env
const env = process.env
export const PORT = env.PORT??"8080";
export const HOST = env.host ?? "0.0.0.0";



export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = env.MANGODB_URI??"mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME??"local";

export default {
    PORT,
    HOST,
    SERVER_URL,
};

console.log("Config ..");
