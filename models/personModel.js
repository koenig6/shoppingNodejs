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
    var results = {success:true};

    callback(null, results);

}

//list of all functions to be exported for other files access
module.exports = {
    getAllPeople: getAllPeople,
    getPersonById: getPersonById,
    insertNewPerson: insertNewPerson
};
