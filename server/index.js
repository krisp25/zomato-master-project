// Env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors"; // stands for "Cross Origin Request"
import helmet from "helmet"; //to enhance the security

// Microservices routes
import Auth from "./API/Auth";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

// Application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "Setup Success 🚀" }));

zomato.listen(4000, () => 
    ConnectDB()
        .then(() => console.log("Server is running 🚀"))
        .catch((error) => console.log(error))
);