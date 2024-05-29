const express = require("express");
const passport = require("passport");
const UserModel = require("../users");
const session = require("express-session");
require('dotenv').config()
const GoogleOAuth = require("passport-google-oauth2").Strategy;
const router = express.Router();


passport.use(new GoogleOAuth({
    clientID: process.env.clientId,
    clientSecret:  process.env.clientsecret,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email",]
}, 
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await UserModel.findOne({googleId:profile.id});

        if (!user) {
            user = await UserModel.create({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
            });

            await user.save();
        }

        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

router.get('/logout', (req, res, next) => {
    // req.session = null;
    req.logout((err) => {
      if (err) next(err);
    });
    res.clearCookie('connect.sid', { path: '/' });
    res.redirect("http://localhost:3000/");
  });


router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google", {
  successRedirect: "http://localhost:3000/home",
  failureRedirect: "http://localhost:3000/"
}));


/*router.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return res.json({ error: "Logout1 failed" });
        }
            req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.redirect("http://localhost:3000/");
        });
        
    });
});*/


module.exports = router;