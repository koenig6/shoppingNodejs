//this file handles user reqests

const personModel = require('../models/personModel.js');

function getPersonList(req,res)
{
    console.log('Getting person list...');

    personModel.getAllPeople(function(error, results){
          res.json(results);
    });
}

function getPerson(req,res)
{
    var id = req.query.id;

    console.log('Getting person...' + id);

    personModel.getPersonById(id, function(error, results){
        res.json(results)
    });
}

function postPerson(req, res)
{
    var name = req.query.name;

    console.log('Creating new name' + name);

    personModel.insertNewPerson(name, function(error, results){
        res.json(results);
    });
}

//list of all functions to be exported for other files access
module.exports = {
    getPersonList: getPersonList,
    getPerson: getPerson,
    postPerson: postPerson
};
