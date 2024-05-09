const express = require('express')
const router = express.Router()
const movieController = require('../controllers/moviecontrollers')

router.get('/titles', movieController.getAllMovies)
router.get('/titles/:id', movieController.getOneMovie)
router.delete('titles/:id',movieController.deleteMovieById)


router.post('/titles', movieController.createMovie)
router.delete('/titles',movieController.deleteAllMovies)
router.post('/titles', movieController.createManyMovies)
module.exports = router