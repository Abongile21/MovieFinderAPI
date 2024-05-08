const express = require("express")
const app = express();
const mongoose = require("mongoose")
const PORT = 4001
const movieRoutes = require('./routes/movieRoutes')
const cors = require("cors")

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://movie_user:Qokelou6NLHDzJvU@cluster0.e9ivks6.mongodb.net/movie_finder?retryWrites=true&w=majority").then(()=>{
    
    console.log("Connected to DB")
})

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to our movie api")
})
app.use('/api/movies', movieRoutes)

app.listen(PORT, ()=>{
    console.log("Connected @ port:", PORT)
})