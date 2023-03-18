import GoogleStrategy from "passport-google-oauth20";
import config from ".";
import User from "../api/model/user.model";
import logger from "../utils/logger";

const googleAuth = (passport) => {
    GoogleStrategy.Strategy;
  
    passport.use(
      new GoogleStrategy(
        {
          clientID: config.GOOGLE_CLIENT_ID,
          clientSecret: config.GOOGLE_CLIENT_SECRET,
          callbackURL: config.GOOGLE_REDIRECT_URL,
        }, 
        (accessToken, refreshToken, profile, callback) => {
          const userObj = {
            googleId: profile.id,
            displayName: profile.displayName,
            gmail: profile.emails[0].value,
            image: profile.photos[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
          }
            return callback(null, profile);
        }
    ));

    passport.serializeUser((user, callback) => {
        callback(null, user.id);
      });
    
    passport.deserializeUser((id, callback) => {
        callback(null, id);
        
      });

};

export {googleAuth};
    