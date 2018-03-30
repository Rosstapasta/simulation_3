const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();

const app = express();

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.use( bodyParser.json() );


app.use( session({ 
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db')
    db.find_user([profile.id]).then( users => {
        if(!users[0]){
            db.create_user([profile.id]).then( res => {
                done(null, res[0].id);
                // console.log(res, "registered")
            })
        }else {
            done(null, users[0].id)
            // console.log(users, "sign in")
        }
    })
}))

passport.serializeUser( (id, done) => {
    done(null, id)
    // console.log(id, 'from serializeuser')
})

passport.deserializeUser( (id, done) => {
    // console.log(id, "first deserialized")
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]);
        // console.log(user[0], 'from deserialized')
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    
    //changed successredirect from 3030 to 3000 might have to change back when run build
    successRedirect: 'http://localhost:3000/#/dashboard/',
    failureRedirect: 'http://localhost:3000/'

}))


app.get('/getusers', (req, res, next) => {
    app.get('db').get_all_users(req.user.id).then(
        users => res.status(200).send(users)
        
    )
})

app.get('/getoneuser', (req, res, next) => {
    // console.log(req.user.id, "id off get user from getuser endpoint")
    app.get('db').get_user(req.user.id).then(
        user => res.status(200).send(user)
    )
})

// app.get('/friendvalues', (req, res, next) => {
//     app.get('db').friend_values(req.user.id).then(
//         friends => res.status(200).send(friends)
//     )
// })


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )