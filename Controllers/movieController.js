const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovieByDirector = (request, response) => {
  const { Director } = request.params

  let filtered = movies.filter(function (movie) {
    return movie.directors.some(function (director) {
      return director.toLowerCase().includes(Director.toLowerCase())
    })
  })

  response.json(filtered)
}

const getMovieByTitle = (request, response) => {
  const { Title } = request.params
  let filtered = movies.filter(movie => movie.title.toLowerCase().includes(Title.toLowerCase()))

  response.json(filtered)
}

const saveNewMovie = (request, response) => {
  // eslint-disable-next-line no-console
  // console.log(request)

  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('The following fields are required title, directors, releaseDate, rating, runTime, genres')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = {
  getAllMovies,
  getMovieByDirector,
  getMovieByTitle,
  saveNewMovie
}
