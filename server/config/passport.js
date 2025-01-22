// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models'); // Your Sequelize user model

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback', // This must match the authorized redirect URI in Google Cloud
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // profile contains user info from Google
        // e.g. profile.emails[0].value, profile.displayName, etc.

        // 1) Check if user already exists in DB
        // let existingUser = await User.findOne({ where: { googleId: profile.id } });
        
        // or if you want to match by email:
        let existingUser = await User.findOne({ where: { email: profile.emails[0].value } });

        if (!existingUser) {
          // 2) Create a new user record
          existingUser = await User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            // You can also store a default password or null for Google accounts
            password: null,
            // store any other fields you might need
          });
        }

        // 3) done(null, user) => passes user to the next stage (serializeUser)
        return done(null, existingUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);


module.exports = passport;
