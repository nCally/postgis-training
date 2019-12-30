
import express from "express";

const app = express();

app.get('/', function(req,res){
    res.json({msg:'inside'})
})

app.listen(4321, function(){
    console.log('started')
})