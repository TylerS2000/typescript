import express from  'express'


const app = express()

app.get('/hello',(_req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("running");
    
})


