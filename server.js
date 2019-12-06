require('dotenv').config();
var $ = require('jquery');
const express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');

const personController = require('./controllers/personController.js');
const productController = require('./controllers/productController.js')

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({extended: true})); //url encoded bodies
    app.use(express.json());  // json encoded bodies
    app.set('PORT', (process.env.PORT || 5000));
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')

    app.get('/persons', personController.getPersonList);
    app.get('/person', personController.getPerson);
    //post is for adding new person
    app.post('/person', personController.postPerson);

    app.get('/search', productController.search);

    app.get('/products', productController.getProductList);
    app.get('/product', productController.getProduct);
    //post is for adding new products
    app.post('/product', productController.postProduct);

    app.listen(PORT, function(){console.log(`Listening on`, PORT);});


function getShopping(req, res)
{
    console.log('inside getShopping');

    var name = req.query.name;
    var product = req.query.product;
    var store = req.query.store;

   console.log('Retrieving person name: ', name);

     getPersonFromDB(name, function(error, result){
        console.log('back from the getPerson function with result: ', result);
         res.json(result);
     });
}

function  getPersonFromDB(name, callback)
{
      console.log('getPersonFromDB called with name:', name);

    var sql = "SELECT person_name FROM person WHERE person_name = $1 ";

    var params = [name];
     pool.query(sql, params, function(err, result){
         if(err)
             {
                   console.log('An Error with the DB occured');
                   console.log(err);
                   callback(err, null);
             }
         if(result)
             {
                 console.log('found DB result: ' + JSON.stringify(result.rows));
                callback(null, result.rows);
             }
     });

}



