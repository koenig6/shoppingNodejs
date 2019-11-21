require('dotenv').config();
const connectionString = process.env.DATABASE_URL;
const express = require('express');
var app = express();

const path = require('path');
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool(
    {
        connectionString: connectionString
    });

    app.use(express.static(path.join(__dirname, 'public')))
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    app.get('/', (req, res) => res.render('pages/index'))
    app.get('/getShopping', getShopping )
    /*.get('/db', async (req, res) =>
       {
            try{
                const client = await pool.connect()
                const result = await client.query('SELECT * FROM store');
                const results = {'results': (result) ? result.rows : null};
                res.render('pages/db', results);
                client.release();
            }//end of try
            catch(err)
                {
                    console.error(err);
                    res.send("Error " + err);
                }//end catch
        })*/

    app.listen(app.get('PORT'), function()
               {
                console.log('listening on port: ', app.get('PORT'));
                });


        var sql = "SELECT * FROM store";

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
    console.log("Inside getShopping function");

    var store_id = req.query.store_id;
    console.log(" Retrieving store with id: ", store_id);


    getShoppingFromDb(store_id, function(err, res)
                      {
                       console.log('Back from the database with results: ', res);

                    });
    var res = {store_id: 1, store_name: 'ross'};
    res.json(res);
}

function getShoppingFromDb(store_id, callback)
{
    console.log("Inside getShoppingFromDb: ", store_id);

    var sql = "SELECT store_id, store_name From store WHERE store_id = $1::int";

    var params = [store_id];

    pool.query(sql, params, function(err, res)
              {
        if(err){
            console.log('Database error occured');
            console.log(err);
        }
        console.log('found DB result: ' + JSON.stringify(res.rows));

        callback(null, res.rows);
    });
}
