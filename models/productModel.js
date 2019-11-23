//this file does all the database work

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

function searchByProduct(productId, callback)
{
    var results = {id:1, name:'name'}
    callback(null, results)

}

function searchByPerson(name, callback)
{
    console.log('searching the DB for person: ' + name);

    var sql = 'SELECT person_id, person_name FROM person WHERE person_name=$1::text';

    var params = [name];

    pool.query(sql, params, function(err, db_results){
        if(err)
            {
                throw err;
            }
        else
            {
                console.log('This is pool.query call back function');
                console.log('db_results');

                var results = {list:db_results.rows};

                callback(null, results)
            }
    });
}

function getAllProduct(callback)
{
    var results = {
        product: [
            {product_id:1, product_name:"cat"},
            {product_id:2, product_name:"ball"},
            {product_id:3, product_name:"truck"},
            {product_id:4, product_name:"computer"},
        ]
    }
   callback(null, results);
}

function getProductById(id, callback)
{
     var results = {id: id, name: 'cat'};

    callback(null, results);
}

function insertNewProduct(name, callback)
{
    var results = {success:true};

    callback(null, results);

}

//list of all functions to be exported for other files access
module.exports = {
    searchByProduct: searchByProduct,
    searchByPerson: searchByPerson,
    getAllProduct: getAllProduct,
    getProductById: getProductById,
    insertNewProduct: insertNewProduct
};
