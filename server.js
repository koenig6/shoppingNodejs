require('dotenv').config();

const express = require('express');
var app = express();

const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});


const path = require('path');
const PORT = process.env.PORT || 5000



    app.use(express.static(path.join(__dirname, 'public')))
    app.set('PORT', (process.env.PORT || 5000));
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    app.get('/', (req, res) => res.render('pages/index'))
    app.get('/getShopping', getShopping);

    app.listen(app.get('PORT'), function()
               {
                console.log('listening on port: ', app.get('PORT'));
                });


        var sql = "SELECT * FROM person";

        pool.query(sql, function(err, result) {
            // If an error occurred...
            if (err) {
                        console.log("Error in query: ")
                        console.log(err);
                    }

            // Log this to the console for debugging purposes.
            console.log("Back from DB with result:");
            console.log(result.rows);


        });

function getShopping(req, res)
{
    console.log('inside getShopping');

}


