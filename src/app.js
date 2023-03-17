import express from "express";
//import mongoose from "mongoose"
import cors from "cors";
import passport from "passport";
import "dotenv/config";
import logger from "./utils/logger";
import {connect} from "./utils/database.connection";
import {googleAuth} from "./config/google.auth"


const app = express();
const PORT = process.env.PORT || "3073";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2> 🍔🍟🌮🍕🌭🍝🧆........Online Restaurant API.......🍽️🥨🥓🍗🍛🌯 </h2>");
  next();
});

app.listen(PORT, () => {
    logger.info(`Server is up and running on PORT ${PORT}`);
    connect();
    googleAuth(passport);
});