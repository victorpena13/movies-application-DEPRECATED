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

function centerColumn() {
  getMovies().then((movies) => {
    let htmlMovies = '';
    movies.forEach(({title, rating, id}) => {
      htmlMovies += `<br>${title} ---- Rating: ${rating}<br>`
    });
    $('#movie-list').html(htmlMovies);
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
  });
}
centerColumn()
$('#submit-new-movie').click(function () {
  let movieTitle = $('#new-movie').val();
  let rating = $('#rating').val();
  addMovie(movieTitle, rating).then((response) =>{
    centerColumn();
    thirdColumn();
  });
});

function thirdColumn() {
  getMovies().then((movies) => {
    let htmlMovies = '';
    movies.forEach(({title, rating, id}) => {
      htmlMovies += `<div><input class="movieCheckbox" name="selectedMovie" type="checkbox" value="${id}">${title}</input></div>`
    });
    $('#movieListTwo').html(htmlMovies);
  });
  centerColumn();
}
thirdColumn();


$('#delete-movie-button').click(function (){
  var checkboxValues = [];
  $('input[name=selectedMovie]:checked').map(function() {
    checkboxValues.push($(this).val());
    deleteMovie(checkboxValues);
    console.log(checkboxValues);
    centerColumn()
    thirdColumn();
  });
});

