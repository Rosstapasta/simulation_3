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
            })
        }else {
            done(null, users[0].id)
        }
    })
}))

passport.serializeUser( (id, done) => {
    done(null, id)
})

passport.deserializeUser( (id, done) => {
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    
    //changed redirect from 3030 to 3000 might have to change back when run build
    successRedirect: 'http://localhost:3000/#/dashboard/',
    failureRedirect: 'http://localhost:3000/#/'

}))



app.get('/getnotfriends', (req, res, next) => {

    if(req.user){
        app.get('db').get_not_friends(req.user.id).then(
            users => res.status(200).send(users)     
        )
    }
})

app.get('/getoneuser', (req, res, next) => {
        if(req.user){
              res.status(200).send([req.user])
        }else{
            res.status(200).send([{id: 0}])
        }
})

app.post('/newfriend', (req, res, next) => {
    const { val } = req.body;
    app.get('db').make_friend(req.user.id, val).then(
        data => res.status(200).send(data)
    )
})

app.put('/updateuser', (req, res, next) => {
    const { firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear } = req.body;

 app.get('db').update_user(req.user.id, firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear ).then( user => res.status(200).send(user))
})

app.get('/getallusers', (req, res, next) => {
    const {value, limit} = req.query;
    app.get('db').get_all_users(req.user.id, value, limit ).then(
     users => 
     res.status(200).send(users)
    )
})


app.get('/friendvalues', (req, res, next) => {
    app.get('db').friend_values(req.user.id).then(
        friends => res.status(200).send(friends)  
    )
})

app.post('/unfriend', (req, res, next) => {
    const {val} = req.body;
    app.get('db').unfriend(req.user.id, val).then( resp =>
        res.status(200).send(resp)
    )
})


app.get('/getusercount', (req, res, next) => {
    app.get('db').getCount(req.user.id).then( resp => res.status(200).send(resp))
})

app.get('/auth/logout', (req,res) => {
    req.logOut();
    res.redirect('http://localhost:3000/')
})


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`) )