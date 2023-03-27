const express=require("express")
const app=express()
const {Task}=require("./db/config")
const cors=require("cors")
const route = require('./route/route.js');

app.use(express.json())
app.use(cors())
app.use("/api",route)

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
