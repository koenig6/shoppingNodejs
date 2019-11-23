//this file does all the database work

function searchByProduct(productId, callback)
{
    var results = {id:id, name:name}
    callback(null, results)

}

function searchByPerson(personId, callback)
{
    var results = {list:
                   [{id:1, name:'truck'},
                   {id:2, name:'ball'},
                   {id:3, name:'doll'}]};

    callback(null, results)
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
