const express = require('express');
const router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User1 = {
  name: "Taro",
  password: "Taro123"
};


passport.use(new LocalStrategy(
  (username, password, done) => {

    if(username !== User1.name){
      // Error
      return done(null, false);
    } else if(password !== User1.password) {
      // Error
      return done(null, false);
    } else {
      // Success and return user information.
      return done(null, { username: username, password: password});
    }
  }
));

router.use(passport.initialize());


router.get('/', (req, res) => res.render('index'));

router.post('/',
  (req, res, next) => {
    console.log(req);
    next();
  },
  passport.authenticate('local',
    {
      session: false,
      failureRedirect : '/failure'
    }
  ),
  (req, res) => {
    console.log(req.user);
    res.send('Success');
  }
);

module.exports = router;
