const Movie = require('../models/MovieModel')

exports.getAllMovies = async (req, res)=>{
    try {
        const movies = await Movie.find()

        if(!movies){
           return  res.status(400).send({message: "Failed to get movies"})
        }

        console.log(movies)
        res.status(200).send({movies})
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

exports.getOneMovie = async (req, res)=>{
    try {

        const {id} = req.param

        const movie = await Movie.findOne(id)

        if(!movie){
           return  res.status(400).send({message: "Failed to find movie"})
        }
        console.log(movie)
        res.status(200).send({message: "Successfully retrieved ", movie})
    } catch (error) {
        res.status(500).send({message: "Cant find movie, some error occured", err})
    }
} 

exports.deleteAllMovies = async (req, res) => {
    try {
        await Movie.deleteMany({}); // Deletes all movies

        res.status(200).send({ message: "Successfully deleted all movies!" });
    } catch (error) {
        res.status(500).send({ message: "Error deleting movies", error });
    }
}
exports.createManyMovies = async (req, res) => {
    const moviesData = req.body.moviesData; // Assuming the request body contains an array of movie data

    try {
        const createdMovies = await Movie.insertMany(moviesData);

        res.status(200).send({ message: "Successfully created movies!", createdMovies });
    } catch (error) {
        res.status(500).send({ message: "Error creating movies", error });
    }
}
exports.deleteMovieById = async (req, res) => {
    const {id} = req.param;

    try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId); // Delete movie by ID

        if (!deletedMovie) {
            return res.status(404).send({ message: "Movie not found" });
        }

        res.status(200).send({ message: "Successfully deleted movie", deletedMovie });
    } catch (error) {
        res.status(500).send({ message: "Error deleting movie", error });
    }
}
