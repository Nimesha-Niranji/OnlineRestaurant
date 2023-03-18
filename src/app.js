import "dotenv/config";
import express from "express";
//import mongoose from "mongoose"
import cors from "cors";
import passport from "passport";
import session from "express-session";
import logger from "./utils/logger";
import config from "./config";
import MongoStore from "connect-mongo";
import {connect} from "./utils/database.connection";
import {googleAuth} from "./config/google.auth";
import {routesInit} from "./api/routes";


const app = express();
const PORT = process.env.PORT || "3073";

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(
  session({
    secret : config.SESSION_SECRET,
    resave : false,
    saveUninitialized : false,
    store : MongoStore.create({mongoUrl: config.DB_CONNECTION_STRING }),
  cookie : {
    secure : false,
    expires : new Date(Date.now() + 10000),
    maxAge : 10000,
  } 
  })
)
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/user', require('./api/routes/userRouter'))
app.use('/api', require('./api/routes/categoryRouter'))
app.use('/api', require('./api/routes/upload'))
app.use('/api', require('./api/routes/productRouter'))


app.get("/", (req, res, next) => {
  res.send("<h2> 🍔🍟🌮🍕🌭🍝🧆........Online Restaurant API.......🍽️🥨🥓🍗🍛🌯 </h2>");
  //res.send("<a href = 'http://localhost:3073/auth/google'>Loin with Google</a>");
  next();
});

app.listen(PORT, () => {
    logger.info(`Server is up and running on PORT ${PORT}`);
    connect();
    routesInit(app, passport);
    googleAuth(passport);
});