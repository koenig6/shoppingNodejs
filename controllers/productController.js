//this file handles user reqests

const productModel = require('../models/productModel.js');

function search(req, res)
{
    console.log('You are inside search function');
    //***ck if person or product id and call correct function
    var name = req.query.name;//from url query
    console.log('This is the req.body.name variable ' + name);

    productModel.searchByPerson(name, function(error, results){
        console.log('inside search in productController ' + name);
        res.json(results);
        console.log(results);
    });

    var productId;
   /* productModel.searchByProduct(productId, function(results){
        res.json(results);
    });*/
}

function getProductList(req, res)
{
    console.log('Getting product list...');

    productModel.getAllProduct(function(error, results){
          res.json(results);
    });
}

function getProduct(req, res)
{
    var id = req.query.id;

    console.log('Getting product...' + id);

    productModel.getProductById(id, function(error, results){
        res.json(results)
    });
}

function postProduct(req, res)
{
     var name = req.body.name;
     var product = req.body.product;
    var store = req.body.store;

    console.log('Creating new gift ' + name + " " + product + " " + store);

    productModel.insertNewProduct(name, product, store, function(error, results){
        res.json(results);
    });
}

//list of all functions to be exported for other files access
module.exports = {
    search: search,
    getProductList: getProductList,
    getProduct: getProduct,
    postProduct: postProduct
};

