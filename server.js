const connectionString = process.env.DATABASE_URL || 'postgres://wrohewbrwwkqcb:2a47f3cbc1bdf6d7bc104467b67660e689ff570b21a31e941aac5234a005258c@ec2-174-129-253-42.compute-1.amazonaws.com:5432/d7aodf9tme2c4q?ssl=true';


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool(
    {
    //connectionString: process.env.DATABASE_URL,
    //ssl:true
        const pool = new Pool({connectionString: connectionString});
    });


express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
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


    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
