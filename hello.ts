import express from  'express';
import calculateBmi from './calculateBmi';
import calculateExercises from './exerciseCalculator';

const app = express();

app.use(express.json());

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

app.post("/exercises", (req,res)=>{
    interface exercise{
        dailyExercises:Array<number>
        target:number
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body:exercise = req.body;
    console.log(body);
    if (!body.dailyExercises || !body.target) {
        res.send("missing parameters");
    }
   const calculatedExercises= calculateExercises(body.dailyExercises,body.target);
    res.send(calculatedExercises);
});

app.listen(3000,()=>{
    console.log("running");
});


