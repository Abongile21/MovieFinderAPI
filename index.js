const express = require("express")
const app = express();
const mongoose = require("mongoose")
const movieRoutes = require('./routes/movieRoutes')
const cors = require("cors")

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.uri).then(()=>{
    
    console.log("Connected to DB")
})

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to our movie api")
})
app.use('/api/movies', movieRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("Connected @ port:", PORT)
})