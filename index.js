const express=require("express")
const app=express()
const {Task}=require("./src/db/config")
const cors=require("cors")
const route11 = require('./src/route/route.js');

app.use(cors)

app.use(express.json())

app.use("/api",route11)
// app.post ("/create",async (req,res)=>{
//     const data=req.body
//     console.log(data)

//     await Task.doc().set(data)
//     res.send({msg:"succress"})
// })

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});