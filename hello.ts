import express from  'express';
import calculateBmi from './calculateBmi';
//import qs from 'qs'

const app = express();

app.get('/hello',(_req,res)=>{
    res.send("hello");
});

app.get('/bmi',(req,res)=>{
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    if(!height||!weight){
        res.send("bad params");
    }
    else{
    const result = calculateBmi(height,weight);
    res.send(result);}
});

app.listen(3000,()=>{
    console.log("running");
});


