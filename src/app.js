import "dotenv/config";
import express from "express";
//import mongoose from "mongoose"
import cors from "cors";
import passport from "passport";
import session from "express-session";
import logger from "./utils/logger";
import config from "./config";
import {connect} from "./utils/database.connection";
import {googleAuth} from "./config/google.auth"


const app = express();
const PORT = process.env.PORT || "3073";

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(
  session({
    secret : config.SESSION_SECRET,
    resave : false,
    saveUninitialized : false,
  cookie : {
    secure : false,
    expires : new Date(Date.now() + 10000),
    maxAge : 10000,
  } 
  })
)
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
  res.send("<h2> 🍔🍟🌮🍕🌭🍝🧆........Online Restaurant API.......🍽️🥨🥓🍗🍛🌯 </h2>");
  next();
});

app.listen(PORT, () => {
    logger.info(`Server is up and running on PORT ${PORT}`);
    connect();
    googleAuth(passport);
});