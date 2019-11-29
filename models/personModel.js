//this file does all the database work

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

function getAllPeople(callback)
{
    var results = {
        person: [
            {person_id:1, person_name:"bob"},
            {person_id:2, person_name:"tom"},
            {person_id:3, person_name:"rebecca"},
            {person_id:4, person_name:"micelle"},
        ]
    }
   callback(null, results);
}

function getPersonById(id, callback)
{
    var results = {id: id, name: 'tom'};

    callback(null, results);
}

function insertNewPerson(name, callback)
{
    console.log('Inside insertNewPerson function in personModel.js');
    //var results = {success:true};

    var sql = 'INSERT INTO person (person_name) VALUES=$1::text';

    var params = [name];

    pool.query(sql, params, function(err, db_insert){
        if(err)
            {
                throw err;
            }
        else{
            console.log('Inserting into database' + name);
        }
    })

    callback(null, sql);

}

//list of all functions to be exported for other files access
module.exports = {
    getAllPeople: getAllPeople,
    getPersonById: getPersonById,
    insertNewPerson: insertNewPerson
};
