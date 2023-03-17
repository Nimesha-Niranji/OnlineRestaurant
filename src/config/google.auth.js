import GoogleStrategy from "passport-google-oauth20";
import config from ".";
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
            console.log(profile);
            return callback(null, profile);
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
          done(err, user);
        });
      });

    };

    };     