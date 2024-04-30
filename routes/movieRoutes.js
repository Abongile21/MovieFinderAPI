const express = require('express')
const router = express.Router()
const movieController = require('../controllers/moviecontrollers')

router.get('/titles', movieController.getAllMovies)
router.post('/titles', movieController.createMovie)


module.exports = router