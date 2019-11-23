//this file handles user reqests

const productModel = require('../models/productModel.js');

function search(req, res)
{
    //***ck if person or product id and call correct function
    var personId; //from url query
    productModel.searchByPerson(personId, function(results){
        res.json(results);
    });

    var productId;
    productModel.searchByProduct(productId, function(results){
        res.json(results);
    });
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

    console.log('Creating new product name' + name);

    productModel.insertNewProduct(name, function(error, results){
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

