const express = require('express')
const bodyParser = require('body-parser')

const { getAllMovies, getMovieByDirector, getMovieByTitle, saveNewMovie } = require('./Controllers/movieController')
// const movies = require('./movies')

const app = express()

app.get('/api/movies/', getAllMovies)

app.get('/api/movies/Director/:Director', getMovieByDirector)

app.get('/api/movies/:Title', getMovieByTitle)

app.post('/api/movies/', bodyParser, saveNewMovie)
app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
