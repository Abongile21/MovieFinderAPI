const Movie = require('../models/MovieModel')

exports.getAllMovies = async (req, res)=>{
    try {
        const movies = await Movie.find()

        if(!movies){
           return  res.status(400).send({message: "Failed to get movies"})
        }

        console.log(movies)
        res.status(200).send({message: "Successfully retrieved all titles!", movies})
    } catch (error) {
        res.status(500).send({message: "Cant find movies, some error occured", err})
    }
} 
exports.createMovie = async (req, res)=>{
    try {
        
        const movie = await Movie(req.body)

        if(!movie){
           return  res.status(400).send({message: "Failed to create movie"})
        }
        await movie.save()

        console.log(movie)
        res.status(200).send({message: "Successfully retrieved all titles!", movie})
    } catch (error) {
        res.status(500).send({message: "Cant find movies, some error occured", err})
    }
} 