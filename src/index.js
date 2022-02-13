/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('Victor Pena');

/**
 * require style imports
 */
const {getMovies, addMovie, deleteMovie} = require('./api.js');
const $ = require('jquery');

function loadMovies() {
  getMovies().then((movies) => {
    let htmlMovies = '';
    movies.forEach(({title, rating, id}) => {
      htmlMovies += `<div><input class="movieCheckbox" type="checkbox" name="selectedMovie" value="${id}">${title} Rating: ${rating}</input></div>`
    });
    $('#movie-list').html(htmlMovies);
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
  });

}
loadMovies()
$('#submit-new-movie').click(function () {
  let movieTitle = $('#new-movie').val();
  let rating = $('#rating').val();
  addMovie(movieTitle, rating).then((response) =>{
    loadMovies();
  });
});

$('#deleteBtn').click(function (){
  let movieId = $('.movieCheckbox').val();
  console.log(movieId);
});





