
import express from "express";
import pool from "../config";
import bodyParser from "body-parser";
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', async function(req,res){
    pool.query('SELECT first_name, last_name FROM customer LIMIT 5', function(error,result){
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
})

app.listen(4321, async function(){
    console.log('started > 4321')

})