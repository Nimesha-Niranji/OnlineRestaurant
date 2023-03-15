import mongoose from "mongoose";
import config from "../config";
import logger from "../utils/logger";

let database;

const connect = async () => {
  const MONGODB_URL = config.DB_CONNECTION_STRING;
  //process.env.MONGODB_URL;

  if (database) return;

  mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      database = connection;
      logger.info("Database Synced");
    })
    .catch((err) => {
      logger.error(err.message);
    });
};

export {connect};