require('dotenv').config();
var $ = require('jquery');
const express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
var session = require('express-session')

const personController = require('./controllers/personController.js');
const productController = require('./controllers/productController.js')

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

    app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({extended: true})); //url encoded bodies
    app.use(express.json());  // json encoded bodies
    app.set('PORT', (process.env.PORT || 5000));
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')

    app.post('/login', function(req, res)
    {
        if(req.session.username)
            {
                console.log(req.body.username + 'inside session');

            }
             console.log(req.body.username + 'body.username');
        console.log(req.body.password);
        req.session.password = req.body.password;

        if (req.body.username == 'admin' && req.body.password == 'password')
            {
                var results = {success: true};
                console.log(results + ' results');
                 req.session.username = req.body.username;
                console.log( req.session.username + ' sesson assignment');


            }
        else
            {
                console.log('Nope')
            }
             });

    app.post('/logout', function(req, res)
    {

    });


 app.listen(PORT, function(){console.log(`Listening on`, PORT);});


