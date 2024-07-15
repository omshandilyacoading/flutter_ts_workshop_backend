import express, { Express } from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/routes";
// import router from "./routes";

// Express configuration
const app: Express = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");

dotenv.config();

// Use the router
app.use("/api/v1", router);

// Mongo Connection
const mongoURI = process.env.MONGO_DB_URI;

if (!mongoURI) {
    console.error("MongoDB URL not defined");
    process.exit(1);
}

mongoose
    .connect(mongoURI, {})
    .then(() => {
        console.log("MongoDB is Connected");
    })
    .catch((error) => {
        console.log(error);
    });

// Starting the server
try {
    const port: number = app.get("PORT");
    const baseUrl: string = app.get("BASE_URL");
    server.listen(port, (): void => {
        console.log(`Server is Listening on http://${baseUrl}:${port}`);
    });
} catch (error) {
    console.log(error);
}

export default server;
