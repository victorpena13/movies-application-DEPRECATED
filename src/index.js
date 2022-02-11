/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('Victor Pena');

/**
 * require style imports
 */
const {getMovies, addMovie} = require('./api.js');
const $ = require('jquery');

getMovies().then((movies) => {
  let htmlMovies = '';
  movies.forEach(({title, rating, id}) => {
    htmlMovies += `<div><input type="checkbox" value="${id}">${title} Rating: ${rating}</input></div>`
  });
  $('#movie-list').html(htmlMovies);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

$('#submit-new-movie').click(function () {
  let movieTitle = $('#new-movie').val();
  let rating = $('#rating').val();
  addMovie(movieTitle, rating).then((response) =>{

  })
});

